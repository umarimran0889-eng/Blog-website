import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Resources.css';
import { Link } from "react-router-dom";
import { FiArrowUpRight } from 'react-icons/fi';
import EbookIcon from '../assets/Icon (2).png';
import WhitepaperIcon from '../assets/Icon (3).png';

import EbookBanner from '../assets/Image (5).png';
import WhitepaperBanner from '../assets/Image (4).png';


import User1 from '../assets/Container (1).png';
import User2 from '../assets/Container.png';

const resourcesData = [
  {
    id: 1,
    type: 'Ebooks',
    icon: EbookIcon,
    description: 'Explore our collection of ebooks covering a wide spectrum of future technology topics.',
    downloadLink: '#',
    downloadedCount: '10k + Users',
    users: User1, 
    topicsTitle: 'Variety of Topics',
    topicsDescription: 'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).',
    bannerImage: EbookBanner,
    stats: [
      { label: 'Total Ebooks', value: 'Over 100 ebooks' },
      { label: 'Download Formats', value: 'PDF format for access.', preview: true }
    ],
    expertise: 'Ebooks are authored by renowned experts with an average of 15 years of experience'
  },
  {
    id: 2,
    type: 'Whitepapers',
    icon: WhitepaperIcon,
    description: 'Dive into comprehensive reports and analyses with our collection of whitepapers.',
    downloadLink: '#',
    downloadedCount: '10k + Users',
    users: User2,
    topicsTitle: 'Topics Coverage',
    topicsDescription: 'Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).',
    bannerImage: WhitepaperBanner,
    stats: [
      { label: 'Total Whitepapers', value: 'Over 50 whitepapers' },
      { label: 'Download Formats', value: 'PDF format for access.', preview: true }
    ],
    expertise: 'Whitepapers are authored by subject matter experts with an average of 20 years of experience.'
  }
];

function Resources() {
  return (
    <section className="resources-section">
      <Container fluid className="px-md-5">
        
        <div className="resources-header d-flex justify-content-between align-items-end flex-wrap mb-5">
          <div>
            <span className="resources-badge">Your Gateway to In-Depth Information</span>
            <h2 className="resources-heading mt-2">Unlock Valuable Knowledge with FutureTech's Resources</h2>
          </div>
          <Link to="/hero-res" className="btn-explore-resources">
          <span>View All Resources</span>
           <FiArrowUpRight className="yellow-arrow-inline" />
          </Link>
        </div>

        <div className="resources-stack">
          {resourcesData.map((resource) => (
            <Row key={resource.id} className="resource-row g-0 mb-5">
              
          
              <Col lg={4} className="resource-left-col">
                <div className="resource-cta-card">
                  <img src={resource.icon} alt="" className="resource-icon mb-4" />
                  <h3 className="resource-type-title mb-3">{resource.type}</h3>
                  <p className="resource-description mb-4">{resource.description}</p>
                  
                  <button className="download-now-btn mb-4">
                    Download {resource.type} Now <span className="arrow">↗</span>
                  </button>

                  <div className="downloaded-by-box">
                    <span className="downloaded-label">Downloaded By</span>
                    <div className="downloaded-flex">
                      <span className="downloaded-count">{resource.downloadedCount}</span>
                      <div className="avatar-group">
                      
                        <img src={resource.users} alt="Downloaded users cluster" className="stack-avatar" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              
              <Col lg={8} className="resource-right-col">
                <div className="resource-details-card">
                  
                
                  <div className="resource-topics-header mb-4">
                    <h4 className="topics-title">{resource.topicsTitle}</h4>
                    <p className="topics-text">{resource.topicsDescription}</p>
                  </div>

                
                  <div className="resource-banner-wrapper mb-4">
                    <img src={resource.bannerImage} alt={`${resource.type} Showcase`} className="resource-banner-img" />
                  </div>

            
                  <Row className="g-3 mb-4">
                    {resource.stats.map((stat, sIdx) => (
                      <Col key={sIdx} xs={12} md={6}>
                        <div className="stat-card d-flex justify-content-between align-items-center">
                          <div>
                            <span className="stat-label">{stat.label}</span>
                            <p className="stat-value mb-0">{stat.value}</p>
                          </div>
                          {stat.preview && (
                            <button className="preview-btn">
                              Preview <span className="eye-icon">👁️</span>
                            </button>
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>

                
                  <div className="expertise-card">
                    <span className="expertise-label">Average Author Expertise</span>
                    <p className="expertise-text mb-0">{resource.expertise}</p>
                  </div>

                </div>
              </Col>

            </Row>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Resources;