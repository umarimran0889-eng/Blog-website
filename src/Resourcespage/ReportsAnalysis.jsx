import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ReportsAnalysis.css';


import Imageres1 from '../assets/Image (11).png';
import Imageres2 from '../assets/Image (12).png'

const whitepapers = [
  {
    id: 1,
    title: 'Quantum Computing Whitepaper',
    description: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
    shortDesc: 'Provides technical specifications and requirements for implementing quantum computing systems.',
    date: 'July 2023',
    category: 'Quantum Computing',
    author: 'Dr. Quantum',
    image: Imageres1,
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Space Exploration Whitepaper',
    description: 'An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.',
    shortDesc: 'Explores Mars colonization, asteroid resource potential, and space tourism.',
    date: 'September 2023',
    category: 'Space Exploration',
    author: 'FutureTech Space Division',
    image: Imageres2,
    pdfUrl: '#',
  },
];

const ebooks = [
  {
    id: 1,
    title: 'FutureTech Trends 2024',
    description: 'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80',
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Space Exploration Ebook',
    description: 'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80',
    pdfUrl: '#',
  },
  {
    id: 3,
    title: 'Quantum Computing Whitepaper',
    description: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
    pdfUrl: '#',
  },
];

const reports = [
  {
    id: 1,
    title: 'AI Market Report 2024',
    description: 'Comprehensive analysis of the AI market, trends, and forecasts for the coming years.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80',
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Tech Infrastructure Report',
    description: 'A deep-dive into global tech infrastructure developments and emerging technologies.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
    pdfUrl: '#',
  },
  {
    id: 3,
    title: 'Blockchain Innovation Report',
    description: 'Examining blockchain applications beyond cryptocurrency in enterprise environments.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80',
    pdfUrl: '#',
  },
];

const tabs = ['Whitepapers', 'Ebooks', 'Reports'];

function ReportsAnalysis() {
  const [activeTab, setActiveTab] = useState('Whitepapers');

  const handleDownload = (e) => {
    e.preventDefault();
    alert('Download starting... (PDF link would open here)');
  };

  const handleViewDetails = (e, title) => {
    e.preventDefault();
    alert(`Viewing details for: ${title}`);
  };

  const getCardData = () => {
    if (activeTab === 'Ebooks') return ebooks;
    if (activeTab === 'Reports') return reports;
    return [];
  };

  return (
    <section className="ra-section">
      <Container fluid className="ra-container">

        <Row className="ra-topbar g-0 align-items-center">
          <Col xs={12} md={6} className="ra-topbar-left">
            <span className="ra-eyebrow">Dive into the Details</span>
            <h2 className="ra-heading">In-Depth Reports and Analysis</h2>
          </Col>
          <Col xs={12} md={6} className="ra-topbar-right">
            <div className="ra-tabs">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`ra-tab${activeTab === tab ? ' ra-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Col>
        </Row>
\
        {activeTab === 'Whitepapers' && (
          <div className="ra-whitepapers">
            {whitepapers.map((wp) => (
              <div key={wp.id} className="ra-wp-block">
                <Row className="g-0">

              
                  <Col xs={12} lg={4} className="ra-wp-left">
                    <div className="ra-wp-left-inner">
                      <div className="ra-wp-icon">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                          <rect x="0" y="0" width="24" height="24" fill="#e6b800"/>
                          <rect x="20" y="20" width="24" height="24" fill="#b38a00" opacity="0.55"/>
                        </svg>
                      </div>
                      <h3 className="ra-wp-title">{wp.title}</h3>
                      <p className="ra-wp-shortdesc">{wp.shortDesc}</p>
                    </div>
                  </Col>

                  <Col xs={12} lg={8} className="ra-wp-right">
                    <div className="ra-wp-right-inner">

               
                      <div className="ra-wp-image-wrap">
                        <img src={wp.image} alt={wp.title} className="ra-wp-image" />
                      </div>

                  
                      <div className="ra-wp-info-top">
                        <div className="ra-wp-info-text">
                          <p className="ra-wp-info-title">{wp.title}</p>
                          <p className="ra-wp-info-desc">{wp.description}</p>
                        </div>
                        <a
                          href={wp.pdfUrl}
                          className="ra-download-link"
                          onClick={handleDownload}
                        >
                          Download PDF Now
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{marginLeft: 5, flexShrink: 0}}>
                            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>

                      <div className="ra-wp-meta">
                        <div className="ra-wp-meta-item">
                          <span className="ra-meta-label">Publication Date</span>
                          <span className="ra-meta-value">{wp.date}</span>
                        </div>
                        <div className="ra-wp-meta-item">
                          <span className="ra-meta-label">Category</span>
                          <span className="ra-meta-value">{wp.category}</span>
                        </div>
                        <div className="ra-wp-meta-item">
                          <span className="ra-meta-label">Author</span>
                          <span className="ra-meta-value">{wp.author}</span>
                        </div>
                      </div>

                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'Whitepapers' && (
          <Row className="ra-cards-row g-0">
            {getCardData().map((item) => (
              <Col xs={12} sm={6} lg={4} key={item.id} className="ra-card-col">
                <div className="ra-card">
                  <div className="ra-card-image-wrap">
                    <img src={item.image} alt={item.title} className="ra-card-image" />
                  </div>
                  <div className="ra-card-body">
                    <h4 className="ra-card-title">{item.title}</h4>
                    <p className="ra-card-desc">{item.description}</p>
                    <div className="ra-card-actions">
                      <a href="#" className="ra-card-btn ra-card-btn--outline" onClick={(e) => handleViewDetails(e, item.title)}>
                        View Details
                      </a>
                      <a href="#" className="ra-card-btn ra-card-btn--solid" onClick={handleDownload}>
                        Download PDF Now
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

      </Container>
    </section>
  );
}

export default ReportsAnalysis;
