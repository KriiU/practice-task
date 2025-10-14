import React from 'react';

const Header = ({ currentPage, onPageChange }) => {
  return (
    <header className="bg-dark text-white py-3 shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Логотип */}
          <div className="d-flex align-items-center">
            <i className="bi bi-heart-fill text-danger fs-3 me-2"></i>
            <h4 className="mb-0 fw-bold">МурЛэнд Спа</h4>
          </div>
          
          {/* Навигация */}
          <nav className="d-flex gap-3">
            <button 
              className={`btn ${currentPage === 'home' ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
              onClick={() => onPageChange('home')}
            >
              <i className="bi bi-house me-1"></i>
              Главная
            </button>
            <button 
              className={`btn ${currentPage === 'catalog' ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
              onClick={() => onPageChange('catalog')}
            >
              <i className="bi bi-grid me-1"></i>
              Каталог
            </button>
            <button 
              className={`btn ${currentPage === 'profile' ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
              onClick={() => onPageChange('profile')}
            >
              <i className="bi bi-person me-1"></i>
              Профиль
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
