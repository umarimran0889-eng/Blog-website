import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { subscribeToBlogs } from '../services/blogs';
import './Worldheadlines.css';

const categories = ['All', 'Technology', 'Politics', 'Health', 'Environment', 'Sports'];

function WorldHeadline() {
  const [activeTab, setActiveTab] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToBlogs((data) => {
      setBlogs(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredBlogs = activeTab === 'All'
    ? blogs
    : blogs.filter((blog) => blog.category === activeTab);

  if (loading) {
    return (
      <section className="blog-section">
        <Container fluid className="px-md-5">
          <p className="blogs-loading-text">Loading blogs...</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <Container fluid className="px-md-5">

        <div className="blog-header d-flex justify-content-between align-items-end flex-wrap mb-5">
          <div>
            <span className="blog-badge">A Knowledge Treasure Trove</span>
            <h2 className="blog-heading mt-2">Explore FutureTech's In-Depth Blog Posts</h2>
          </div>
          <button className="view-all-btn mt-3 mt-md-0">
            View All Blogs <span className="arrow"></span>
          </button>
        </div>

        <div className="category-tabs-container mb-5">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredBlogs.length === 0 && (
          <p className="blogs-empty-text">No posts in this category yet.</p>
        )}

        <div className="blog-list">
          {filteredBlogs.map((blog) => (
            <Row key={blog.id} className="blog-row align-items-center py-4 py-md-5">

              <Col xs={12} md={3} className="author-col mb-3 mb-md-0">
                <div className="d-flex align-items-center gap-3">
                  <div className="author-avatar-fallback">
                    {blog.author?.[0]?.toUpperCase()}
                  </div>
                  <div>
                    <h4 className="author-name">{blog.author}</h4>
                    <span className="author-cat">{blog.category}</span>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={7} className="content-col mb-4 mb-md-0">
                <div className="blog-meta-date mb-2">{blog.date}</div>
                <h3 className="post-title mb-2">{blog.title}</h3>
                <p className="post-desc mb-4">{blog.description}</p>
                <div className="engagement-stats d-flex gap-3">
                  <div className="stat-pill">
                    <span className="stat-icon">❤️</span> {blog.likes}
                  </div>
                  <div className="stat-pill">
                    <span className="stat-icon">💬</span> {blog.comments}
                  </div>
                  <div className="stat-pill">
                    <span className="stat-icon">🔗</span> {blog.shares}
                  </div>
                </div>
              </Col>

              <Col xs={12} md={2} className="action-col text-md-end">
                <button className="view-blog-btn">
                  View Blog <span className="arrow">↗</span>
                </button>
              </Col>

            </Row>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default WorldHeadline;