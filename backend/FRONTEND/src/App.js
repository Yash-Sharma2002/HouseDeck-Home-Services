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

              {/* footer pages  */}
              <Route exact path='/about-us' element={<About />} />
              <Route exact path='/privacy-policy' element={<Privacy />} />
              <Route exact path='/return-exchange-and-refund' element={<Refund />} />
              <Route exact path='/faqs' element={<Faq />} />
              <Route exact path='/terms-and-conditions' element={<Partner />} />

              {/* services pages  */}
              <Route exact path='/:service' element={<Service />} />

              {/* 404 page  */}
              <Route exact path='*' element={<Unknown />} />
              <Route exact path='/404-Not-Found' element={<Unknown />} />

              {/* Other Pages  */}
              <Route exact path='/subcription' element={<Subscriptions />} />
              <Route exact path='/my-bookings' element={<Bookings />} />
              <Route exact path='/profile' element={<Profile />} />

            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}


