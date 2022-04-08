import React from 'react'
import { useParams } from 'react-router-dom'
import {
  searchBarOptionsMumbai, searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad
} from '../constants/data'
import Top from '../components/other/Top'
import { LoginContext } from '../context/Context'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import Recommended from '../components/overall/Recommended'
import Review from '../components/overall/Review'
import Working from '../components/other/Working'
import Working2 from '../components/other/Working2'
import Promise from '../components/other/Promise'
import BottomServices from '../components/overall/Services'

const Similar2 = React.lazy(() => import('../components/similar-services/Similar2'))

export default function Service() {
  const { service } = useParams()
  const { city } = React.useContext(LoginContext)
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

      <Top service={service} />

      <Working service={service} />

      <Promise />

      <Recommended />

      <Review />

      {city === "Bangalore" && <Similar2 cityServies={searchBarOptionsBangalore} service={service} />}
      {city === "Noida" && <Similar2 cityServies={searchBarOptionsNoida} service={service} />}
      {city === "Chennai" && <Similar2 cityServies={searchBarOptionsChennai} service={service} />}
      {city === "Delhi" && <Similar2 cityServies={searchBarOptionsDelhi} service={service} />}
      {city === "Greater Noida" && <Similar2 cityServies={searchBarOptionsGN} service={service} />}
      {city === "Gurgaon" && <Similar2 cityServies={searchBarOptionsGurgaon} service={service} />}
      {city === "Pune" && <Similar2 cityServies={searchBarOptionsPune} service={service} />}
      {city === "Faridabad" && <Similar2 cityServies={searchBarOptionsFaridabad} service={service} />}
      {city === "Ghaziabad" && <Similar2 cityServies={searchBarOptionsGhaziabad} service={service} />}
      {city === "Hyderabad" && <Similar2 cityServies={searchBarOptionsHyderabad} service={service} />}
      {city === "Mumbai" && <Similar2 cityServies={searchBarOptionsMumbai} service={service} />}

      <BottomServices />
      <Footer />
    </div>
  )
}
