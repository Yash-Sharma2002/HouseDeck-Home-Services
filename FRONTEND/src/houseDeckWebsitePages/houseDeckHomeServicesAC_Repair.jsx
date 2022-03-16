import React from 'react'
import SearchNSelectForOtherPages from '../HousDeckWebsiteComponents/otherPageComponents/SearchNSelectForOtherPages'
import Footer from '../HousDeckWebsiteComponents/Footer'
import Header from '../HousDeckWebsiteComponents/Header'
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage'
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices'
import HouseDeckPromise from '../HousDeckWebsiteComponents/otherPageComponents/HouseDeckPromise'
import { Box, Typography, useMediaQuery } from '@mui/material'
import HowItWorks1 from '../HousDeckWebsiteComponents/otherPageComponents/HowItWorks1'
import {
  searchBarOptionsMumbai, searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad
} from '../constants/data'
import SimilarServicesForOtherPages from '../HousDeckWebsiteComponents/otherPageComponents/similarServicesForOtherPages'
import ServiceSelector from '../HousDeckWebsiteComponents/otherPageComponents/serviceSelector'
import OtherPagesTopCarousel from '../HousDeckWebsiteComponents/otherPageComponents/OtherPagesTopCarousel'

const service = 'AC Repair'

const style1 = {
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  padding: '0px 10px',
  alignItems: 'center',
  minWidth: 100,
  height: '50px!important',
  color: 'black'
}

const TopHead = ({ handleData, currentCity, setCity }) => {
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1200px)');
  const mdMax = useMediaQuery('(max-width:1200px)');
  const mdMin = useMediaQuery('(min-width:800px)');
  const sm = useMediaQuery('(max-width:800px)');
  return (
    <>
      {xlMax && xlMin && (
        <div style={{ padding: '100px', background: '#e5f6f5' }}>
          <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '900', color: '#1b685f' }}>Best {service} Services in {currentCity}</Typography>
            <Typography sx={{ fontSize: '16px', color: '#1b685f' }}>Get lowest prices for {service.toLowerCase()} services in {currentCity}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ServiceSelector width={'480px'} />
            <div style={{ width: '45%' }}>
              <OtherPagesTopCarousel />
            </div>
          </Box>

        </div>
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <div style={{ padding: '50px 30px', background: '#e5f6f5' }}>
          <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '900', color: '#1b685f' }}>Best {service} Services in {currentCity}</Typography>
            <Typography sx={{ fontSize: '16px', color: '#1b685f' }}>Get lowest prices for {service.toLowerCase()} services in {currentCity}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ServiceSelector width={'110%'} />
            <div style={{ width: '45%' }}>
              <OtherPagesTopCarousel />
            </div>
          </Box>
        </div>
      )}
      {!(mdMax && mdMin) && sm && (
        <div style={{ padding: '20px 10px', background: '#e5f6f5' }}>
          <SearchNSelectForOtherPages style={style1} city={currentCity} setCity={setCity} handleData={handleData} />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '900', color: '#1b685f' }}>Best {service} Services in {currentCity}</Typography>
            <Typography sx={{ fontSize: '16px', color: '#1b685f' }}>Get lowest prices for {service.toLowerCase()} services in {currentCity}</Typography>
          </Box>
          <Box sx={{ display: 'block' }}>
            <ServiceSelector width={'unset'} />
            <div style={{padding:'20px'}}>
              <OtherPagesTopCarousel />
            </div>
          </Box>
        </div>
      )}
    </>

  )

}

export default function HouseDeckHomeServicesACRepair({ city, setCity, handleData, loadCity }) {


  const currentCity = loadCity()


  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'How it works', url: '#how-it-works' },
    { name: 'HouseDeck Promise', url: '#houseDeck-promise' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'Similar Services', url: '#similar-services-for-other-pages' },
  ]
  return (
    <div>
      <Header commonProps={commonProps} />

      <TopHead handleData={handleData} currentCity={currentCity} setCity={setCity} />

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
      <Footer />
    </div>
  )
}
