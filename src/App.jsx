import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Catalog from './components/Catalog';
import About from './components/About';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App d-flex flex-column min-vh-100'>
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
