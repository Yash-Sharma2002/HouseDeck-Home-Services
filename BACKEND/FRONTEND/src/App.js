import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/Context'
import Loader from './components/overall/loader'



const Home = React.lazy(() => import('./webpages/Home'))
const Faq = React.lazy(() => import('./webpages/Faq'))
const Unknown = React.lazy(() => import('./webpages/404'))
const Partner = React.lazy(() => import('./webpages/Partner'))
const Privacy = React.lazy(() => import('./webpages/Privacy'))
const Subscriptions = React.lazy(() => import('./webpages/Subscriptions'))
const About = React.lazy(() => import('./webpages/About'))
const Refund = React.lazy(() => import('./webpages/Refund'))
const Bookings = React.lazy(() => import('./webpages/Bookings'))
const Profile = React.lazy(() => import('./webpages/Profile'))
const Service = React.lazy(() => import('./webpages/Service'))


export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter >
          <Suspense fallback={<div><Loader /></div>}>
            <Routes>

              {/* home page  */}
              <Route exact path='/' element={<Home />} />
              <Route exact path='/home-services' element={<Home />} />

              {/* footer pages  */}
              <Route exact path='/home-services/about-us' element={<About />} />
              <Route exact path='/home-services/privacy-policy' element={<Privacy />} />
              <Route exact path='/home-services/return-exchange-and-refund' element={<Refund />} />
              <Route exact path='/home-services/faqs' element={<Faq />} />
              <Route exact path='/home-services/housedeck-partner-(Terms-of-Use)' element={<Partner />} />

              {/* services pages  */}
              <Route exact path='/home-services/:service' element={<Service />} />

              {/* 404 page  */}
              <Route exact path='*' element={<Unknown />} />
              <Route exact path='/home-services/404-Not-Found' element={<Unknown />} />

              {/* Other Pages  */}
              <Route exact path='/home-services/subcription' element={<Subscriptions />} />
              <Route exact path='/home-services/my-bookings' element={<Bookings />} />
              <Route exact path='/home-services/profile' element={<Profile />} />

            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}


