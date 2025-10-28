import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div 
              className="text-center mb-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="display-4 fw-bold text-primary mb-3">О нас</h1>
              <p className="lead text-muted">
                Добро пожаловать в МурЛэнд Спа - место, где ваши питомцы
                получают заботу и внимание
              </p>
            </motion.div>

            <div className="row g-4 mb-5">
              <motion.div 
                className="col-md-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <motion.i 
                      className="bi bi-heart-fill text-danger fs-1 mb-3"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    ></motion.i>
                    <h4 className="card-title text-primary">Наша миссия</h4>
                    <p className="card-text">
                      Мы создаем комфортные условия для ваших питомцев,
                      обеспечивая им профессиональный уход и внимание, которого
                      они заслуживают.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="col-md-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <motion.i 
                      className="bi bi-star-fill text-warning fs-1 mb-3"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    ></motion.i>
                    <h4 className="card-title text-primary">Наш опыт</h4>
                    <p className="card-text">
                      Более 5 лет мы заботимся о здоровье и красоте ваших
                      питомцев, используя современные технологии и проверенные
                      методики.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="bg-light rounded-3 p-4 mb-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-primary mb-3">Почему выбирают нас?</h3>
              <div className="row g-3">
                <motion.div 
                  className="col-md-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="d-flex align-items-center">
                    <motion.i 
                      className="bi bi-check-circle-fill text-success me-3"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        color: ["#198754", "#20c997", "#198754"]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    ></motion.i>
                    <span>Профессиональные мастера с большим опытом</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="col-md-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="d-flex align-items-center">
                    <motion.i 
                      className="bi bi-check-circle-fill text-success me-3"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        color: ["#198754", "#20c997", "#198754"]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 4.5
                      }}
                    ></motion.i>
                    <span>
                      Современное оборудование и качественные материалы
                    </span>
                  </div>
                </motion.div>
                <motion.div 
                  className="col-md-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <div className="d-flex align-items-center">
                    <motion.i 
                      className="bi bi-check-circle-fill text-success me-3"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        color: ["#198754", "#20c997", "#198754"]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    ></motion.i>
                    <span>Индивидуальный подход к каждому питомцу</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="col-md-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="d-flex align-items-center">
                    <motion.i 
                      className="bi bi-check-circle-fill text-success me-3"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        color: ["#198754", "#20c997", "#198754"]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 5.5
                      }}
                    ></motion.i>
                    <span>Удобное расположение и комфортные условия</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

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
