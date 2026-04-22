import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('serv_card1_title'),
      description: t('serv_card1_desc'),
      image: '/service-esthetique.png'
    },
    {
      title: t('serv_card2_title'),
      description: t('serv_card2_desc'),
      image: '/service-preventif.png'
    },
    {
      title: t('serv_card3_title'),
      description: t('serv_card3_desc'),
      image: '/service-conservateur.png'
    },
    {
      title: t('serv_card4_title'),
      description: t('serv_card4_desc'),
      image: '/service-implant.png'
    },
    {
      title: t('serv_card5_title'),
      description: t('serv_card5_desc'),
      image: '/service-orthodontie.png'
    },
    {
      title: t('serv_card6_title'),
      description: t('serv_card6_desc'),
      image: '/service-parodontologie.png'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Show 3 at a time, max index is length - 3
  const maxIndex = services.length > 3 ? services.length - 3 : 0;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent(i => i >= maxIndex ? 0 : i + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const prev = () => {
    setCurrent(i => i <= 0 ? maxIndex : i - 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const next = () => {
    setCurrent(i => i >= maxIndex ? 0 : i + 1);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header centered">
          <span className="section-label">{t('serv_badge')}</span>
          <h2 className="section-title">{t('serv_title')}</h2>
          <p className="section-subtitle">
            {t('serv_desc')}
          </p>
          <div className="services-nav">
            <button onClick={prev} aria-label="Précédent" className="slider-btn">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} aria-label="Suivant" className="slider-btn">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          className="services-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="services-slider-container">
            <div
              className="services-slider-track"
              ref={trackRef}
              style={{
                transform: `translateX(calc(-${current * (100 / 3)}%))`
              }}
            >
              {services.map((service, index) => (
                <div className="service-slide" key={index}>
                  <div className="service-slide-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-slide-overlay" />
                  </div>
                  <div className="service-slide-content">
                    <div className="service-slide-glass">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => {
                setCurrent(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 8000);
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
