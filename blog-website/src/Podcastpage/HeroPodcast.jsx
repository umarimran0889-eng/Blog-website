import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroPodcast.css';

const HeroPodcast = () => {
  return (
    <section className="hero-section-container">
      <Container fluid className="px-md-5 px-4">
        
      
        <div className="hero-flex-layout">
          
          <h1 className="hero-main-title">
            Unlock the World of Artificial Intelligence <br />
            <span>through Podcasts</span>
          </h1>

          <p className="hero-sub-description">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and
            discussions on artificial intelligence. Whether you're an
            enthusiast or a professional, our AI podcasts offer a gateway to
            knowledge and innovation.
          </p>
          <div className="layout-clear"></div>

        </div>

      </Container>
    </section>
  );
};

export default HeroPodcast;