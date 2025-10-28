import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="py-5">
      <div className="container">
        {/* Hero секция */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="pe-lg-4">
              <h1 className="display-4 fw-bold text-primary mb-4">
                Добро пожаловать в
                <span className="text-success d-block">МурЛэнд Спа</span>
              </h1>
              <p className="lead text-muted mb-4">
                Погрузитесь в мир уюта и расслабления с нашими пушистыми терапевтами! 
                Уникальные спа-услуги с котиками и попугайчиками для полного восстановления 
                душевного равновесия и радости.
              </p>
              <div className="d-flex gap-3">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate('/catalog')}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Забронировать
                </button>
                <button 
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => navigate('/about')}
                >
                  <i className="bi bi-info-circle me-2"></i>
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Горный пейзаж" 
                className="img-fluid rounded-3 shadow-lg"
                style={{ height: '400px', objectFit: 'cover', width: '100%' }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 bg-gradient bg-dark bg-opacity-75 text-white p-4 rounded-bottom-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">Пушистые терапевты</h5>
                    <small>Котики и попугайчики для душевного тепла</small>
                  </div>
                  <div className="text-end">
                    <div className="fs-5 fw-bold">50+</div>
                    <small>пушистых друзей</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Особенности */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-heart-pulse text-primary fs-2"></i>
              </div>
              <h4 className="fw-bold mb-3">Здоровье</h4>
              <p className="text-muted">
                Научно доказанная польза общения с животными для снижения стресса 
                и улучшения психологического состояния.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-mountain text-success fs-2"></i>
              </div>
              <h4 className="fw-bold mb-3">Природа</h4>
              <p className="text-muted">
                Экологически чистые материалы и натуральные ингредиенты для процедур. 
                Наши животные живут в идеальных условиях.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-star-fill text-warning fs-2"></i>
              </div>
              <h4 className="fw-bold mb-3">Премиум</h4>
              <p className="text-muted">
                Профессиональные зоопсихологи и ветеринары обеспечивают 
                максимальный комфорт для вас и наших пушистых терапевтов.
              </p>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="row g-4">
          <div className="col-12">
            <div className="card bg-light border-0">
              <div className="card-body p-4">
                <div className="row text-center">
                  <div className="col-md-3">
                    <div className="fs-2 fw-bold text-primary">500+</div>
                    <small className="text-muted">Довольных клиентов</small>
                  </div>
                  <div className="col-md-3">
                    <div className="fs-2 fw-bold text-success">15</div>
                    <small className="text-muted">Лет опыта</small>
                  </div>
                  <div className="col-md-3">
                    <div className="fs-2 fw-bold text-warning">4.9</div>
                    <small className="text-muted">Средний рейтинг</small>
                  </div>
                  <div className="col-md-3">
                    <div className="fs-2 fw-bold text-info">24/7</div>
                    <small className="text-muted">Поддержка</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
