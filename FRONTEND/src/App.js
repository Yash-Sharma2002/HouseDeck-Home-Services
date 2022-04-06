import React, { useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/ContextProvider'
import Loader from './constants/loader';


const HouseDeckHomeServicesMainPage = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesMainPage'))
const HouseDeckHomeServicesFAQpage = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesFAQpage'))
const HouseDeckHomeServicesNotFound = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesNotFound'))
const HouseDeckHomeServicesPartner = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesPartner'))
const HouseDeckHomeServicesPrivacy = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesPrivacy'))
const HouseDeckHomeServicesPainting = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesPainting'))
const HouseDeckHomeServicesCleaning = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesCleaning'))
const HouseDeckHomeServicesSanitization = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesSanitization'))
const HouseDeckHomeServicesACRepair = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesAC_Repair'))
const HouseDeckHomeServicesElectrician = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesElectrician'))
const HouseDeckHomeServicesCarpentary = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesCarpentary'))
const HouseDeckHomeServicesSubscriptionPage = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesSubscriptionPage'))
const HouseDeckHomeServicesAboutUs = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesAboutUs'))
const HouseDeckHomeServicesExchangeRefund = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesExchangeRefund'))
const HouseDeckHomeServicesMyBookings = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesMyBookings'))
const HouseDeckHomeServicesProfilePage = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesProfilePage'))
const HouseDeckHomeServicesPlumbing = React.lazy(() => import('./houseDeckWebsitePages/houseDeckHomeServicesPlumbing'))
function App() {

  const [city, setCity] = useState("Select City")

  const handleData = (data) => {
    setCity(data)
    try {
      localStorage.setItem('city', JSON.stringify(data));
    } catch (err) {
      return '';
    }
  }


  function loadCity() {
    try {
      const serializedState = localStorage.getItem('city');
      if (serializedState === null) {
        return '';
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return '';
    }
  }
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Suspense fallback={<div><Loader /></div>}>
            <Routes>

              {/* home page  */}
              <Route exact path='/' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />
              <Route exact path='/home-services' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />
              <Route exact path='/home' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />

              {/* footer pages  */}
              <Route exact path='/home-services/about-us' element={<HouseDeckHomeServicesAboutUs />} />
              <Route exact path='/home-services/privacy-policy' element={<HouseDeckHomeServicesPrivacy />} />
              <Route exact path='/home-services/return-exchange-and-refund' element={<HouseDeckHomeServicesExchangeRefund />} />
              <Route exact path='/home-services/faqs' element={<HouseDeckHomeServicesFAQpage />} />
              <Route exact path='/home-services/housedeck-partner-(Terms-of-Use)' element={<HouseDeckHomeServicesPartner />} />

              {/* services pages  */}
              <Route exact path='/home-services/painting' element={<HouseDeckHomeServicesPainting city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />
              <Route exact path='/home-services/cleaning' element={<HouseDeckHomeServicesCleaning city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />
              <Route exact path='/home-services/home-sanitization' element={<HouseDeckHomeServicesSanitization city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />
              <Route exact path='/home-services/ac-repair' element={<HouseDeckHomeServicesACRepair city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />
              <Route exact path='/home-services/electrician' element={<HouseDeckHomeServicesElectrician city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />
              <Route exact path='/home-services/carpentary' element={<HouseDeckHomeServicesCarpentary city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />
              <Route exact path='/home-services/plumbing' element={<HouseDeckHomeServicesPlumbing city={city} setCity={setCity} handleData={handleData} loadCity={loadCity} />} />

              {/* 404 page  */}
              <Route exact path='*' element={<HouseDeckHomeServicesNotFound />} />

              {/* Other Pages  */}
              <Route exact path='/home-services/subcription' element={<HouseDeckHomeServicesSubscriptionPage />} />
              <Route exact path='/home-services/my-bookings' element={<HouseDeckHomeServicesMyBookings />} />
              <Route exact path='/home-services/profile' element={<HouseDeckHomeServicesProfilePage />} />

            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
