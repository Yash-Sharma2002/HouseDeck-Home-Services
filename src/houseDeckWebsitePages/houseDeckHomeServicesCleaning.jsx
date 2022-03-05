import React from 'react'
import Footer from '../HousDeckWebsiteComponents/Footer'
import Header from '../HousDeckWebsiteComponents/Header'
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage'
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices'
import HouseDeckPromise from '../HousDeckWebsiteComponents/otherPageComponents/HouseDeckPromise'
import HowItWorks1 from '../HousDeckWebsiteComponents/otherPageComponents/HowItWorks1'
// import SimilarServices from '../HousDeckWebsiteComponents/similarServices'

export default function HouseDeckHomeServicesCleaning({ city, setCity, handleData }) {
  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'How it works', url: '#how-it-works' },
    // {name:'Service Details',url:'#service-details'},
    { name: 'HouseDeck Promise', url: '#houseDeck-promise' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'HouseDeck Services', url: '#houseDeck-Services' }
  ]
  return (
    <div>
      <Header commonProps={commonProps} />
      <HowItWorks1 />
      <HouseDeckPromise />
      <RecommendedServices />
      <CustomerRatingsMainPage />
      <HouseDeckServicesBottomList />
      {/* <SimilarServices /> */}
      <Footer />
    </div>
  )
}
