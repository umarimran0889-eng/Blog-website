import React from 'react'
import FeaturedVideos from './FeaturedVideos'

import HeroNews from './HeroNews'
import WorldHeadline from './WorldHeadlines'
import TechRevolution from '../Homepage/TechRevolution'
const Newspage = () => {
  return (
    <div>
        <HeroNews/>
        <WorldHeadline/>
        <FeaturedVideos/>
        <TechRevolution/>
    </div>
  )
}

export default Newspage