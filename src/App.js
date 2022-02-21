
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import HouseDeckHomeServicesMainPage from './houseDeckWebsitePages/houseDeckHomeServicesMainPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HouseDeckHomeServicesMainPage />} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
