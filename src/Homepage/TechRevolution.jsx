import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TechRevolution.css';

import Logo1 from '../assets/Logo (1).png';

const TechRevolution = () => {
  const cards = [
    {
      title: 'Resource Access',
      description: 'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
    },
    {
      title: 'Community Forum',
      description: 'Join our active community forum to discuss industry trends, share insights, and collaborate with peers.',
    },
    {
      title: 'Tech Events',
      description: 'Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.',
    },
  ];

  return (
    <section className="tech-revolution-container">
      <Container>
        
        {/* HEADER AREA */}
        <div className="tech-header-layout">
          <div className="tech-logo-zone">
            <img src={Logo1} alt="Logo" className="tech-logo-img" />
          </div>

          <div className="tech-text-zone">
            <span className="tech-badge">Learn, Connect, and Innovate</span>
            <h2 className="tech-heading">Be Part of the Future Tech Revolution</h2>
            <p className="tech-description">
              Immerse yourself in the world of future technology. Explore our comprehensive resources, 
              connect with fellow tech enthusiasts, and drive innovation in the industry. Join a 
              dynamic community of forward-thinkers.
            </p>
          </div>
        </div>

        <div className="tech-cards-outer-box">
          <Row className="g-4">
            {cards.map((card, index) => (
              <Col key={index} lg={4} md={12}>
                <div className="tech-card-item">
                  <div className="tech-card-header">
                    <h3 className="tech-card-title">{card.title}</h3>
                    <div className="arrow-icon-circle">
                      <FiArrowUpRight className="react-arrow-icon" />
                    </div>
                  </div>
                  <p className="tech-card-desc">{card.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default TechRevolution;