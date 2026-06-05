import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Resourcecard.css';

const cardData = [
  {
    id: 1,
    title: 'FutureTech Trends 2024',
    description: 'An ebook that predicts upcoming technology trends for the next year, including AI developments',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80',
    detailUrl: '#',
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Space Exploration Ebook',
    description: 'An ebook that predicts upcoming technology trends for the next year, including AI developments',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
    detailUrl: '#',
    pdfUrl: '#',
  },
  {
    id: 3,
    title: 'Quantum Computing Whitepaper',
    description: 'An in-depth whitepaper exploring the principles, applications.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    detailUrl: '#',
    pdfUrl: '#',
  },
];

function ResourceCards() {
  const handleViewDetails = (e, title) => {
    e.preventDefault();
    alert(`Viewing details for: ${title}`);
  };

  const handleDownload = (e, title) => {
    e.preventDefault();
    alert(`Downloading PDF for: ${title}`);
  };

  return (
    <section className="rc-section">
      <Container fluid className="rc-container">
        <Row className="rc-row g-0">
          {cardData.map((card) => (
            <Col xs={12} sm={6} lg={4} key={card.id} className="rc-col">
              <div className="rc-card">

                {/* Rounded image */}
                <div className="rc-card-image-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rc-card-image"
                  />
                </div>

                {/* Body */}
                <div className="rc-card-body">
                  <h4 className="rc-card-title">{card.title}</h4>
                  <p className="rc-card-desc">{card.description}</p>

                  {/* Buttons */}
                  <div className="rc-card-actions">
                    <a
                      href={card.detailUrl}
                      className="rc-btn"
                      onClick={(e) => handleViewDetails(e, card.title)}
                    >
                      View Details
                    </a>
                    <a
                      href={card.pdfUrl}
                      className="rc-btn"
                      onClick={(e) => handleDownload(e, card.title)}
                    >
                      Download PDF Now
                    </a>
                  </div>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ResourceCards;
