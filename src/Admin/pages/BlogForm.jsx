import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

function BlogForm({ form, handleChange, handleAdd, loading, error, success}) {

    const handleQuillChange = (value) => {
    handleChange({
      target: {
        name: 'description',
        value: value
      }
    });
  };

  const CATEGORIES = [
  "Technology",
  "Politics",
  "Health",
  "Environment",
  "Sports",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

  return (
    <form onSubmit={handleAdd}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div className="form-group" style={{ marginBottom: '10px' }}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '10px' }}>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
      </div>

          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label>Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

      <div className="form-group" style={{ marginBottom: '10px' }}>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group text-editor-container" style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
        <ReactQuill
          theme="snow"
          value={form.description}
          onChange={handleQuillChange}
          placeholder="Write your blog details here..."
        />
      </div>
    </form>
  );
}

export default BlogForm;