
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import HouseDeckHomeServicesMainPage from './houseDeckWebsitePages/houseDeckHomeServicesMainPage'
import HouseDeckHomeServicesFAQpage from './houseDeckWebsitePages/houseDeckHomeServicesFAQpage';
import HouseDeckHomeServicesNotFound from './houseDeckWebsitePages/houseDeckHomeServicesNotFound';
import HouseDeckHomeServicesTC from './houseDeckWebsitePages/houseDeckHomeServicesTC';
import HouseDeckHomeServicesPrivacy from './houseDeckWebsitePages/houseDeckHomeServicesPrivacy';
import HouseDeckHomeServicesPainting from './houseDeckWebsitePages/houseDeckHomeServicesPainting';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/home-services' element={<HouseDeckHomeServicesMainPage />} />
      <Route exact path='/' element={<HouseDeckHomeServicesMainPage />} />
      <Route exact path='/home' element={<HouseDeckHomeServicesMainPage />} />
      <Route exact path='/home-services/terms-and-conditions' element={<HouseDeckHomeServicesTC/>} />
      <Route exact path='/home-services/privacy-policy' element={<HouseDeckHomeServicesPrivacy/>} />
      <Route exact path='/home-services/return-exchange-and-refund' element={<HouseDeckHomeServicesPrivacy/>} />
      <Route exact path='/home-services/faqs' element={<HouseDeckHomeServicesFAQpage />} />
      <Route exact path='/home-services/painting' element={<HouseDeckHomeServicesPainting />} />
      <Route exact path='*' element={<HouseDeckHomeServicesNotFound/>} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
