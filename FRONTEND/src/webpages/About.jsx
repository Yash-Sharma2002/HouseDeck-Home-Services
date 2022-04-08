import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import AboutUs from '../components/other/About';

export default function About() {
  const commonProps = [
    {name:'Who we are',url:'#who-we-are'}
  ]
  return (

    <div>
      <Header commonProps={commonProps} />
      
      <AboutUs />

      <Footer />
    </div>
  )
}
