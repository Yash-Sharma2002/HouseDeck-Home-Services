
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import HouseDeckHomeServicesMainPage from './houseDeckWebsitePages/houseDeckHomeServicesMainPage'
import HouseDeckHomeServicesFAQpage from './houseDeckWebsitePages/houseDeckHomeServicesFAQpage';
import HouseDeckHomeServicesNotFound from './houseDeckWebsitePages/houseDeckHomeServicesNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/home-services' element={<HouseDeckHomeServicesMainPage />} />
      <Route exact path='/' element={<HouseDeckHomeServicesMainPage />} />
      <Route exact path='/home' element={<HouseDeckHomeServicesMainPage />} />
      <Route exact path='/home-services/faqs' element={<HouseDeckHomeServicesFAQpage />} />
      <Route exact path='*' element={<HouseDeckHomeServicesNotFound/>} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
