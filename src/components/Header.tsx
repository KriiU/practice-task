import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <header className="bg-dark text-white py-3 shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Логотип */}
          <Link 
            to="/" 
            className="d-flex align-items-center text-decoration-none text-white"
            style={{ transition: 'opacity 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            <i className="bi bi-heart-fill text-danger fs-3 me-2"></i>
            <h4 className="mb-0 fw-bold">МурЛэнд Спа</h4>
          </Link>
          
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
              className={`btn ${isActive('/cart') ? 'btn-warning' : 'btn-outline-light'} btn-sm position-relative`}
            >
              <i className="bi bi-cart me-1"></i>
              Корзина
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link 
              to="/contact"
              className={`btn ${isActive('/contact') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-envelope me-1"></i>
              Контакты
            </Link>
            <Link 
              to="/calculator"
              className={`btn ${isActive('/calculator') ? 'btn-warning' : 'btn-outline-light'} btn-sm`}
            >
              <i className="bi bi-calculator me-1"></i>
              Калькулятор
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
