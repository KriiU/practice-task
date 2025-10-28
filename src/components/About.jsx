import React from "react";

const About = () => {
  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary mb-3">О нас</h1>
              <p className="lead text-muted">
                Добро пожаловать в МурЛэнд Спа - место, где ваши питомцы
                получают заботу и внимание
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-heart-fill text-danger fs-1 mb-3"></i>
                    <h4 className="card-title text-primary">Наша миссия</h4>
                    <p className="card-text">
                      Мы создаем комфортные условия для ваших питомцев,
                      обеспечивая им профессиональный уход и внимание, которого
                      они заслуживают.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-star-fill text-warning fs-1 mb-3"></i>
                    <h4 className="card-title text-primary">Наш опыт</h4>
                    <p className="card-text">
                      Более 5 лет мы заботимся о здоровье и красоте ваших
                      питомцев, используя современные технологии и проверенные
                      методики.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light rounded-3 p-4 mb-5">
              <h3 className="text-primary mb-3">Почему выбирают нас?</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span>Профессиональные мастера с большим опытом</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span>
                      Современное оборудование и качественные материалы
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span>Индивидуальный подход к каждому питомцу</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    <span>Удобное расположение и комфортные условия</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-primary mb-3">Наши услуги</h3>
              <p className="text-muted mb-4">
                Мы предлагаем широкий спектр услуг для ваших питомцев
              </p>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="p-3 border rounded">
                    <i className="bi bi-scissors text-primary fs-3 mb-2"></i>
                    <h6>Стрижка и груминг</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 border rounded">
                    <i className="bi bi-droplet text-primary fs-3 mb-2"></i>
                    <h6>Купание и сушка</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 border rounded">
                    <i className="bi bi-gem text-primary fs-3 mb-2"></i>
                    <h6>Маникюр и педикюр</h6>
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

export default About;
