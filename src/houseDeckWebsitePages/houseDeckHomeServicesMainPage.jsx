import React from 'react'
import Header from '../HousDeckWebsiteComponents/Header';
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage';
// import PropertyBoxMainPageHouseDeckServicesGlobal from '../HousDeckWebsiteComponents/MainPageBottomComponents/PropertyBoxMainPageHouseDeckServicesGlobal';
import MainPageTopQuestions from '../HousDeckWebsiteComponents/MainPageTopQuestions';




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

      <CustomerRatingsMainPage />
      <MainPageTopQuestions />
      {/* <div style={{height:'10000px'}}></div> */}
      <HouseDeckServicesBottomList />
      {/* <div style={{height:'10000px'}}></div> */}

      {/* <PropertyBoxMainPageHouseDeckServicesGlobal /> */}
    </>
  )
}
