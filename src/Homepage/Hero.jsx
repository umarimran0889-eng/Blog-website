import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';
import './Hero.css';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <Container fluid className="px-md-5">

        <Row className="hero-main-row g-0">

          <Col xs={12} lg={6} className="hero-left-col">

    
            <div className="hero-text-block">
              <h4 className="hero-subtitle">Your Journey to Tomorrow Begins Here</h4>
              <h1 className="hero-title">
                Explore the Frontiers of<br />Artificial Intelligence
              </h1>
              <p className="hero-description">
                Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where
                machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
              </p>
            </div>

            <div className="stats-block">
              <div className="stat-item">
                <div className="stat-number">300<span className="stat-plus">+</span></div>
                <div className="stat-label">Resources available</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">12k<span className="stat-plus">+</span></div>
                <div className="stat-label">Total Downloads</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">10k<span className="stat-plus">+</span></div>
                <div className="stat-label">Active Users</div>
              </div>
            </div>

          </Col>

          <Col xs={12} lg={6} className="hero-right-col">
            <div className="hero-right-panel">
        
              <div className="hero-info-card">
                <div className="avatar-group">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="User" className="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="User" className="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User" className="avatar-img" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="User" className="avatar-img" />
                </div>
                <h3 className="hero-right-heading">Explore 1000+ resources</h3>
                <p className="hero-right-text">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                <Link to="/hero-res" className="btn-explore-resources">
                        <span>Explore Resources</span>
                 <FiArrowUpRight className="yellow-arrow-inline" />
                 </Link>
              </div>
            </div>
          </Col>

        </Row>

        <Row className="features-row g-0">

          <Col xs={12} lg={4} className="feature-col">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2V8M16 24V30M2 16H8M24 16H30M6.1 6.1L10.3 10.3M21.7 21.7L25.9 25.9M6.1 25.9L10.3 21.7M21.7 10.3L25.9 6.1"
                    stroke="#FFD014" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="feature-title-area">
                <div>
                  <h4 className="feature-card-title">Latest News Updates</h4>
                  <span className="feature-card-subtitle">Stay Current</span>
                </div>
                <button className="btn-circle-arrow" aria-label="Navigate to news">
                  <FiArrowUpRight />
                </button>
              </div>
              <p className="feature-card-desc">Over 1,000 articles published monthly</p>
            </div>
          </Col>

          <Col xs={12} lg={4} className="feature-col">
            <div className="feature-card feature-card--bordered">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 32 32" fill="none">
                  <circle cx="11" cy="11" r="5" fill="#98989A" />
                  <circle cx="21" cy="11" r="5" fill="#FFD014" />
                  <circle cx="11" cy="21" r="5" fill="#FFD014" />
                  <circle cx="21" cy="21" r="5" fill="#98989A" />
                </svg>
              </div>
              <div className="feature-title-area">
                <div>
                  <h4 className="feature-card-title">Expert Contributors</h4>
                  <span className="feature-card-subtitle">Trusted Insights</span>
                </div>
                <button className="btn-circle-arrow" aria-label="Navigate to experts">
                  <FiArrowUpRight />
                </button>
              </div>
              <p className="feature-card-desc">50+ renowned AI experts on our team</p>
            </div>
          </Col>

          <Col xs={12} lg={4} className="feature-col">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16C6 10.4772 10.4772 6 16 6H26V16C26 21.5228 21.5228 26 16 26H6V16Z" fill="#98989A" opacity="0.35" />
                  <path d="M6 16C6 10.4772 10.4772 6 16 6V16H6Z" fill="#FFD014" />
                  <path d="M16 16V26C21.5228 26 26 21.5228 26 16H16Z" fill="#FFFFFF" opacity="0.9" />
                </svg>
              </div>
              <div className="feature-title-area">
                <div>
                  <h4 className="feature-card-title">Global Readership</h4>
                  <span className="feature-card-subtitle">Worldwide Impact</span>
                </div>
                <button className="btn-circle-arrow" aria-label="Navigate to readership stats">
                  <FiArrowUpRight />
                </button>
              </div>
              <p className="feature-card-desc">2 million monthly readers</p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;
