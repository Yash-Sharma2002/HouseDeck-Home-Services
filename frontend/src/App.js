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
              <Route path='/' element={<Home />} />

              {/* footer pages  */}
              <Route path='/about-us' element={<About />} />
              <Route path='/privacy-policy' element={<Privacy />} />
              <Route path='/return-exchange-and-refund' element={<Refund />} />
              <Route path='/faqs' element={<Faq />} />
              <Route path='/terms-and-conditions' element={<Partner />} />

              {/* services pages  */}
              <Route path='/:service' element={<Service />} />

              {/* 404 page  */}
              <Route path='*' element={<Unknown />} />
              <Route path='/404-Not-Found' element={<Unknown />} />

              {/* Other Pages  */}
              <Route path='/subcription' element={<Subscriptions />} />
              <Route path='/my-bookings' element={<Bookings />} />
              <Route path='/profile' element={<Profile />} />

            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}


