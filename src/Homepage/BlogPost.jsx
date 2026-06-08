import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import './Blogpost.css';

// 1. Import the stripHtml function from the library
import { stripHtml } from 'string-strip-html';

const categories = [
  'All',
  'Quantum Computing',
  'AI Ethics',
  'Space Exploration',
  'Biotechnology',
  'Renewable Energy',
  'Technology',
  'Environment',
];

function BlogPost() {
  const [activeTab, setActiveTab] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsQuery = query(
      collection(db, 'blogs'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(blogsQuery, (snapshot) => {
      const fetchedBlogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(fetchedBlogs);
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
            View All Blogs <span className="arrow">↗</span>
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
          {filteredBlogs.map((blog) => {
            
            // 2. USE THE LIBRARY HERE TO STRIP TAGS CLEANLY
            const cleanDescription = blog.description
              ? stripHtml(blog.description).result.substring(0, 160) + '...'
              : '';

            return (
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
                  
                  {/* 3. Output the clean plain text string */}
                  <p className="post-desc mb-4">{cleanDescription}</p>

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
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default BlogPost;