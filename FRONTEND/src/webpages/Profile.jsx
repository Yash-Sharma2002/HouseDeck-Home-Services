import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';


export default function Profile() {
  const commonProps = [
    { name: 'Home Services', url: '/home-services' }
  ] 

 
  return (
    <div>
      <Header commonProps={commonProps} />

      <div style={{height:'100vh'}}></div>

      <Footer />
    </div>
  )
}
