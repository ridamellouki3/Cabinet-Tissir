import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Soins Esthétiques',
    description: 'Blanchiment dentaire, facettes et restaurations esthétiques pour un sourire radieux et confiant.',
    image: '/service-esthetique.png'
  },
  {
    title: 'Soins Préventifs',
    description: 'Nettoyage professionnel, détartrage et examens réguliers pour maintenir une santé bucco-dentaire optimale.',
    image: '/service-preventif.png'
  },
  {
    title: 'Soins Conservateurs',
    description: 'Traitement des caries, restaurations et soins endodontiques avec les techniques les plus modernes.',
    image: '/service-conservateur.png'
  },
  {
    title: 'Implantologie',
    description: 'Solutions permanentes pour dents manquantes. Implants dentaires de haute qualité pour un résultat naturel.',
    image: '/service-implant.png'
  },
  {
    title: 'Orthodontie',
    description: 'Correction de la position des dents et des mâchoires pour un sourire parfaitement aligné.',
    image: '/service-orthodontie.png'
  },
  {
    title: 'Parodontologie',
    description: 'Traitement des gencives et des tissus de soutien de la dent pour une base solide.',
    image: '/service-parodontologie.png'
  }
];

export default function Services() {
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
          <span className="section-label">Nos Spécialités</span>
          <h2 className="section-title">Services Dentaires</h2>
          <p className="section-subtitle">
            Des soins complets pour toute la famille, avec les équipements les plus modernes
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
