import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav1 from './components/Nav1';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav1 />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;