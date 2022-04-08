import React from 'react'
import { Box } from '@mui/material';
import {
  ServiceWithImageBangalore, ServiceWithImageChennai,
  ServiceWithImageDelhi, ServiceWithImageFaridabad,
  ServiceWithImageGhaziabad, ServiceWithImageGN,
  ServiceWithImageGurgaon, ServiceWithImageHyderabad,
  ServiceWithImageMumbai, ServiceWithImageNoida, searchBarOptionsMumbai,
  ServiceWithImagePune, searchBarOptionsBangalore, searchBarOptionsNoida, searchBarOptionsChennai,
  searchBarOptionsDelhi, searchBarOptionsGN, searchBarOptionsGurgaon, searchBarOptionsPune,
  searchBarOptionsFaridabad, searchBarOptionsGhaziabad, searchBarOptionsHyderabad
} from '../constants/data';
import Loader from '../components/overall/loader';
import { LoginContext } from '../context/Context'
import Header from '../components/head/Header';
import Footer from '../components/foot/Footer';
import Top from '../components/home/Top';
import Recommended from '../components/overall/Recommended';
import Faq from '../components/home/Faq';


const Services = React.lazy(() => import('../components/home/Services'))
const CarouselHome = React.lazy(() => import('../components/carousel/Carousel'))
const Review = React.lazy(() => import('../components/overall/Review'))
const BottomServices = React.lazy(() => import('../components/overall/Services'))
const Similar = React.lazy(() => import('../components/similar-services/Similar'))
const SubscribeCard = React.lazy(() => import('../components/overall/SubscribeCard'))

export default function Home() {
  const { city } = React.useContext(LoginContext)
  const commonProps = [
    { name: 'Home Services', url: '/home-services' },
    { name: 'Recommended Services', url: '#houseDeck-Recommended-Services' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'FAQs', url: '#faqs' },
    { name: 'HouseDeck Services', url: '#houseDeck-Services' },
  ]
  return (
    <>
      <Header commonProps={commonProps} />
      <Top />
      <React.Suspense fallback={<div><Loader /></div>}>
        <CarouselHome />
        {city === "Bangalore" && <Services ServiceWithImage={ServiceWithImageBangalore} />}
        {city === "Noida" && <Services ServiceWithImage={ServiceWithImageNoida} />}
        {city === "Chennai" && <Services ServiceWithImage={ServiceWithImageChennai} />}
        {city === "Delhi" && <Services ServiceWithImage={ServiceWithImageDelhi} />}
        {city === "Greater Noida" && <Services ServiceWithImage={ServiceWithImageGN} />}
        {city === "Gurgaon" && <Services ServiceWithImage={ServiceWithImageGurgaon} />}
        {city === "Pune" && <Services ServiceWithImage={ServiceWithImagePune} />}
        {city === "Faridabad" && <Services ServiceWithImage={ServiceWithImageFaridabad} />}
        {city === "Ghaziabad" && <Services ServiceWithImage={ServiceWithImageGhaziabad} />}
        {city === "Hyderabad" && <Services ServiceWithImage={ServiceWithImageHyderabad} />}
        {city === "Mumbai" && <Services ServiceWithImage={ServiceWithImageMumbai} />}
        {city === " " && <Services ServiceWithImage={ServiceWithImageBangalore} />}
      </React.Suspense>

      <Recommended />

      <Box sx={{
        textAlign: 'center',
        margin: '0px auto'
      }}>
        <img style={{
          width: '97%',
          height: 'unset',
        }} src={require('../assets/other/bannerOfMiddle.png')} alt="Banner" />
      </Box>

      <SubscribeCard displayForButton={'inline'} />
      <Review />
      <Faq />
      {city === "Bangalore" && <Similar options={searchBarOptionsBangalore} />}
      {city === "Noida" && <Similar options={searchBarOptionsNoida} />}
      {city === "Chennai" && <Similar options={searchBarOptionsChennai} />}
      {city === "Delhi" && <Similar options={searchBarOptionsDelhi} />}
      {city === "Greater Noida" && <Similar options={searchBarOptionsGN} />}
      {city === "Gurgaon" && <Similar options={searchBarOptionsGurgaon} />}
      {city === "Pune" && <Similar options={searchBarOptionsPune} />}
      {city === "Faridabad" && <Similar options={searchBarOptionsFaridabad} />}
      {city === "Ghaziabad" && <Similar options={searchBarOptionsGhaziabad} />}
      {city === "Hyderabad" && <Similar options={searchBarOptionsHyderabad} />}
      {city === "Mumbai" && <Similar options={searchBarOptionsMumbai} />}


      <BottomServices />

      <Footer />
    </>
  )
}
