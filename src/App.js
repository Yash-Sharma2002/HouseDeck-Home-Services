import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HouseDeckHomeServicesMainPage from './houseDeckWebsitePages/houseDeckHomeServicesMainPage'
import HouseDeckHomeServicesFAQpage from './houseDeckWebsitePages/houseDeckHomeServicesFAQpage';
import HouseDeckHomeServicesNotFound from './houseDeckWebsitePages/houseDeckHomeServicesNotFound';
import HouseDeckHomeServicesPartner from './houseDeckWebsitePages/houseDeckHomeServicesPartner';
import HouseDeckHomeServicesPrivacy from './houseDeckWebsitePages/houseDeckHomeServicesPrivacy';
import HouseDeckHomeServicesPainting from './houseDeckWebsitePages/houseDeckHomeServicesPainting';
import HouseDeckHomeServicesCleaning from './houseDeckWebsitePages/houseDeckHomeServicesCleaning';
import HouseDeckHomeServicesSanitization from './houseDeckWebsitePages/houseDeckHomeServicesSanitization';
import HouseDeckHomeServicesACRepair from './houseDeckWebsitePages/houseDeckHomeServicesAC_Repair';
import HouseDeckHomeServicesElectrician from './houseDeckWebsitePages/houseDeckHomeServicesElectrician';
import HouseDeckHomeServicesCarpentary from './houseDeckWebsitePages/houseDeckHomeServicesCarpentary';
import HouseDeckHomeServicesPlumbing from './houseDeckWebsitePages/houseDeckHomeServicesPlumbing';
import HouseDeckHomeServicesSubscriptionPage from './houseDeckWebsitePages/houseDeckHomeServicesSubscriptionPage';
import HouseDeckHomeServicesAboutUs from './houseDeckWebsitePages/houseDeckHomeServicesAboutUs';
import HouseDeckHomeServicesExchangeRefund from './houseDeckWebsitePages/houseDeckHomeServicesExchangeRefund';
import HouseDeckHomeServicesMyBookings from './houseDeckWebsitePages/houseDeckHomeServicesMyBookings';

function App() {

  var [city, setCity] = useState("Select City")

  const handleData = (data) => {
    setCity(data)
    localStorage.setItem('city', JSON.stringify(data))
      .then(() => console.log('saved city successfully'))
      .catch(err => console.error('something went wrong', err));
  }
  function loadCity() {
    try {
      const serializedState = localStorage.getItem('city');
      if(serializedState === null){
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (err) {
      return undefined;
  }
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* home page  */}
        <Route exact path='/home-services' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />
        <Route exact path='/' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />
        <Route exact path='/home' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />

        {/* footer pages  */}
        <Route exact path='/home-services/about-us' element={<HouseDeckHomeServicesAboutUs />} />
        <Route exact path='/home-services/privacy-policy' element={<HouseDeckHomeServicesPrivacy />} />
        <Route exact path='/home-services/return-exchange-and-refund' element={<HouseDeckHomeServicesExchangeRefund />} />
        <Route exact path='/home-services/faqs' element={<HouseDeckHomeServicesFAQpage />} />
        <Route exact path='/home-services/housedeck-partner-(Terms-of-Use)' element={<HouseDeckHomeServicesPartner />} />

        {/* services pages  */}
        <Route exact path='/home-services/painting' element={<HouseDeckHomeServicesPainting   city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />
        <Route exact path='/home-services/cleaning' element={<HouseDeckHomeServicesCleaning  city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />
        <Route exact path='/home-services/home-sanitization' element={<HouseDeckHomeServicesSanitization  city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />
        <Route exact path='/home-services/ac-repair' element={<HouseDeckHomeServicesACRepair  city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />
        <Route exact path='/home-services/electrician' element={<HouseDeckHomeServicesElectrician  city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />
        <Route exact path='/home-services/carpentary' element={<HouseDeckHomeServicesCarpentary  city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />
        <Route exact path='/home-services/plumbing' element={<HouseDeckHomeServicesPlumbing  city={city} setCity={setCity} handleData={handleData} loadCity={loadCity}  />} />

        {/* 404 page  */}
        <Route exact path='*' element={<HouseDeckHomeServicesNotFound />} />

        {/* Other Pages  */}
        <Route exact path='/home-services/subcription' element={<HouseDeckHomeServicesSubscriptionPage />} />
        <Route exact path='/home-services/my-bookings' element={<HouseDeckHomeServicesMyBookings />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
