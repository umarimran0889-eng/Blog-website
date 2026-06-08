import React, { useState, useEffect, useRef } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import './BlogPanel.css';

import {
  collection, deleteDoc, updateDoc,
  doc, query, orderBy, onSnapshot
} from 'firebase/firestore';
import { db } from '../../Firebase';
import { FiEdit2, FiTrash2, FiCheck, FiX, FiPlus, FiMoreVertical } from 'react-icons/fi';

import ReviewForm from '../../Homepage/ReviewsForm';
import AppModal from '../../components/AppModal';
import Button from '../../components/Buttons/Buttons';

function ReviewsPanel() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', bg: 'success' });
  const reviewFormRef = useRef(null);   // ← ref to trigger ReviewForm submit

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'ReviewsBlog'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  function initiateDelete(review) {
    setActiveMenuId(null);
    setReviewToDelete(review);
    setShowDeleteModal(true);
  }

  async function confirmDelete() {
    if (!reviewToDelete) return;
    try {
      await deleteDoc(doc(db, 'ReviewsBlog', reviewToDelete.id));
      setShowDeleteModal(false);
      setReviewToDelete(null);
      setToast({ show: true, message: 'Review deleted successfully!', bg: 'danger' });
    } catch (err) {
      console.error("Error deleting document: ", err);
      setToast({ show: true, message: 'Failed to delete review.', bg: 'warning' });
    }
  }

  function startEdit(review) {
    setActiveMenuId(null);
    setEditingId(review.id);
    setEditForm({
      name: review.name,
      location: review.location,
      text: review.text,
      rating: review.rating,
    });
  }

  function handleEditChange(e) {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function saveEdit(id) {
    try {
      await updateDoc(doc(db, 'ReviewsBlog', id), {
        name: editForm.name,
        location: editForm.location,
        text: editForm.text,
        rating: Number(editForm.rating),
      });
      setEditingId(null);
      setEditForm({});
      setToast({ show: true, message: 'Review updated successfully!', bg: 'success' });
    } catch (err) {
      console.error("Error updating document: ", err);
      setToast({ show: true, message: 'Failed to update review.', bg: 'warning' });
    }
  }

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
          <FiPlus /> Add Review
        </Button>
      </div>

      <AppModal
        show={showForm}
        onHide={() => setShowForm(false)}
        title="Add New Review"
        footer={
          <>
            <Button variant="cancel" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button variant="save" onClick={() => reviewFormRef.current?.requestSubmit()}>
              Add
            </Button>
          </>
        }
      >
        <ReviewForm
          ref={reviewFormRef}
          onClose={() => setShowForm(false)}
        />
      </AppModal>

      <AppModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        title="Confirm Delete"
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
        <p style={{ color: '#fff' }}>
          Are you sure you want to delete the review from <strong>{reviewToDelete?.name}</strong>? This action cannot be undone.
        </p>
      </AppModal>

      <div className="panel-card">
        <h2 className="panel-card-title">All Reviews ({reviews.length})</h2>
        <div className="table-responsive">
          <table className="blogs-table">
            <thead>
              <tr className="dark-table-header">
                <th>Name</th>
                <th>Location</th>
                <th>Rating</th>
                <th style={{ width: '45%' }}>Review Text</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id}>
                  {editingId === review.id ? (
                    <>
                      <td><input name="name" value={editForm.name} onChange={handleEditChange} /></td>
                      <td><input name="location" value={editForm.location} onChange={handleEditChange} /></td>
                      <td>
                        <select name="rating" value={editForm.rating} onChange={handleEditChange}>
                          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                          <option value="4">⭐⭐⭐⭐ (4)</option>
                          <option value="3">⭐⭐⭐ (3)</option>
                          <option value="2">⭐⭐ (2)</option>
                          <option value="1">⭐ (1)</option>
                        </select>
                      </td>
                      <td><input name="text" value={editForm.text} onChange={handleEditChange} /></td>
                      <td style={{ textAlign: 'center' }}>
                        <div className="edit-actions-container">
                          <Button variant="save" onClick={() => saveEdit(review.id)} title="Save Changes">
                            <FiCheck />
                          </Button>
                          <Button variant="cancel" onClick={() => setEditingId(null)} title="Cancel Edit">
                            <FiX />
                          </Button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="text-light-cell">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            className="review-avatar"
                            style={{ margin: 0, width: '30px', height: '30px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: '#2d2d2d', color: '#fff' }}
                          >
                            {review.name?.[0]?.toUpperCase() || '?'}
                          </div>
                          {review.name}
                        </div>
                      </td>
                      <td className="text-light-cell">{review.location}</td>
                      <td className="text-light-cell">
                        {Array.from({ length: Number(review.rating || 0) }).map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </td>
                      <td className="text-light-cell" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{review.text}</td>
                      <td style={{ textAlign: 'center', position: 'relative' }}>
                        <button
                          className="actions-menu-trigger"
                          onClick={() => setActiveMenuId(activeMenuId === review.id ? null : review.id)}
                        >
                          <FiMoreVertical />
                        </button>
                        {activeMenuId === review.id && (
                          <div className="actions-dropdown" ref={menuRef}>
                            <button onClick={() => startEdit(review)} className="dropdown-item"><FiEdit2 /> Edit Row</button>
                            <button onClick={() => initiateDelete(review)} className="dropdown-item delete-item"><FiTrash2 /> Delete</button>
                          </div>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {reviews.length === 0 && (
            <p style={{ textAlign: 'center', color: '#a0a0a0', marginTop: '20px' }}>No reviews found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewsPanel;