import React from 'react'
import Header from "../HousDeckWebsiteComponents/Header"
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage';
// import PropertyBoxMainPageHouseDeckServicesGlobal from '../HousDeckWebsiteComponents/MainPageBottomComponents/PropertyBoxMainPageHouseDeckServicesGlobal';
import MainPageTopQuestions from '../HousDeckWebsiteComponents/MainPageTopQuestions';
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices';
import Footer from '../HousDeckWebsiteComponents/Footer';
import ServicesListed from '../HousDeckWebsiteComponents/MainPageMiddleComponents/ServicesListed';
import SimilarServices from '../HousDeckWebsiteComponents/similarServices';
import TopFirsrtBar from '../HousDeckWebsiteComponents/mainPageTopComponents/TopFirsrtBar';
import TopSecondCarousel from '../HousDeckWebsiteComponents/mainPageTopComponents/TopSecondCarousel';





export default function HouseDeckHomeServicesMainPage() {
  const commonProps = [

    { name: 'Home Services', url: '' },
    { name: 'Recommended Services', url: '#houseDeck-Recommended-Services' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'FAQs', url: '#faqs' },
    { name: 'HouseDeck Services', url: '#houseDeck-Services' },
  ]
  return (
    <>
      <Header commonProps={commonProps} />
      <TopFirsrtBar />
      <TopSecondCarousel />
      <ServicesListed />
      <RecommendedServices />
      <CustomerRatingsMainPage />
      <MainPageTopQuestions />
      {/* <SimilarServices /> */}
      <HouseDeckServicesBottomList />


      {/* <PropertyBoxMainPageHouseDeckServicesGlobal /> */}

      <Footer />
    </>
  )
}
