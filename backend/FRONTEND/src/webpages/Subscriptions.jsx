import React from 'react'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import Recommended from '../components/overall/Recommended';
const SubscribeCard = React.lazy(() => import('../components/overall/SubscribeCard'))


export default function Subscriptions() {
  const commonProps = [
    { name: 'Home Services', url: '/' },
    { name: 'Subscriptions Services', url: '#subscription-plans' },
    { name: 'Recommended Services', url: '#Vapormop-Recommended-Services' },
  ]
  return (
    // i will change the contents when they are provided later 
    <div>
      <Header commonProps={commonProps} />
      <SubscribeCard displayForButton={'none'} />
      <Recommended />
      <Footer />
    </div>
  )
}
