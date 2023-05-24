import React from 'react'
import HeroSection from './HeroSection'
import IssuesSection from './IssuesSection'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <IssuesSection />
      <ServicesSection />
      <AboutSection />
    </div>
  )
}

export default LandingPage