import React from 'react'
import BlogPost from './BlogPost';
import Futuretech from './Futuretech';
import Hero from './Hero';
import Resources from './Resources';
import Testimonials from './Reviews';
import TechRevolution from './TechRevolution';

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Futuretech/>
        <BlogPost/>
        <Resources/>
        <Testimonials/>
        <TechRevolution/>
    </div>
  )
}

export default HomePage