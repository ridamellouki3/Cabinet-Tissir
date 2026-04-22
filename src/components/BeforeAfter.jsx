import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const results = [
  { image: '/before-after1.jpeg', title: 'Cas Clinique 1', description: 'Restauration complète du sourire' },
  { image: '/before-after2.jpeg', title: 'Cas Clinique 2', description: 'Restauration esthétique' },
  { image: '/before-after3.jpeg', title: 'Cas Clinique 3', description: 'Traitement orthodontique et facettes' },
  { image: '/before-after4.jpeg', title: 'Cas Clinique 4', description: 'Réhabilitation dentaire' },
  { image: '/before-after5.jpeg', title: 'Cas Clinique 5', description: 'Amélioration de l\'alignement' },
  { image: '/before-after6.jpeg', title: 'Cas Clinique 6', description: 'Blanchiment et corrections' },
  { image: '/before-after7.jpeg', title: 'Cas Clinique 7', description: 'Sourire naturel retrouvé' }
];

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const { t } = useLanguage();

  // Show 2 slides at a time
  const maxIndex = results.length - 2 > 0 ? results.length - 2 : 0;

  const prev = () => setCurrent(i => i <= 0 ? maxIndex : i - 1);
  const next = () => setCurrent(i => i >= maxIndex ? 0 : i + 1);

  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">{t('ba_badge')}</span>
          <h2 className="section-title">{t('ba_title')}</h2>
          <p className="section-subtitle">
            {t('ba_subtitle')}
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

        <div className="results-slider">
          <div className="results-slider-track" style={{ transform: `translateX(-${current * 50}%)` }}>
            {results.map((result, index) => (
              <div className="result-slide" key={index}>
                <div className="result-card">
                  <div className="result-images" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="result-img-wrapper" style={{ aspectRatio: '1/1', height: 'auto', background: '#f8fafc', position: 'relative' }}>
                      <img src={result.image} alt={result.title} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', padding: '10px' }} />
                      <span className="result-img-label before" style={{ background: '#334155', position: 'absolute', top: '20px', left: '20px', zIndex: 10, padding: '6px 16px', borderRadius: '50px' }}>Avant</span>
                      <span className="result-img-label after" style={{ background: 'var(--primary)', position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: 10, padding: '6px 16px', borderRadius: '50px' }}>Après</span>
                    </div>
                  </div>
                  <div className="result-card-info">
                    <h4>{result.title}</h4>
                    <p>{result.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="services-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Résultat ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
