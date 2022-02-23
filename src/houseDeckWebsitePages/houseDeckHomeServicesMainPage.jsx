import React from 'react'
import Header from '../HousDeckWebsiteComponents/Header';
import { useMediaQuery } from '@mui/material';
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import XLCustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage';
// import PropertyBoxMainPageHouseDeckServicesGlobal from '../HousDeckWebsiteComponents/MainPageBottomComponents/PropertyBoxMainPageHouseDeckServicesGlobal';
import { XLMainPageTopQuestions, MDMainPageTopQuestions, SMMainPageTopQuestions } from '../HousDeckWebsiteComponents/MainPageTopQuestions';
import XLRecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices';





export default function HouseDeckHomeServicesMainPage() {

  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1160px)');
  const mdMax = useMediaQuery('(max-width:1160px)');
  const mdMin = useMediaQuery('(min-width:600px)');
  const sm = useMediaQuery('(max-width:600px)');

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
      <XLRecommendedServices />
      <XLCustomerRatingsMainPage />
      {xlMax && xlMin && (<XLMainPageTopQuestions />)}
      {mdMax && mdMin && (<MDMainPageTopQuestions />)}
      {sm && (<SMMainPageTopQuestions />)}
      {/* <div style={{height:'10000px'}}></div> */}
      <HouseDeckServicesBottomList />
      {/* <div style={{height:'10000px'}}></div> */}


      {/* <PropertyBoxMainPageHouseDeckServicesGlobal /> */}
    </>
  )
}
