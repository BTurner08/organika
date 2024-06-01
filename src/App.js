import './App.css';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import QuantityPicker from "./components/quantitypicker";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import Catalog from './pages/catalog';
import Proudct from './components/product';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
