import React from 'react'
import { Box } from '@mui/material';
import Loader from '../components/overall/loader';
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
  const commonProps = [
    { name: 'Home Services', url: '/' },
    { name: 'Recommended Services', url: '#Vapormop-Recommended-Services' },
    { name: 'Customer Stories', url: '#customer-stories' },
    { name: 'FAQs', url: '#faqs' },
    { name: 'Vapormop Business', url: '#Vapormop-Services' },
  ]



  return (
    <>
      <Header commonProps={commonProps} />
      <Top />
      <React.Suspense fallback={<div><Loader /></div>}>
        <CarouselHome />
        <Services />
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
      <Similar />


      <BottomServices />

      <Footer />
    </>
  )
}