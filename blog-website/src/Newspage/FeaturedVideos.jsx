import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeaturedVideos.css';

const videoData = [
  {
    id: 1,
    title: 'Mars Exploration: Unveiling Alien Landscapes',
    description: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    // Streamable high-quality open source video loops
    videoUrl: 'https://v1.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_61516eef24fbf6.92429819_FPV_preview.mp4',
    duration: '2.30 min'
  },
  {
    id: 2,
    title: 'Blockchain Explained: A Revolution in Finance',
    description: 'Delve into the world of blockchain technology and its transformative impact on the financial industry.',
    videoUrl: 'https://v1.cdnpk.net/videvo_files/video/free/2020-01/large_watermarked/200114_Digital%20Data_01_04_preview.mp4',
    duration: '2.30 min'
  },
  {
    id: 3,
    title: 'Breaking the Silence: Mental Health Awareness in the Workplace',
    description: 'An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.',
    videoUrl: 'https://v1.cdnpk.net/videvo_files/video/free/video0480/large_watermarked/_import_6164d1f2115160.03847424_FPV_preview.mp4',
    duration: '2.30 min'
  },
  {
    id: 4,
    title: 'Revolutionizing Investment Strategies',
    description: 'An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.',
    videoUrl: 'https://v1.cdnpk.net/videvo_files/video/free/video0459/large_watermarked/_import_60f55cf685e827.42595995_FPV_preview.mp4',
    duration: '2.30 min'
  }
];

function FeaturedVideos() {
  const videoRefs = useRef([]);

  const handlePlayToggle = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        // Safe play invocation to bypass browser exceptions
        video.play().catch((err) => {
          console.warn("Autoplay interaction blocked by browser:", err);
        });
      } else {
        video.pause();
      }
    }
  };

  return (
    <section className="featured-videos-section">
      <Container fluid className="px-4 px-md-5">
        
        {/* Header Section */}
        <div className="videos-header d-flex justify-content-between align-items-end flex-wrap mb-5">
          <div>
            <span className="videos-badge">Featured Videos</span>
            <h2 className="videos-heading mt-2">Visual Insights for the Modern Viewer</h2>
          </div>
          <button className="view-all-btn mt-3 mt-md-0">
            View All <span className="arrow">↗</span>
          </button>
        </div>

        {/* Responsive Video Grid Line Section */}
        <Row className="g-4 g-lg-5">
          {videoData.map((video, index) => (
            <Col xs={12} md={6} key={video.id} className="video-card-col">
              <div className="video-card" onClick={() => handlePlayToggle(index)}>
                
                {/* Interactive Video Container */}
                <div className="thumbnail-container">
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={video.videoUrl} 
                    className="video-element"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                  />
                  
                  {/* Visual Interface Overlays */}
                  <div className="thumbnail-overlay">
                    <button className="play-button" aria-label="Toggle Playback">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                </div>

                {/* Content Descriptions */}
                <div className="video-info mt-4">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description text-muted mt-2">{video.description}</p>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default FeaturedVideos;