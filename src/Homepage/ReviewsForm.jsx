import React, { useState } from 'react';
import { submitReview } from '../Services/Reviews';
import './ReviewsForm.css';

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="star-picker">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star-pick ${star <= (hovered || value) ? 'active' : ''}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewForm({ onClose = () => {} }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [text, setText] = useState(''); // This handles your experience text content
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

 

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !location || !text || text === '<p><br></p>' || rating === 0) {
      setError('Please fill in all fields and select a rating.');
      return;
    }

    const longWordRegex = /[^\s]{25,}/;
    if (longWordRegex.test(text) || longWordRegex.test(name)) {
      setError('Please enter valid words. Long unbroken character strings are not allowed.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await submitReview({
        name: name,
        location: location,
        text: text, 
        rating: rating,
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
        // Reset form variables
        setName('');
        setLocation('');
        setText('');
        setRating(0);
        setSuccess(false);
      }, 1500);

    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="review-success" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <span className="success-icon" style={{ fontSize: '2.5rem' }}>✅</span>
        <p className="success-text" style={{ color: '#ffffff', marginTop: '15px' }}>
          Review submitted successfully!
        </p>
      </div>
    );
  }

  return (
    <div className="review-form-internal-content">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name..."
            maxLength={50}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Your location eg: Lahore, Pakistan"
            maxLength={50}
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <StarPicker value={rating} onChange={setRating} />
        </div>

        
        <div className="form-group text-editor-container" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Experience:</label>
          <ReactQuill
            theme="snow"
            value={text}
            onChange={setText}
            placeholder="Share Your Experience here..."
          />
        </div>

        {error && <p className="form-error">{error}</p>}

       

      </form>
    </div>
  );
}

export default ReviewForm;