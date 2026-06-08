import React from 'react'

import HeroResource  from './HeroResource'
import ReportsAnalysis from './ReportsAnalysis'
import ResourceCards from './Resourcecard'
import TechRevolution from '../Homepage/TechRevolution';


const Resourcepage = () => {
  return (
    <div> 
        <HeroResource/>
        <ReportsAnalysis/>
        <ResourceCards/>
        <TechRevolution/>
    </div>
  )
}

export default Resourcepage