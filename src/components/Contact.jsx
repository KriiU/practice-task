import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Данные формы:', data);
    alert('Спасибо за обратную связь! Мы свяжемся с вами в ближайшее время.');
    reset();
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-primary mb-3">
                <i className="bi bi-envelope-heart me-3 text-danger"></i>
                Обратная связь
              </h1>
              <p className="lead text-muted">
                Свяжитесь с нами для записи на процедуры или получения консультации
              </p>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-4">
                    {/* Имя */}
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label fw-semibold">
                        Имя <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : ''}`}
                        placeholder="Введите ваше имя"
                        {...register('firstName', {
                          required: 'Имя обязательно для заполнения',
                          minLength: {
                            value: 2,
                            message: 'Имя должно содержать минимум 2 символа'
                          },
                          pattern: {
                            value: /^[а-яёА-ЯЁa-zA-Z\s]+$/,
                            message: 'Имя может содержать только буквы'
                          }
                        })}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName.message}
                        </div>
                      )}
                    </div>

                    {/* Отчество */}
                    <div className="col-md-6">
                      <label htmlFor="middleName" className="form-label fw-semibold">
                        Отчество <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        className={`form-control form-control-lg ${errors.middleName ? 'is-invalid' : ''}`}
                        placeholder="Введите ваше отчество"
                        {...register('middleName', {
                          required: 'Отчество обязательно для заполнения',
                          minLength: {
                            value: 2,
                            message: 'Отчество должно содержать минимум 2 символа'
                          },
                          pattern: {
                            value: /^[а-яёА-ЯЁa-zA-Z\s]+$/,
                            message: 'Отчество может содержать только буквы'
                          }
                        })}
                      />
                      {errors.middleName && (
                        <div className="invalid-feedback">
                          {errors.middleName.message}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="example@email.com"
                        {...register('email', {
                          required: 'Email обязателен для заполнения',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Введите корректный email адрес'
                          }
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    {/* Дополнительные поля */}
                    <div className="col-12">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control form-control-lg"
                        placeholder="+7 (999) 123-45-67"
                        {...register('phone', {
                          pattern: {
                            value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                            message: 'Введите корректный номер телефона'
                          }
                        })}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        className="form-control form-control-lg"
                        rows="4"
                        placeholder="Расскажите о ваших пожеланиях или вопросах..."
                        {...register('message')}
                      ></textarea>
                    </div>

                    {/* Кнопки */}
                    <div className="col-12">
                      <div className="d-grid gap-3 d-md-flex justify-content-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg px-4"
                          onClick={() => reset()}
                        >
                          <i className="bi bi-arrow-clockwise me-2"></i>
                          Очистить
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5"
                        >
                          <i className="bi bi-send me-2"></i>
                          Отправить
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="row g-4 mt-5">
              <div className="col-md-4">
                <div className="card border-0 bg-primary bg-opacity-10">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-telephone text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">Телефон</h5>
                    <p className="text-muted mb-0">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 bg-success bg-opacity-10">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-envelope text-success fs-1 mb-3"></i>
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted mb-0">info@murlend-spa.ru</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 bg-warning bg-opacity-10">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-clock text-warning fs-1 mb-3"></i>
                    <h5 className="fw-bold">Время работы</h5>
                    <p className="text-muted mb-0">9:00 - 21:00</p>
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

export default Contact;
