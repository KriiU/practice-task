import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Catalog from './components/Catalog';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Main />;
      case 'catalog':
        return <Catalog />;
      case 'profile':
        return <Profile />;
      default:
        return <Main />;
    }
  };

  return (
    <div className='App'>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;