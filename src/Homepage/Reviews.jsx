import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import ReviewForm from './ReviewsForm';
import './Reviews.css';

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const reviewsQuery = query(
      collection(db, 'ReviewsBlog'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(reviewsQuery, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <section className="testimonials-section">
        <Container fluid className="px-md-5">
          <p className="reviews-loading-text">Loading reviews...</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <Container fluid className="px-md-5">

        <div className="testimonials-header d-flex justify-content-between align-items-end flex-wrap mb-5">
          <div>
            <span className="testimonials-badge">What Our Readers Say</span>
            <h2 className="testimonials-heading mt-2">Real Words from Real Readers</h2>
          </div>
          <div className="reviews-header-actions mt-3 mt-md-0">
            <button className="write-review-btn" onClick={() => setShowForm(true)}>
              Write a Review ✍️
            </button>
            <button className="view-all-testimonials-btn">
              View All Testimonials <span className="arrow">↗</span>
            </button>
          </div>
        </div>

        {reviews.length === 0 && (
          <p className="reviews-empty-text">No reviews yet — be the first!</p>
        )}

        <Row className="g-0 testimonials-grid">
          {reviews.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4} className="testimonial-col">
              <div className="testimonial-card">

                <div className="text-center mb-2">
                  <div className="testimonial-avatar-fallback mb-3">
                    {item.name?.[0]?.toUpperCase()}
                  </div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <span className="testimonial-location">{item.location}</span>
                </div>

                <div className="testimonial-content-box">
                  <div className="testimonial-stars mb-3">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon">⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">{item.text}</p>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>

      <Modal 
        show={showForm} 
        onHide={() => setShowForm(false)} 
        centered
        contentClassName="custom-bootstrap-modal"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm onClose={() => setShowForm(false)} />
        </Modal.Body>
      </Modal>

    </section>
  );
}

export default Testimonials;