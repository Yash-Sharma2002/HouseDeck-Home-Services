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
import { Box } from '@mui/system';
import { ServiceWithImageBangalore, ServiceWithImageChennai, ServiceWithImageDelhi, ServiceWithImageFaridabad, ServiceWithImageGhaziabad, ServiceWithImageGN, ServiceWithImageGurgaon, ServiceWithImageHyderabad, ServiceWithImageMumbai, ServiceWithImageNoida, ServiceWithImagePune } from '../constants/data';




export default function HouseDeckHomeServicesMainPage() {
  const commonProps = [

    { name: 'Home Services', url: '' },
    { name: 'Recommended Services', url: '#houseDeck-Recommended-Services' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'FAQs', url: '#faqs' },
    { name: 'HouseDeck Services', url: '#houseDeck-Services' },
  ]

  const searchBarOptionsBangalore = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
    { value: 'Electrician', label: 'Electrician' },
    { value: 'Carpentary', label: 'Carpentary' },
    { value: 'Plumbing', label: 'Plumbing' },
  ]


  const searchBarOptionsNoida = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
  ]

  const searchBarOptionsMumbai = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
    { value: 'Electrician', label: 'Electrician' },
    { value: 'Carpentary', label: 'Carpentary' },
    { value: 'Plumbing', label: 'Plumbing' },
  ]

  const searchBarOptionsChennai = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
    { value: 'Electrician', label: 'Electrician' },
    { value: 'Carpentary', label: 'Carpentary' },
    { value: 'Plumbing', label: 'Plumbing' },
  ]

  const searchBarOptionsPune = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
    { value: 'Electrician', label: 'Electrician' },
    { value: 'Carpentary', label: 'Carpentary' },
    { value: 'Plumbing', label: 'Plumbing' },
  ]

  const searchBarOptionsHyderabad = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
  ]

  const searchBarOptionsGurgaon = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
  ]
  const searchBarOptionsGhaziabad = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
    { value: 'Electrician', label: 'Electrician' },
    { value: 'Carpentary', label: 'Carpentary' },
    { value: 'Plumbing', label: 'Plumbing' },
  ]
  const searchBarOptionsDelhi = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
  ]

  const searchBarOptionsFaridabad = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
    { value: 'Electrician', label: 'Electrician' },
  ]
  const searchBarOptionsGN = [
    { value: 'Home Painting', label: 'Home Painting' },
    { value: 'Home Cleaning', label: 'Home Cleaning' },
    { value: 'Home Sanitization', label: 'Home Sanitization' },
    { value: 'Appliance Repair', label: 'Appliance Repair' },
    { value: 'AC Repair', label: 'AC Repair' },
  ]

  const [city, setCity] = React.useState("Select City")
  const handleData = (data) => {
    setCity(data)
  }
  return (
    <>
      <Header commonProps={commonProps} />



      <div style={{
        background: '#803c6d',
        width: '100%'
      }}>
        <Box sx={{
          padding: '6rem 100px 3rem 100px',
          display: 'flex', justifyContent: 'space-between'
        }}>
          {city === "Bangalore" && <SearchBar options={searchBarOptionsBangalore} />}
          {city === "Noida" && <SearchBar options={searchBarOptionsNoida} />}
          {city === "Chennai" && <SearchBar options={searchBarOptionsChennai} />}
          {city === "Delhi" && <SearchBar options={searchBarOptionsDelhi} />}
          {city === "Greater Noida" && <SearchBar options={searchBarOptionsGN} />}
          {city === "Gurgaon" && <SearchBar options={searchBarOptionsGurgaon} />}
          {city === "Pune" && <SearchBar options={searchBarOptionsPune} />}
          {city === "Faridabad" && <SearchBar options={searchBarOptionsFaridabad} />}
          {city === "Ghaziabad" && <SearchBar options={searchBarOptionsGhaziabad} />}
          {city === "Hyderabad" && <SearchBar options={searchBarOptionsHyderabad} />}
          {city === "Mumbai" && <SearchBar options={searchBarOptionsMumbai} />}
          {city === "Select City" && <SearchBar />}

          <SearchNSelect city={city} setCity={setCity} handleData={handleData} />
        </Box>
      </div>



      <TopSecondCarousel />
      {/* <Temp */}
      {/* <ServicesListed /> */}


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
          {/* {city === "Select City" && <ServicesListed />} */}








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
