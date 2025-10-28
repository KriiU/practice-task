import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Котичий Массаж",
      price: 3500,
      duration: "60 мин",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quantity: 1,
      date: "2024-01-15",
      time: "14:00"
    },
    {
      id: 2,
      title: "Попугайская Сауна",
      price: 2800,
      duration: "45 мин",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quantity: 1,
      date: "2024-01-20",
      time: "16:30"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-primary mb-3">
                <i className="bi bi-cart-fill me-3 text-danger"></i>
                Корзина
              </h1>
              <p className="lead text-muted">
                Ваши выбранные SPA процедуры
              </p>
            </div>
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="row">
            {/* Список товаров */}
            <div className="col-lg-8 mb-4">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">
                    <i className="bi bi-list-ul me-2"></i>
                    Выбранные процедуры ({getTotalItems()})
                  </h5>
                </div>
                <div className="card-body p-0">
                  {cartItems.map((item) => (
                    <div key={item.id} className="border-bottom p-4">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ height: '80px', objectFit: 'cover', width: '100%' }}
                          />
                        </div>
                        <div className="col-md-4">
                          <h6 className="fw-bold mb-1">{item.title}</h6>
                          <small className="text-muted">
                            <i className="bi bi-clock me-1"></i>
                            {item.duration}
                          </small>
                          <div className="mt-2">
                            <small className="text-muted">
                              <i className="bi bi-calendar me-1"></i>
                              {item.date} в {item.time}
                            </small>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="input-group input-group-sm">
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <input 
                              type="number" 
                              className="form-control text-center"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                              min="1"
                              style={{ maxWidth: '60px' }}
                            />
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="text-end">
                            <div className="fw-bold text-primary fs-5">
                              {item.price.toLocaleString()} ₽
                            </div>
                            {item.quantity > 1 && (
                              <small className="text-muted">
                                {item.price.toLocaleString()} ₽ × {item.quantity}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <button 
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Итого и оформление */}
            <div className="col-lg-4">
              <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <i className="bi bi-calculator me-2"></i>
                    Итого
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <span>Товары ({getTotalItems()})</span>
                    <span>{getTotalPrice().toLocaleString()} ₽</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Скидка</span>
                    <span className="text-success">-0 ₽</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4">
                    <span className="fw-bold fs-5">К оплате</span>
                    <span className="fw-bold fs-5 text-primary">
                      {getTotalPrice().toLocaleString()} ₽
                    </span>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-lg">
                      <i className="bi bi-credit-card me-2"></i>
                      Оформить заказ
                    </button>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-arrow-left me-2"></i>
                      Продолжить покупки
                    </button>
                  </div>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="card mt-3">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">
                    <i className="bi bi-info-circle me-2 text-primary"></i>
                    Информация
                  </h6>
                  <ul className="list-unstyled small">
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Бесплатная отмена до 24 часов
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Мгновенное подтверждение
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Поддержка 24/7
                    </li>
                    <li>
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Гарантия качества
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Пустая корзина */
          <div className="row">
            <div className="col-12">
              <div className="text-center py-5">
                <i className="bi bi-cart-x text-muted" style={{ fontSize: '5rem' }}></i>
                <h4 className="text-muted mt-3">Корзина пуста</h4>
                <p className="text-muted mb-4">
                  Добавьте процедуры из каталога, чтобы оформить заказ
                </p>
                <button className="btn btn-primary btn-lg">
                  <i className="bi bi-grid me-2"></i>
                  Перейти в каталог
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
