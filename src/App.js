import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Crops from './Pages/Crops';
import MarketPlace from './Pages/MarketPlace';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import News from './Pages/CropSoil';
import Policy from './Pages/Weather';
import PolicyDetails from './Pages/WeatherCard/WeatherForecast ';
import CropDetails from './Pages/CropDetails/CropDetails';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Soil from './Pages/Soil';
import Weather from './Pages/Weather';
import CropSoil from './Pages/CropSoil';

function App() {

  // props for home component, loggedIn is a boolean
  const props = {
    loggedIn: true
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<HomePage {...props} />} />

          <Route path='/crops' element={<Crops {...props} />} />
          <Route path='/crops/:cropId' element={<CropDetails {...props} />} />

          {/* News */}
          <Route path='/crop-soil' element={<CropSoil />} />

          <Route path='/weather' element={<Weather />} />
          <Route path='policyDetails/:policyId' element={<PolicyDetails />} />

          {/* marketplace */}
          <Route path='/soil' element={<Soil {...props} />} />
          <Route path='/product/:productId' element={<ProductDetails {...props} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
