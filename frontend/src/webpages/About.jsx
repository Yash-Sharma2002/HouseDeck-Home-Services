import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import AboutUs from '../components/other/About';
import AboutMid from '../components/other/AboutMid';
import AboutEnd from '../components/other/AboutEnd';

export default function About() {
  const commonProps = [
    { name: 'Home Services', url: '/' },
    { name: 'Who we are', url: '#who-we-are' }
  ]


  return (
    <div>
      <Header commonProps={commonProps} />
      <AboutUs />
      <AboutMid />
      <AboutEnd />
      <Footer />
    </div>
  )
}