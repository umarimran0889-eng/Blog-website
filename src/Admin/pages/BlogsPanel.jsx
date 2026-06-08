import React, { useState, useEffect, useRef } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "./BlogPanel.css";

import {
  collection, addDoc, deleteDoc, updateDoc,
  doc, query, orderBy, onSnapshot, serverTimestamp,
} from "firebase/firestore";
import { db } from "../../Firebase";

import { FiEdit2, FiTrash2, FiCheck, FiX, FiPlus, FiMoreVertical } from "react-icons/fi";

import BlogForm from "./BlogForm";
import AppModal from "../../components/AppModal";
import Button from "../../components/Buttons/Buttons"; 

const emptyForm = {
  title: "", description: "", category: "Technology", author: "", date: "",
};

const CATEGORIES = [
  "Technology", "Politics", "Health", "Environment", "Sports",
  "Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy",
];

function BlogsPanel() {
  const [blogs, setBlogs]           = useState([]);
  const [showForm, setShowForm]     = useState(false);
  const [form, setForm]             = useState(emptyForm);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");
  const [success, setSuccess]       = useState("");
  const [editingId, setEditingId]   = useState(null);
  const [editForm, setEditForm]     = useState({});
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete]       = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", bg: "success" });

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setActiveMenuId(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) =>
      setBlogs(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    return () => unsub();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.author || !form.date) {
      setError("Please fill all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await addDoc(collection(db, "blogs"), {
        ...form, likes: 0, comments: 0, shares: 0, createdAt: serverTimestamp(),
      });
      setForm(emptyForm);
      setSuccess("Blog added successfully.");
      setToast({ show: true, message: "Blog created successfully!", bg: "success" });
      setTimeout(() => { setSuccess(""); setShowForm(false); }, 1500);
    } catch {
      setError("Failed to add blog.");
    } finally {
      setLoading(false);
    }
  };

  const initiateDelete = (blog) => {
    setActiveMenuId(null);
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!blogToDelete) return;
    try {
      await deleteDoc(doc(db, "blogs", blogToDelete.id));
      setShowDeleteModal(false);
      setBlogToDelete(null);
      setToast({ show: true, message: "Blog post successfully deleted.", bg: "danger" });
    } catch {
      setToast({ show: true, message: "Failed to delete blog.", bg: "warning" });
    }
  };

  const startEdit = (blog) => {
    setActiveMenuId(null);
    setEditingId(blog.id);
    setEditForm({
      title: blog.title, category: blog.category, author: blog.author,
      date: blog.date, likes: blog.likes, comments: blog.comments, shares: blog.shares,
    });
  };

  const handleEditChange = (e) =>
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const saveEdit = async (id) => {
    try {
      await updateDoc(doc(db, "blogs", id), {
        ...editForm,
        likes: Number(editForm.likes),
        comments: Number(editForm.comments),
        shares: Number(editForm.shares),
      });
      setEditingId(null);
      setToast({ show: true, message: "Blog updated successfully!", bg: "success" });
    } catch {
      setToast({ show: true, message: "Failed to update blog.", bg: "warning" });
    }
  };

  return (
    <div className="panel">
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1100 }}>
        <Toast
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          delay={3000} autohide bg={toast.bg} className="text-white"
        >
          <Toast.Body className="d-flex justify-content-between align-items-center">
            {toast.message}
            <button type="button" className="btn-close btn-close-white"
              onClick={() => setToast({ ...toast, show: false })} />
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="panel-header">
        <Button variant="save" onClick={() => setShowForm(true)}>
          <FiPlus /> Add Blog
        </Button>
      </div>

      <AppModal
        show={showForm}
        onHide={() => setShowForm(false)}
        title="Add New Blog"
        footer={
          <>
            <Button variant="cancel" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button variant="save" onClick={handleAdd}>
              Add
            </Button>
          </>
        }
      >
        <BlogForm
          form={form}
          handleChange={handleChange}
          handleAdd={handleAdd}
          loading={loading}
          error={error}
          success={success}
        />
      </AppModal>

      {/* Delete Confirmation Modal */}
      <AppModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        title="Confirm Deletion"
        footer={
          <>
            <Button variant="cancel" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </>
        }
      >
        <p style={{ color: "#fff" }}>
          Are you sure you want to permanently delete{" "}
          <strong>{blogToDelete?.title}</strong>? This cannot be undone.
        </p>
      </AppModal>

      <div className="panel-card">
        <h2 className="panel-card-title">Blogs ({blogs.length})</h2>
        <div className="table-responsive">
          <table className="blogs-table">
            <thead>
              <tr className="dark-table-header">
                <th>Title</th><th>Category</th><th>Author</th><th>Date</th>
                <th>Likes</th><th>Comments</th><th>Shares</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  {editingId === blog.id ? (
                    <>
                      <td><input name="title" value={editForm.title} onChange={handleEditChange} /></td>
                      <td>
                        <select name="category" value={editForm.category} onChange={handleEditChange}>
                          {CATEGORIES.map((cat) => <option key={cat}>{cat}</option>)}
                        </select>
                      </td>
                      <td><input name="author" value={editForm.author} onChange={handleEditChange} /></td>
                      <td><input type="date" name="date" value={editForm.date} onChange={handleEditChange} /></td>
                      <td><input type="number" name="likes" value={editForm.likes} onChange={handleEditChange} /></td>
                      <td><input type="number" name="comments" value={editForm.comments} onChange={handleEditChange} /></td>
                      <td><input type="number" name="shares" value={editForm.shares} onChange={handleEditChange} /></td>
                      <td style={{ textAlign: "center" }}>
                        <div className="edit-actions-container">
                          <Button variant="save" onClick={() => saveEdit(blog.id)}>
                            <FiCheck />
                          </Button>
                          <Button variant="cancel" onClick={() => setEditingId(null)}>
                            <FiX />
                          </Button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="text-light-cell">{blog.title}</td>
                      <td className="text-light-cell">{blog.category}</td>
                      <td className="text-light-cell">{blog.author}</td>
                      <td className="text-light-cell">{blog.date}</td>
                      <td className="text-light-cell">{blog.likes}</td>
                      <td className="text-light-cell">{blog.comments}</td>
                      <td className="text-light-cell">{blog.shares}</td>
                      <td style={{ textAlign: "center", position: "relative" }}>
                        <button className="actions-menu-trigger"
                          onClick={() => setActiveMenuId(activeMenuId === blog.id ? null : blog.id)}>
                          <FiMoreVertical />
                        </button>
                        {activeMenuId === blog.id && (
                          <div className="actions-dropdown" ref={menuRef}>
                            <button onClick={() => startEdit(blog)} className="dropdown-item">
                              <FiEdit2 /> Edit Row
                            </button>
                            <button onClick={() => initiateDelete(blog)} className="dropdown-item delete-item">
                              <FiTrash2 /> Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {blogs.length === 0 && (
            <p style={{ textAlign: "center", color: "#a0a0a0", marginTop: "20px" }}>No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogsPanel;