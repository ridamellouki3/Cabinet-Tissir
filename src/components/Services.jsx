import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const VISIBLE = 3;   // cards visible on desktop
const GAP = 24;      // must match CSS gap on .services-slider-track

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('serv_card1_title'),
      description: t('serv_card1_desc'),
      image: `${import.meta.env.BASE_URL}service-esthetique.png`
    },
    {
      title: t('serv_card2_title'),
      description: t('serv_card2_desc'),
      image: `${import.meta.env.BASE_URL}service-preventif.png`
    },
    {
      title: t('serv_card3_title'),
      description: t('serv_card3_desc'),
      image: `${import.meta.env.BASE_URL}service-conservateur.png`
    },
    {
      title: t('serv_card4_title'),
      description: t('serv_card4_desc'),
      image: `${import.meta.env.BASE_URL}service-implant.png`
    },
    {
      title: t('serv_card5_title'),
      description: t('serv_card5_desc'),
      image: `${import.meta.env.BASE_URL}service-orthodontie.png`
    },
    {
      title: t('serv_card6_title'),
      description: t('serv_card6_desc'),
      image: `${import.meta.env.BASE_URL}service-parodontologie.png`
    },
    {
      title: t('serv_card7_title'),
      description: t('serv_card7_desc'),
      image: `${import.meta.env.BASE_URL}service-radiologie.png`
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(VISIBLE);
  const sliderRef = useRef(null);

  // Responsive: determine how many cards are visible
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 768) setVisibleCount(1);
      else if (w <= 992) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCount);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent(i => (i >= maxIndex ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Keep current in bounds if visibleCount changes
  useEffect(() => {
    setCurrent(i => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => {
    setCurrent(i => (i <= 0 ? maxIndex : i - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const next = () => {
    setCurrent(i => (i >= maxIndex ? 0 : i + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  // Correct transform: each step shifts by (cardWidth + gap)
  // cardWidth = (100% - (visibleCount-1)*gap) / visibleCount
  // step = cardWidth + gap = 100%/visibleCount
  const getTranslate = () => {
    if (!sliderRef.current) return `translateX(0)`;
    const containerWidth = sliderRef.current.offsetWidth;
    const cardWidth = (containerWidth - GAP * (visibleCount - 1)) / visibleCount;
    const step = cardWidth + GAP;
    return `translateX(-${current * step}px)`;
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
          ref={sliderRef}
        >
          <div className="services-slider-container">
            <div
              className="services-slider-track"
              style={{ transform: getTranslate() }}
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
