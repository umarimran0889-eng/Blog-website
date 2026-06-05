import React from 'react';
import './HeroNews.css';

import { FaRegHeart, FaRegPaperPlane } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

import ClimateImg from '../assets/Image (6).png';
import PoliticsImg from '../assets/Image (7).png';
import TechImg from '../assets/Image (8).png';
import CovidImg from '../assets/Image (8).png';

const HeroNews = () => {
  const featuredArticle = {
    title: 'Global Climate Summit Addresses Urgent Climate Action',
    description: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
    category: 'Environment',
    date: 'October 10, 2023',
    author: 'Jane Smith',
    likes: '14k',
    shares: '204',
    image: ClimateImg
  };

  const subArticles = [
    {
      title: 'A Decisive Victory for Progressive Policies',
      category: 'Politics',
      likes: '2.2k',
      shares: '60',
      image: PoliticsImg
    },
    {
      title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
      category: 'Technology',
      likes: '6k',
      shares: '92',
      image: TechImg
    },
    {
      title: 'COVID-19 Variants',
      category: 'Health',
      likes: '10k',
      shares: '124',
      image: CovidImg
    }
  ];

  return (
    <section className="headlines-container">
      <div className="headlines-header">
        <h1 className="headlines-main-title">Today's Headlines: Stay Informed</h1>
        <p className="headlines-subtitle">
          Explore the latest news from around the world. We bring you up-to-the-minute updates on the most 
          significant events, trends, and stories. Discover the world through our news coverage.
        </p>
      </div>

      <div className="featured-article">
        <div className="featured-image-wrapper">
          <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-image" />
        </div>
        
        <div className="featured-content">
          <h2 className="featured-title">{featuredArticle.title}</h2>
          <p className="featured-desc">{featuredArticle.description}</p>
          
          <div className="featured-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">{featuredArticle.category}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Publication Date</span>
              <span className="meta-value">{featuredArticle.date}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Author</span>
              <span className="meta-value">{featuredArticle.author}</span>
            </div>
          </div>

          <div className="featured-footer">
            <div className="engagement-actions">
              <button className="action-btn"><FaRegHeart /> {featuredArticle.likes}</button>
              <button className="action-btn"><FaRegPaperPlane /> {featuredArticle.shares}</button>
            </div>
            <button className="read-more-btn-text">Read More</button>
          </div>
        </div>
      </div>

      <div className="sub-articles-grid">
        {subArticles.map((article, index) => (
          <div key={index} className="sub-article-card">
            <div className="card-image-wrapper">
              <img src={article.image} alt={article.title} className="card-image" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{article.title}</h3>
              <span className="card-category">{article.category}</span>
              
              <div className="card-footer">
                <div className="engagement-actions">
                  <button className="action-btn"><FaRegHeart /> {article.likes}</button>
                  <button className="action-btn"><FaRegPaperPlane /> {article.shares}</button>
                </div>
                <button className="read-more-btn-outline">
                  Read More <FiArrowUpRight className="arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroNews;