import React,{useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import HouseDeckHomeServicesMainPage from './houseDeckWebsitePages/houseDeckHomeServicesMainPage'
import HouseDeckHomeServicesFAQpage from './houseDeckWebsitePages/houseDeckHomeServicesFAQpage';
import HouseDeckHomeServicesNotFound from './houseDeckWebsitePages/houseDeckHomeServicesNotFound';
import HouseDeckHomeServicesTC from './houseDeckWebsitePages/houseDeckHomeServicesTC';
import HouseDeckHomeServicesPrivacy from './houseDeckWebsitePages/houseDeckHomeServicesPrivacy';
import HouseDeckHomeServicesPainting from './houseDeckWebsitePages/houseDeckHomeServicesPainting';
import HouseDeckHomeServicesCleaning from './houseDeckWebsitePages/houseDeckHomeServicesCleaning';
import HouseDeckHomeServicesSanitization from './houseDeckWebsitePages/houseDeckHomeServicesSanitization';
import HouseDeckHomeServicesACRepair from './houseDeckWebsitePages/houseDeckHomeServicesAC_Repair';
import HouseDeckHomeServicesElectrician from './houseDeckWebsitePages/houseDeckHomeServicesElectrician';
import HouseDeckHomeServicesCarpentary from './houseDeckWebsitePages/houseDeckHomeServicesCarpentary';
import HouseDeckHomeServicesPlumbing from './houseDeckWebsitePages/houseDeckHomeServicesPlumbing';

function App() {
  
  const [city, setCity] =useState("Select City")
  
  const handleData = (data) => {
    setCity(data)
  }
  console.log(city);

  return (
    <BrowserRouter>
    <Routes>

      {/* home page  */}
      <Route exact path='/home-services' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home' element={<HouseDeckHomeServicesMainPage city={city} setCity={setCity} handleData={handleData} />} />

      {/* footer pages  */}
      <Route exact path='/home-services/terms-and-conditions' element={<HouseDeckHomeServicesTC/>} />
      <Route exact path='/home-services/privacy-policy' element={<HouseDeckHomeServicesPrivacy/>} />
      <Route exact path='/home-services/return-exchange-and-refund' element={<HouseDeckHomeServicesPrivacy/>} />
      <Route exact path='/home-services/faqs' element={<HouseDeckHomeServicesFAQpage />} />

      {/* services pages  */}
      <Route exact path='/home-services/painting' element={<HouseDeckHomeServicesPainting city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home-services/cleaning' element={<HouseDeckHomeServicesCleaning city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home-services/home-sanitization' element={<HouseDeckHomeServicesSanitization city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home-services/ac-repair' element={<HouseDeckHomeServicesACRepair city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home-services/electrician' element={<HouseDeckHomeServicesElectrician city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home-services/carpentary' element={<HouseDeckHomeServicesCarpentary city={city} setCity={setCity} handleData={handleData} />} />
      <Route exact path='/home-services/plumbing' element={<HouseDeckHomeServicesPlumbing city={city} setCity={setCity} handleData={handleData} />} />

      {/* 404 page  */}
      <Route exact path='*' element={<HouseDeckHomeServicesNotFound city={city} />} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
