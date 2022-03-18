import React from 'react'
import Footer from '../HousDeckWebsiteComponents/Footer'
import Header from '../HousDeckWebsiteComponents/Header'
import HouseDeckServicesBottomList from '../HousDeckWebsiteComponents/MainPageBottomComponents/HouseDeckServicesBottomList'
import CustomerRatingsMainPage from '../HousDeckWebsiteComponents/MainPageMiddleComponents/CustomerRatingsMainPage'
import RecommendedServices from '../HousDeckWebsiteComponents/MainPageMiddleComponents/RecommendedServices'
import HouseDeckPromise from '../HousDeckWebsiteComponents/otherPageComponents/HouseDeckPromise'
import HowItWorks1 from '../HousDeckWebsiteComponents/otherPageComponents/HowItWorks1'
import {
  searchBarOptionsMumbai, searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad
} from '../constants/data'
import SimilarServicesForOtherPages from '../HousDeckWebsiteComponents/otherPageComponents/similarServicesForOtherPages'
import TopHead from '../HousDeckWebsiteComponents/otherPageComponents/TopHead'

const service = 'Home Cleaning'


export default function HouseDeckHomeServicesCleaning({city,setCity,handleData, loadCity}) {
  const currentCity = loadCity()



  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'How it works', url: '#how-it-works' },
    { name: 'HouseDeck Promise', url: '#houseDeck-promise' },
    { name: 'Customer Stories', url: '#customer-stories' },
    {name:'Similar Services',url:'#similar-services-for-other-pages'},
  ]
  return (
    <div>
      <Header commonProps={commonProps} />
      <TopHead service={service} handleData={handleData} currentCity={currentCity} setCity={setCity} />
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
