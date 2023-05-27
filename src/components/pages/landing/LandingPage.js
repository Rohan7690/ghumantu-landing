import React from 'react'
import HeroSection from './HeroSection'
import IssuesSection from './IssuesSection'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import LandingFooter from './LandingFooter'
import Destinations from './Destinations'
import ContactForm from './ContactForm'

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <IssuesSection />
      <ServicesSection />
      <AboutSection />
      <Destinations />
      <ContactForm/>
      <LandingFooter/>
      
    </div>
  )
}

export default LandingPage