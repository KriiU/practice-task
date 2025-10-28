import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Main from './components/Main';
import Catalog from './components/Catalog';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import Profile from './components/Profile';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className='App d-flex flex-column min-vh-100'>
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;