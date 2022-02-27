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
import Temp from '../temp';
import SearchBar from '../HousDeckWebsiteComponents/mainPageTopComponents/SearchBar';
import SearchNSelect from '../HousDeckWebsiteComponents/mainPageTopComponents/SearchNSelect';
import { Box } from '@mui/system';




export default function HouseDeckHomeServicesMainPage() {
  const commonProps = [

    { name: 'Home Services', url: '' },
    { name: 'Recommended Services', url: '#houseDeck-Recommended-Services' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'FAQs', url: '#faqs' },
    { name: 'HouseDeck Services', url: '#houseDeck-Services' },
  ]

  const [city, setCity] = React.useState("Select City")
  const handleData = (data) => {
    setCity(data)
  }
  return (
    <>
      <Header commonProps={commonProps} />
      {/* <TopFirsrtBar /> */}



      <div style={{
        background: '#803c6d',
        width: '100%'
      }}>
        <Box sx={{
          padding: '6rem 100px 3rem 100px',
          display: 'flex', justifyContent: 'space-between'
        }}>

          <SearchBar />
          <SearchNSelect city={city} setCity={setCity} handleData={handleData} />
        </Box>
      </div>



      <TopSecondCarousel />
      {/* <Temp */}
      <div>{city}</div>
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
