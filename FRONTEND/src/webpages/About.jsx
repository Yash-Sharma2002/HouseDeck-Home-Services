import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import AboutUs from '../components/other/About';
import AboutMid from '../components/other/AboutMid';

export default function About() {
  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'Who we are', url: '#who-we-are' }
  ]
  return (
    <div>
      <Header commonProps={commonProps} />

      <AboutUs />
      <AboutMid />
      <Footer />
    </div>
  )
}