import React from 'react'
import Header from "../HousDeckWebsiteComponents/Header"
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage';
// import PropertyBoxMainPageHouseDeckServicesGlobal from '../HousDeckWebsiteComponents/MainPageBottomComponents/PropertyBoxMainPageHouseDeckServicesGlobal';
import MainPageTopQuestions from '../HousDeckWebsiteComponents/MainPageTopQuestions';
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices';
import Footer from '../HousDeckWebsiteComponents/Footer';
import SearchNSelect from '../HousDeckWebsiteComponents/mainPageTopComponents/SearchNSelect';





export default function HouseDeckHomeServicesMainPage() {
  const commonProps = [

    { name: 'hello' },
    { name: 'hello2' },
    { name: 'We can add as many things as we want' }


    // { name: 'hello', url: '#' },
    // { name: 'hello2', url: '#houseDeck-Services' },
    // { name: 'We can add as many things as we want', url: '#' }
  ]
  return (
    <>
      <Header commonProps={commonProps} />
      <SearchNSelect />
      <RecommendedServices />
      <CustomerRatingsMainPage />
      <MainPageTopQuestions />
      {/* <div style={{height:'10000px'}}></div> */}
      <HouseDeckServicesBottomList />
      {/* <div style={{height:'10000px'}}></div> */}


      {/* <PropertyBoxMainPageHouseDeckServicesGlobal /> */}

      <Footer />
    </>
  )
}
