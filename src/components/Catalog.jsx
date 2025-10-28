import React, { useState } from 'react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const services = [
    {
      id: 1,
      title: "Котичий Массаж",
      description: "Нежный массаж с участием пушистых котиков. Они помогают расслабиться и снять стресс своими лапками и мурлыканьем.",
      price: "3500 ₽",
      duration: "60 мин",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Котики"
    },
    {
      id: 2,
      title: "Попугайская Сауна",
      description: "Теплая сауна с яркими попугайчиками, которые создают атмосферу тропиков своими красивыми перьями и мелодичными звуками.",
      price: "2800 ₽",
      duration: "45 мин",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Попугайчики"
    },
    {
      id: 3,
      title: "Мурчальная Ванна",
      description: "Расслабляющая ванна с участием котиков, которые мурчат рядом и создают уютную атмосферу для полного расслабления.",
      price: "3200 ₽",
      duration: "75 мин",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Котики"
    },
    {
      id: 4,
      title: "Пернатый Душ",
      description: "Освежающий душ с участием попугайчиков, которые создают ощущение тропического дождя своими яркими красками.",
      price: "2200 ₽",
      duration: "30 мин",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Попугайчики"
    },
    {
      id: 5,
      title: "Пушистая Ароматерапия",
      description: "Сеанс ароматерапии в компании котиков, которые любят запах лаванды и помогают создать атмосферу уюта.",
      price: "2500 ₽",
      duration: "50 мин",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Котики"
    },
    {
      id: 6,
      title: "Птичья Медитация",
      description: "Медитация под мелодичные звуки попугайчиков. Они помогают сосредоточиться и достичь внутреннего спокойствия.",
      price: "1800 ₽",
      duration: "45 мин",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Попугайчики"
    }
  ];

  const categories = ["Все", "Котики", "Попугайчики"];

  // Фильтрация услуг по категории
  const filteredServices = selectedCategory === "Все" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <main className="py-5">
      <div className="container">
        {/* Заголовок секции */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary mb-3">
            <i className="bi bi-heart-fill me-3 text-danger"></i>
            Каталог SPA Услуг
          </h1>
          <p className="lead text-muted">
            Откройте для себя уникальные процедуры с нашими пушистыми терапевтами
          </p>
        </div>

        {/* Фильтры по категориям */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`btn ${category === selectedCategory ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4`}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "Котики" && "🐱 "}
                  {category === "Попугайчики" && "🦜 "}
                  {category}
                </button>
              ))}
            </div>
            <div className="text-center">
              <small className="text-muted">
                Показано услуг: <span className="fw-bold text-primary">{filteredServices.length}</span> из {services.length}
              </small>
            </div>
          </div>
        </div>

        {/* Сетка услуг */}
        <div className="row g-4">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 overflow-hidden">
                {/* Изображение услуги */}
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="card-img-top h-100 w-100"
                    style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-success bg-opacity-90 px-3 py-2">
                      {service.category}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient bg-dark bg-opacity-75 text-white p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title mb-0 fw-bold">{service.title}</h5>
                      <span className="badge bg-warning text-dark fs-6">{service.price}</span>
                    </div>
                  </div>
                </div>

                {/* Содержимое карточки */}
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-muted flex-grow-1">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <small className="text-muted d-block">Продолжительность</small>
                        <span className="fw-semibold">
                          <i className="bi bi-clock me-1"></i>
                          {service.duration}
                        </span>
                      </div>
                      <div className="col-6">
                        <small className="text-muted d-block">Стоимость</small>
                        <span className="fw-bold text-success fs-5">{service.price}</span>
                      </div>
                    </div>
                    
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary btn-lg">
                        <i className="bi bi-calendar-plus me-2"></i>
                        Забронировать
                      </button>
                      <button className="btn btn-outline-secondary">
                        <i className="bi bi-info-circle me-2"></i>
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center py-5">
                <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                <h4 className="text-muted">Услуги не найдены</h4>
                <p className="text-muted">Попробуйте выбрать другую категорию</p>
              </div>
            </div>
          )}
        </div>

        {/* Дополнительная информация */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light border-0">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
            <h4 className="card-title text-primary mb-3">
              <i className="bi bi-heart-fill me-2 text-danger"></i>
              Премиум SPA Опыт
            </h4>
            <p className="card-text text-muted mb-0">
              Все наши процедуры включают в себя общение с животными, доступ к игровой зоне с котиками и попугайчиками 
              и возможность сделать памятные фото с нашими пушистыми терапевтами.
            </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="d-flex justify-content-center gap-4">
                      <div>
                        <div className="fs-2 fw-bold text-primary">4.9</div>
                        <small className="text-muted">Рейтинг</small>
                      </div>
                      <div>
                        <div className="fs-2 fw-bold text-success">500+</div>
                        <small className="text-muted">Довольных клиентов</small>
                      </div>
                    </div>
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

export default Catalog;
