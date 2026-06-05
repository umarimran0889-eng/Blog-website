import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import './Genral.css';

function ContactBar() {
  const handleLink = (e, label) => {
    e.preventDefault();
    alert(`Opening: ${label}`);
  };

  return (
    
    <section className="cb-section">
      <Container fluid className="cb-container">
        <Row className="cb-row g-0">

          <Col xs={12} sm={6} lg={3} className="cb-col">
            <div className="cb-inner">
              <p className="cb-label">General Inquiries</p>
              <a href="mailto:contact@ai-podcasts.com" className="cb-link-box" onClick={(e) => handleLink(e, 'General Email')}>
                <span>contact@ai-podcasts.com</span>
                <FiArrowUpRight className="cb-arrow" />
              </a>
              <a href="tel:+11234567890" className="cb-link-box" onClick={(e) => handleLink(e, 'General Phone')}>
                <span>+1 (123) 456-7890</span>
                <FiArrowUpRight className="cb-arrow" />
              </a>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3} className="cb-col">
            <div className="cb-inner">
              <p className="cb-label">Technical Support</p>
              <a href="mailto:contact@ai-podcasts.com" className="cb-link-box" onClick={(e) => handleLink(e, 'Support Email')}>
                <span>contact@ai-podcasts.com</span>
                <FiArrowUpRight className="cb-arrow" />
              </a>
              <a href="tel:+11234567890" className="cb-link-box" onClick={(e) => handleLink(e, 'Support Phone')}>
                <span>+1 (123) 456-7890</span>
                <FiArrowUpRight className="cb-arrow" />
              </a>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={3} className="cb-col">
            <div className="cb-inner">
              <p className="cb-label">Our Office</p>
              <p className="cb-address">
                Address: 123 AI Tech Avenue, Techville, 54321
              </p>
              <a
                href="https://maps.google.com"
                className="cb-link-box cb-directions"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleLink(e, 'Get Directions')}
              >
                <span>Get Directions</span>
                <FiArrowUpRight className="cb-arrow" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} className="cb-col cb-col--last">
            <div className="cb-inner">
              <p className="cb-label">Connect with Us</p>
              <div className="cb-socials">
                <a
                  href="https://twitter.com"
                  className="cb-social-btn"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => handleLink(e, 'Twitter')}
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://medium.com"
                  className="cb-social-btn"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => handleLink(e, 'Medium')}
                  aria-label="Medium"
                >
                  <SiMedium />
                </a>
                <a
                  href="https://linkedin.com"
                  className="cb-social-btn"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => handleLink(e, 'LinkedIn')}
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default ContactBar;
