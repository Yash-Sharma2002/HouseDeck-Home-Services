import React from 'react'
import SubscribeCard from '../HousDeckWebsiteComponents/MainPageMiddleComponents/SubscribeCard'
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices'
import Header from '../HousDeckWebsiteComponents/Header'
import Footer from '../HousDeckWebsiteComponents/Footer'

export default function HouseDeckHomeServicesSubscriptionPage() {
  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'Subscriptions Services', url: '#subscription-plans' },
    { name: 'Recommended Services', url: '#houseDeck-Recommended-Services' },
  ]
  return (
    // i will change the contents when they are provided later 
    <div>
      <Header commonProps={commonProps} />
      <SubscribeCard displayForButton={'none'} />
      <RecommendedServices />
      <Footer />
    </div>
  )
}
