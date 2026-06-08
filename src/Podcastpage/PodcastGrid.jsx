import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Podcastgrid.css';

const podcastEpisodes = [
  {
    id: 1,
    title: 'AI in Healthcare',
    description: 'Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care outcomes.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    category: 'Health',
  },
  {
    id: 2,
    title: 'AI Ethics',
    description: 'Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    category: 'Ethics',
  },
  {
    id: 3,
    title: 'Machine Learning Explained',
    description: 'Dive into the intricacies of machine learning with AI expert Sarah Davis in this detailed episode.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    category: 'Tech',
  },
  {
    id: 4,
    title: 'AI and the Future of Work',
    description: 'Dr. Olivia White joins John Parker to discuss the evolving role of AI in the modern workplace.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    category: 'Business',
  },
  {
    id: 5,
    title: 'AI in Education',
    description: 'Explore the role of AI in education as Emily Turner discusses how AI is transforming classrooms worldwide.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    category: 'Education',
  },
  {
    id: 6,
    title: 'AI in Entertainment',
    description: 'David Smith explores the influence of AI in the entertainment industry and what the future holds.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    category: 'Media',
  },
];

function PodcastCard({ episode }) {
  return (
    <Card className="podcast-card h-100">
      <div className="video-wrapper">
        <span className="category-badge">{episode.category}</span>
        {/* Native controls — play, pause, volume, seek all built in */}
        <video
          className="podcast-video"
          controls
          preload="metadata"
        >
          <source src={episode.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Card.Body className="card-body-custom d-flex flex-column">
        <Card.Title className="episode-title">{episode.title}</Card.Title>
        <Card.Text className="episode-description">{episode.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function PodcastGrid() {
  return (
    <div className="podcast-page">
      <Container fluid="lg">
        <div className="page-header">
          <Badge className="header-badge">Stay Informed with Fresh Content</Badge>
          <h1 className="page-title">Latest Podcast Episodes</h1>
        </div>
        <Row className="g-4">
          {podcastEpisodes.map((ep) => (
            <Col key={ep.id} lg={4} md={6} sm={12}>
              <PodcastCard episode={ep} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
