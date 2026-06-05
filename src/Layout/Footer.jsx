import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      {/* Change: Adjusted padding behaviors on mobile to guarantee a 16px edge buffer */}
      <Container fluid className="px-4 px-md-5">
        <Row className="gy-4 sm:gy-5">

          <Col xs={6} md={2}>
            <h5 className="footer-heading">Home</h5>
            <ul className="footer-links-list">
              <li><Link to="#" className="footer-link">Features</Link></li>
              <li><Link to="#" className="footer-link">Blogs</Link></li>
              <li>
                <Link to="#" className="footer-link">
                  Resources <span className="badge-new">New</span>
                </Link>
              </li>
              <li><Link to="#" className="footer-link">Testimonials</Link></li>
              <li><Link to="#" className="footer-link">Contact Us</Link></li>
              <li><Link to="#" className="footer-link">Newsletter</Link></li>
            </ul>
          </Col>
          
          <Col xs={6} md={2}>
            <h5 className="footer-heading">News</h5>
            <ul className="footer-links-list">
              <li><Link to="#" className="footer-link">Trending Stories</Link></li>
              <li><Link to="#" className="footer-link">Featured Videos</Link></li>
              <li><Link to="#" className="footer-link">Technology</Link></li>
              <li><Link to="#" className="footer-link">Health</Link></li>
              <li><Link to="#" className="footer-link">Politics</Link></li>
              <li><Link to="#" className="footer-link">Environment</Link></li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5 className="footer-heading">Blogs</h5>
            <ul className="footer-links-list">
              <li><Link to="#" className="footer-link">Quantum Computing</Link></li>
              <li><Link to="#" className="footer-link">AI Ethics</Link></li>
              <li><Link to="#" className="footer-link">Space Exploration</Link></li>
              <li>
                <Link to="#" className="footer-link">
                  Biotechnology <span className="badge-new">New</span>
                </Link>
              </li>
              <li><Link to="#" className="footer-link">Renewable Energy</Link></li>
              <li><Link to="#" className="footer-link">Biohacking</Link></li>
            </ul>
          </Col>

          <Col xs={6} md={2}>
            <h5 className="footer-heading">Podcasts</h5>
            <ul className="footer-links-list">
              <li><Link to="#" className="footer-link">AI Revolution</Link></li>
              <li>
                <Link to="#" className="footer-link">
                  AI Revolution <span className="badge-new">New</span>
                </Link>
              </li>
              <li><Link to="#" className="footer-link">TechTalk AI</Link></li>
              <li><Link to="#" className="footer-link">AI Conversations</Link></li>
            </ul>
          </Col>

          {/* Change: Switched mobile profile from xs={12} to give link cards room to expand */}
          <Col xs={12} md={3} className="mt-4 mt-md-0">
            <h5 className="footer-heading">Resources</h5>
            <div className="d-flex flex-column gap-2">
              
              <Link to="#" className="resource-box-link">
                <span>Whitepapers</span>
                <FiArrowUpRight className="resource-icon-arrow" />
              </Link>

              <Link to="#" className="resource-box-link">
                <span>Ebooks</span>
                <FiArrowUpRight className="resource-icon-arrow" />
              </Link>

              <Link to="#" className="resource-box-link">
                <span>Reports</span>
                <FiArrowUpRight className="resource-icon-arrow" />
              </Link>

              <Link to="#" className="resource-box-link">
                <span>Research Papers</span>
                <FiArrowUpRight className="resource-icon-arrow" />
              </Link>

            </div>
          </Col>

        </Row>

        {/* Change: Softened separation borders for dark-mode layout consistency */}
        <hr className="footer-divider my-4 sm:my-5" />

        {/* Change: Implemented mobile responsive reordering to avoid alignment issues */}
        <Row className="align-items-center gy-3">
          
          {/* Legal Links Column */}
          <Col xs={12} md={4} className="text-center text-md-start order-2 order-md-1">
            <ul className="footer-bottom-links d-inline-flex align-items-center pl-0 mb-0">
              <li><Link to="#" className="footer-bottom-link">Terms & Conditions</Link></li>
              <li className="footer-bottom-divider mx-2">|</li>
              <li><Link to="#" className="footer-bottom-link">Privacy Policy</Link></li>
            </ul>
          </Col>

          {/* Social Icons Column */}
          <Col xs={12} md={4} className="text-center order-1 order-md-2 social-icons-gap py-2 py-md-0">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mx-2 d-inline-block">
              <svg className="social-svg-icon" width="18" height="18" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a href="https://medium.com" target="_blank" rel="noreferrer" className="mx-2 d-inline-block">
              <svg className="social-svg-icon" width="18" height="18" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.29-.32 5.96-.71 5.96s-.71-2.67-.71-5.96.32-5.96.71-5.96.71 2.67.71 5.96z"/>
              </svg>
            </a>
          
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mx-2 d-inline-block">
              <svg className="social-svg-icon" width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
              </svg>
            </a>
          </Col>

          {/* Copyright Column */}
          <Col xs={12} md={4} className="copyright-text text-center text-md-end order-3 order-md-3">
            <span>&copy; 2026 FutureTech. All rights reserved.</span>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;