import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroResource.css';

const statData = [
  { id: 1, number: '300', label: 'Resources available' },
  { id: 2, number: '12k', label: 'Total Downloads' },
  { id: 3, number: '10k', label: 'Active Users' },
  { id: 4, number: '100', label: 'Countries Accesses Our Content' },
];

function KnowledgeStats() {
  return (
    <section className="ks-section">
      <Container fluid className="ks-container">

        {/* Header: Heading left, Description right */}
        <Row className="ks-header-row align-items-center">
          <Col xs={12} lg={5} className="ks-heading-col">
            <h2 className="ks-heading">
              Unlock a World of<br />Knowledge
            </h2>
          </Col>
          <Col xs={12} lg={7} className="ks-desc-col">
            <p className="ks-description">
              Dive deep into the AI universe with our collection of insightful podcasts.
              Explore the latest trends, breakthroughs, and discussions on artificial
              intelligence. Whether you're an enthusiast or a professional, our AI
              podcasts offer a gateway to knowledge and innovation.
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <div className="ks-divider" />

        {/* Stats Grid */}
        <Row className="ks-stats-row g-0">
          {statData.map((stat, index) => (
            <Col xs={6} lg={3} key={stat.id} className="ks-stat-col">
              <div className="ks-stat-inner">
                <p className="ks-number">
                  {stat.number}<span className="ks-plus">+</span>
                </p>
                <p className="ks-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default KnowledgeStats;
