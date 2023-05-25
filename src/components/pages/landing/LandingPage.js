import React from 'react'
import HeroSection from './HeroSection'
import IssuesSection from './IssuesSection'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import LandingFooter from './LandingFooter'

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <IssuesSection />
      <ServicesSection />
      <AboutSection />
      <LandingFooter/>
    </div>
  )
}

export default LandingPage