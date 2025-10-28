import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Анна Петрова',
    email: 'anna.petrova@email.com',
    phone: '+7 (999) 123-45-67',
    birthDate: '1990-05-15',
    preferences: {
      notifications: true,
      newsletter: false,
      sms: true
    }
  });

  const [bookings] = useState([
    {
      id: 1,
      service: 'Котичий Массаж',
      date: '2024-01-15',
      time: '14:00',
      status: 'Подтверждено',
      price: '3500 ₽'
    },
    {
      id: 2,
      service: 'Попугайская Сауна',
      date: '2024-01-20',
      time: '16:30',
      status: 'Ожидает подтверждения',
      price: '2800 ₽'
    },
    {
      id: 3,
      service: 'Мурчальная Ванна',
      date: '2024-01-10',
      time: '11:00',
      status: 'Завершено',
      price: '3200 ₽'
    }
  ]);

  const handleInputChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePreferenceChange = (preference, value) => {
    setUserInfo(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: value
      }
    }));
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Подтверждено': 'bg-success',
      'Ожидает подтверждения': 'bg-warning',
      'Завершено': 'bg-secondary'
    };
    return `badge ${statusClasses[status] || 'bg-secondary'}`;
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          {/* Боковая панель профиля */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center p-4">
                {/* Аватар */}
                <div className="mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" 
                       style={{ width: '120px', height: '120px' }}>
                    <i className="bi bi-person-fill text-primary" style={{ fontSize: '4rem' }}></i>
                  </div>
                </div>
                
                {/* Информация пользователя */}
                <h4 className="fw-bold mb-1">{userInfo.name}</h4>
                <p className="text-muted mb-3">{userInfo.email}</p>
                
                {/* Статистика */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="bg-light rounded p-3">
                      <div className="fs-4 fw-bold text-primary">{bookings.length}</div>
                      <small className="text-muted">Бронирований</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light rounded p-3">
                      <div className="fs-4 fw-bold text-success">4.8</div>
                      <small className="text-muted">Рейтинг</small>
                    </div>
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className="d-grid gap-2">
                  <button 
                    className={`btn ${isEditing ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <i className={`bi ${isEditing ? 'bi-check-lg' : 'bi-pencil'} me-2`}></i>
                    {isEditing ? 'Сохранить' : 'Редактировать'}
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="bi bi-gear me-2"></i>
                    Настройки
                  </button>
                </div>
              </div>
            </div>

            {/* Настройки уведомлений */}
            <div className="card shadow-sm mt-3">
              <div className="card-header bg-light">
                <h6 className="mb-0">
                  <i className="bi bi-bell me-2"></i>
                  Уведомления
                </h6>
              </div>
              <div className="card-body">
                <div className="form-check mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={userInfo.preferences.notifications}
                    onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                  />
                  <label className="form-check-label">
                    Email уведомления
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={userInfo.preferences.newsletter}
                    onChange={(e) => handlePreferenceChange('newsletter', e.target.checked)}
                  />
                  <label className="form-check-label">
                    Новостная рассылка
                  </label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={userInfo.preferences.sms}
                    onChange={(e) => handlePreferenceChange('sms', e.target.checked)}
                  />
                  <label className="form-check-label">
                    SMS уведомления
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="col-lg-8">
            {/* Личная информация */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="bi bi-person-lines-fill me-2"></i>
                  Личная информация
                </h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Имя</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={userInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control"
                      value={userInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Телефон</label>
                    <input 
                      type="tel" 
                      className="form-control"
                      value={userInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Дата рождения</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={userInfo.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* История бронирований */}
            <div className="card shadow-sm">
              <div className="card-header bg-light d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-calendar-check me-2"></i>
                  История бронирований
                </h5>
                <button className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-plus-lg me-1"></i>
                  Новое бронирование
                </button>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Услуга</th>
                        <th>Дата</th>
                        <th>Время</th>
                        <th>Статус</th>
                        <th>Стоимость</th>
                        <th>Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td>
                            <div className="fw-semibold">{booking.service}</div>
                          </td>
                          <td>{booking.date}</td>
                          <td>{booking.time}</td>
                          <td>
                            <span className={getStatusBadge(booking.status)}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="fw-semibold">{booking.price}</td>
                          <td>
                            <div className="btn-group btn-group-sm">
                              <button className="btn btn-outline-primary">
                                <i className="bi bi-eye"></i>
                              </button>
                              <button className="btn btn-outline-secondary">
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button className="btn btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="row g-4 mt-3">
              <div className="col-md-6">
                <div className="card bg-primary bg-opacity-10 border-0">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-heart-pulse text-primary fs-1 mb-3"></i>
                    <h6 className="fw-bold">Любимые процедуры</h6>
                    <p className="text-muted small mb-0">Котичий Массаж, Мурчальная Ванна</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-success bg-opacity-10 border-0">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-star-fill text-success fs-1 mb-3"></i>
                    <h6 className="fw-bold">VIP статус</h6>
                    <p className="text-muted small mb-0">Постоянный клиент с 2020 года</p>
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

export default Profile;
