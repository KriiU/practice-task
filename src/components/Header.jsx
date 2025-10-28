import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

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
            <Link 
              to="/"
              className={`btn ${isActive('/') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-house me-1"></i>
              Главная
            </Link>
            <Link 
              to="/catalog"
              className={`btn ${isActive('/catalog') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-grid me-1"></i>
              Каталог
            </Link>
            <Link 
              to="/about"
              className={`btn ${isActive('/about') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-info-circle me-1"></i>
              Описание
            </Link>
            <Link 
              to="/cart"
              className={`btn ${isActive('/cart') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-cart me-1"></i>
              Корзина
            </Link>
            <Link 
              to="/profile"
              className={`btn ${isActive('/profile') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-person me-1"></i>
              Профиль
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
