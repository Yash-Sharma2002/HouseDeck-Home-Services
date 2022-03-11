import React from 'react'
import Footer from '../HousDeckWebsiteComponents/Footer'
import SearchNSelectForOtherPages from '../HousDeckWebsiteComponents/otherPageComponents/SearchNSelectForOtherPages'
import Header from '../HousDeckWebsiteComponents/Header'
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage'
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices'
import HouseDeckPromise from '../HousDeckWebsiteComponents/otherPageComponents/HouseDeckPromise'
import { Box,Typography } from '@mui/material'
import HowItWorks1 from '../HousDeckWebsiteComponents/otherPageComponents/HowItWorks1'
import {
  searchBarOptionsMumbai, searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad
} from '../constants/data'
import SimilarServicesForOtherPages from '../HousDeckWebsiteComponents/otherPageComponents/similarServicesForOtherPages'

export default function HouseDeckHomeServicesElectrician({city,setCity,handleData, loadCity}) {
  const currentCity = loadCity()
  const service = 'Electrician'

  const style1 = {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '0px 10px',
    alignItems: 'center',
    minWidth: 100,
    height: '50px!important',
    color:'black'
  }
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
      <div style={{padding:'100px',paddingTop:'100px',background: '#e5f6f5'}}>
      <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
      <Box sx={{ml:2}}>
        <Typography sx={{fontSize:'30px',fontWeight:'900',color:'#1b685f'}}>Best {service} Services in {currentCity}</Typography>
        <Typography sx={{fontSize:'16px',color:'#1b685f'}}>Get lowest prices for {service.toLowerCase()} services in Bangalore {currentCity}</Typography>
      </Box>
        </div>
      <HowItWorks1 service={service} city={currentCity} />
      <HouseDeckPromise service={service} city={currentCity} />
      <RecommendedServices />
      <CustomerRatingsMainPage />
      
      {currentCity === "Bangalore" && <SimilarServicesForOtherPages cityServies={searchBarOptionsBangalore} currentCity={currentCity} service={service} />}
      {currentCity === "Noida" && <SimilarServicesForOtherPages cityServies={searchBarOptionsNoida} currentCity={currentCity} service={service} />}
      {currentCity === "Chennai" && <SimilarServicesForOtherPages cityServies={searchBarOptionsChennai} currentCity={currentCity} service={service} />}
      {currentCity === "Delhi" && <SimilarServicesForOtherPages cityServies={searchBarOptionsDelhi} currentCity={currentCity} service={service} />}
      {currentCity === "Greater Noida" && <SimilarServicesForOtherPages cityServies={searchBarOptionsGN} currentCity={currentCity} service={service} />}
      {currentCity === "Gurgaon" && <SimilarServicesForOtherPages cityServies={searchBarOptionsGurgaon} currentCity={currentCity} service={service} />}
      {currentCity === "Pune" && <SimilarServicesForOtherPages cityServies={searchBarOptionsPune} currentCity={currentCity} service={service} />}
      {currentCity === "Faridabad" && <SimilarServicesForOtherPages cityServies={searchBarOptionsFaridabad} currentCity={currentCity} service={service} />}
      {currentCity === "Ghaziabad" && <SimilarServicesForOtherPages cityServies={searchBarOptionsGhaziabad} currentCity={currentCity} service={service} />}
      {currentCity === "Hyderabad" && <SimilarServicesForOtherPages cityServies={searchBarOptionsHyderabad} currentCity={currentCity} service={service} />}
      {currentCity === "Mumbai" && <SimilarServicesForOtherPages cityServies={searchBarOptionsMumbai} currentCity={currentCity} service={service} />}

      <HouseDeckServicesBottomList />
      {/* <SimilarServices /> */}
      <Footer />
    </div>
  )
}
