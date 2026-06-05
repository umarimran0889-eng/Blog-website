import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Futuretech.css';
import Icon1 from '../assets/Icon.png'
import Icon2 from '../assets/Icon (1).png'


const sections = [
  {
    id: 'blog',
    image:Icon1,
    imageAlt: 'Future Technology Blog Icon',
    title: 'Future Technology Blog',
    description: 'Stay informed with our blog section dedicated to future technology.',
    cards: [
      { title: 'Quantity',      body: 'Over 1,000 articles on emerging tech trends and breakthroughs.' },
      { title: 'Variety',       body: 'Articles cover fields like AI, robotics, biotechnology, and more.' },
      { title: 'Frequency',     body: 'Fresh content added daily to keep you up to date.' },
      { title: 'Authoritative', body: 'Written by our team of tech experts and industry professionals.' },
    ],
  },
  {
    id: 'research',
    image:Icon2,
    imageAlt: 'Research Insights Icon',
    title: 'Research Insights Blogs',
    description: 'Dive deep into future technology concepts with our research section.',
    cards: [
      { title: 'Depth',        body: '500+ research articles for in-depth understanding.' },
      { title: 'Graphics',     body: 'Visual aids and infographics to enhance comprehension.' },
      { title: 'Trends',       body: 'Explore emerging trends in future technology research.' },
      { title: 'Contributors', body: 'Contributions from tech researchers and academics.' },
    ],
  },
];



function Futuretech() {
  return (
    <section className="features-section">
      <Container fluid className="px-md-5">

        <div className="features-header">
          <span className="features-badge">Unlock the Power of</span>
          <h2 className="features-heading">FutureTech Features</h2>
        </div>

        {sections.map((sec) => (
          <Row key={sec.id} className="section-row g-0">

            <Col xs={12} lg={4} className="label-col">
              <div className="label-inner">
                <img src={sec.image} alt={sec.imageAlt} className="section-img" />
                <h3 className="section-title">{sec.title}</h3>
                <p className="section-desc">{sec.description}</p>
              </div>
            </Col>

            <Col xs={12} lg={8} className="cards-col">
              <div className="cards-grid">
                {sec.cards.map((card) => (
                  <div key={card.title} className="feat-card">
                    <h4 className="feat-card-title">{card.title}</h4>
                    <p className="feat-card-body">{card.body}</p>
                  </div>
                ))}
              </div>
            </Col>

          </Row>
        ))}

      </Container>
    </section>
  );
}

export default Futuretech;

