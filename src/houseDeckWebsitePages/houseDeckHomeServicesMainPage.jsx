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
import TopSecondCarousel from '../HousDeckWebsiteComponents/mainPageTopComponents/TopSecondCarousel';
import Temp from '../temp';
import SearchBar from '../HousDeckWebsiteComponents/mainPageTopComponents/SearchBar';
import SearchNSelect from '../HousDeckWebsiteComponents/mainPageTopComponents/SearchNSelect';
// import { Box} from '@mui/material';;
import Button from '@mui/material/Button';
import { useMediaQuery, Box } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import {
  ServiceWithImageBangalore, ServiceWithImageChennai,
  ServiceWithImageDelhi, ServiceWithImageFaridabad,
  ServiceWithImageGhaziabad, ServiceWithImageGN,
  ServiceWithImageGurgaon, ServiceWithImageHyderabad,
  ServiceWithImageMumbai, ServiceWithImageNoida, searchBarOptionsMumbai,
  ServiceWithImagePune, searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad, IconHeaderImage
} from '../constants/data';


function TopFirstBar({ city, setCity, handleData }) {
  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:900px)');
  const mdMax = useMediaQuery('(max-width:900px)');
  const mdMin = useMediaQuery('(min-width:360px)');
  const sm = useMediaQuery('(max-width:360px)');

  const style1 = {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '0px 10px',
    alignItems: 'center',
    minWidth: 100,
    backgroundColor: 'white',
    height: '50px!important'
  }

  
  const style2 = {
    display: 'flex',
    justifyContent: 'space-between',
    border:'none',
    cursor: 'pointer',
    padding: '0px 10px',
    alignItems: 'center',
    minWidth: 100,
    height: '50px!important',
    color:"black"
  }
  return (


    <>
      {xlMax && xlMin && (
        <div style={{
          background: '#803c6d',
          width: '100%'
        }}>
          <Box sx={{
            padding: '7rem 100px 3rem 100px',
            display: 'flex', justifyContent: 'space-between'
          }}>
            {city === "Bangalore" && <SearchBar width={'500px'} options={searchBarOptionsBangalore} />}
            {city === "Noida" && <SearchBar width={'500px'} options={searchBarOptionsNoida} />}
            {city === "Chennai" && <SearchBar width={'500px'} options={searchBarOptionsChennai} />}
            {city === "Delhi" && <SearchBar width={'500px'} options={searchBarOptionsDelhi} />}
            {city === "Greater Noida" && <SearchBar width={'500px'} options={searchBarOptionsGN} />}
            {city === "Gurgaon" && <SearchBar width={'500px'} options={searchBarOptionsGurgaon} />}
            {city === "Pune" && <SearchBar width={'500px'} options={searchBarOptionsPune} />}
            {city === "Faridabad" && <SearchBar width={'500px'} options={searchBarOptionsFaridabad} />}
            {city === "Ghaziabad" && <SearchBar width={'500px'} options={searchBarOptionsGhaziabad} />}
            {city === "Hyderabad" && <SearchBar width={'500px'} options={searchBarOptionsHyderabad} />}
            {city === "Mumbai" && <SearchBar width={'500px'} options={searchBarOptionsMumbai} />}
            {city === " " && <SearchBar width={'500px'} options={searchBarOptionsBangalore} />}

            <SearchNSelect style={style1} city={city} setCity={setCity} handleData={handleData} />
          </Box>
        </div>
      )}
      {!(xlMax && xlMin) && mdMax && mdMin && (
        <div style={{
          background: '#803c6d',
          width: '100%'
        }}>
          <Box sx={{
            padding: '4rem 50px 3rem 50px',
            display: 'block',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 0px 1rem 0px', width: '100%',alignItems:'center' }}>
              <SearchNSelect style={style2} city={city} setCity={setCity} handleData={handleData} />
              <Box>

                <Button variant='outlined' sx={{
                  marginLeft: 1,
                  borderColor: 'black',
                  fontSize: '13px',
                  height: '30px',
                  userSelect: 'none',
                  borderRadius:'20px',
                  color:'black'
                }} disableRipple>
                  <AddIcCallIcon style={IconHeaderImage} />
                  18003096606
                </Button>
              </Box>
            </Box>


            {city === "Bangalore" && <SearchBar width={'100%'} options={searchBarOptionsBangalore} />}
            {city === "Noida" && <SearchBar width={'100%'} options={searchBarOptionsNoida} />}
            {city === "Chennai" && <SearchBar width={'100%'} options={searchBarOptionsChennai} />}
            {city === "Delhi" && <SearchBar width={'100%'} options={searchBarOptionsDelhi} />}
            {city === "Greater Noida" && <SearchBar width={'100%'} options={searchBarOptionsGN} />}
            {city === "Gurgaon" && <SearchBar width={'100%'} options={searchBarOptionsGurgaon} />}
            {city === "Pune" && <SearchBar width={'100%'} options={searchBarOptionsPune} />}
            {city === "Faridabad" && <SearchBar width={'100%'} options={searchBarOptionsFaridabad} />}
            {city === "Ghaziabad" && <SearchBar width={'100%'} options={searchBarOptionsGhaziabad} />}
            {city === "Hyderabad" && <SearchBar width={'100%'} options={searchBarOptionsHyderabad} />}
            {city === "Mumbai" && <SearchBar width={'100%'} options={searchBarOptionsMumbai} />}
            {city === " " && <SearchBar width={'100%'} options={searchBarOptionsBangalore} />}

          </Box>
        </div>
      )}
      {sm && (
        <div style={{
          background: '#803c6d',
          width: '100%'
        }}>
          <Box sx={{
            padding: '3rem 10px 3rem 10px',
            display: 'block',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0rem 155px 1rem 0px', width: '100%',alignItems:'center' }}>
              <SearchNSelect style={style2} city={city} setCity={setCity} handleData={handleData} />
              <Box>

                <Button variant='outlined' sx={{
                  marginLeft: 1,
                  borderColor: 'black',
                  fontSize: '13px',
                  height: '30px',
                  userSelect: 'none',
                  borderRadius:'20px',
                  color:'black'
                }} disableRipple>
                  <AddIcCallIcon style={IconHeaderImage} />
                  18003096606
                </Button>
              </Box>
            </Box>


            {city === "Bangalore" && <SearchBar width={'100%'} options={searchBarOptionsBangalore} />}
            {city === "Noida" && <SearchBar width={'100%'} options={searchBarOptionsNoida} />}
            {city === "Chennai" && <SearchBar width={'100%'} options={searchBarOptionsChennai} />}
            {city === "Delhi" && <SearchBar width={'100%'} options={searchBarOptionsDelhi} />}
            {city === "Greater Noida" && <SearchBar width={'100%'} options={searchBarOptionsGN} />}
            {city === "Gurgaon" && <SearchBar width={'100%'} options={searchBarOptionsGurgaon} />}
            {city === "Pune" && <SearchBar width={'100%'} options={searchBarOptionsPune} />}
            {city === "Faridabad" && <SearchBar width={'100%'} options={searchBarOptionsFaridabad} />}
            {city === "Ghaziabad" && <SearchBar width={'100%'} options={searchBarOptionsGhaziabad} />}
            {city === "Hyderabad" && <SearchBar width={'100%'} options={searchBarOptionsHyderabad} />}
            {city === "Mumbai" && <SearchBar width={'100%'} options={searchBarOptionsMumbai} />}
            {city === " " && <SearchBar width={'100%'} options={searchBarOptionsBangalore} />}

          </Box>
        </div>)}
    </>



  )

}

export default function HouseDeckHomeServicesMainPage() {
  const commonProps = [

    { name: 'Home Services', url: '' },
    { name: 'Recommended Services', url: '#houseDeck-Recommended-Services' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'FAQs', url: '#faqs' },
    { name: 'HouseDeck Services', url: '#houseDeck-Services' },
  ]

  const [city, setCity] = React.useState(" ")
  const handleData = (data) => {
    setCity(data)
  }
  return (
    <>
      <Header commonProps={commonProps} />

      <TopFirstBar city={city} setCity={setCity} handleData={handleData} />


      <TopSecondCarousel />
      {/* <Temp */}


      {city === "Bangalore" && <ServicesListed ServiceWithImage={ServiceWithImageBangalore} />}
      {city === "Noida" && <ServicesListed ServiceWithImage={ServiceWithImageNoida} />}
      {city === "Chennai" && <ServicesListed ServiceWithImage={ServiceWithImageChennai} />}
      {city === "Delhi" && <ServicesListed ServiceWithImage={ServiceWithImageDelhi} />}
      {city === "Greater Noida" && <ServicesListed ServiceWithImage={ServiceWithImageGN} />}
      {city === "Gurgaon" && <ServicesListed ServiceWithImage={ServiceWithImageGurgaon} />}
      {city === "Pune" && <ServicesListed ServiceWithImage={ServiceWithImagePune} />}
      {city === "Faridabad" && <ServicesListed ServiceWithImage={ServiceWithImageFaridabad} />}
      {city === "Ghaziabad" && <ServicesListed ServiceWithImage={ServiceWithImageGhaziabad} />}
      {city === "Hyderabad" && <ServicesListed ServiceWithImage={ServiceWithImageHyderabad} />}
      {city === "Mumbai" && <ServicesListed ServiceWithImage={ServiceWithImageMumbai} />}
      {city === " " && <ServicesListed ServiceWithImage={ServiceWithImageBangalore} />}









      <RecommendedServices />
      <CustomerRatingsMainPage />
      <MainPageTopQuestions />


      {city === "Bangalore" && <SimilarServices city={city} options={searchBarOptionsBangalore} />}
      {city === "Noida" && <SimilarServices city={city} options={searchBarOptionsNoida} />}
      {city === "Chennai" && <SimilarServices city={city} options={searchBarOptionsChennai} />}
      {city === "Delhi" && <SimilarServices city={city} options={searchBarOptionsDelhi} />}
      {city === "Greater Noida" && <SimilarServices city={city} options={searchBarOptionsGN} />}
      {city === "Gurgaon" && <SimilarServices city={city} options={searchBarOptionsGurgaon} />}
      {city === "Pune" && <SimilarServices city={city} options={searchBarOptionsPune} />}
      {city === "Faridabad" && <SimilarServices city={city} options={searchBarOptionsFaridabad} />}
      {city === "Ghaziabad" && <SimilarServices city={city} options={searchBarOptionsGhaziabad} />}
      {city === "Hyderabad" && <SimilarServices city={city} options={searchBarOptionsHyderabad} />}
      {city === "Mumbai" && <SimilarServices city={city} options={searchBarOptionsMumbai} />}





      {/* <SimilarServices /> */}
      <HouseDeckServicesBottomList />


      {/* <PropertyBoxMainPageHouseDeckServicesGlobal /> */}

      <Footer />
    </>
  )
}
