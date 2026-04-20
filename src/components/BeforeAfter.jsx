import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const results = [
  {
    before: '/dental-before-3.png',
    after: '/dental-after-4.png',
    title: 'Blanchiment Dentaire',
    description: 'Résultat après 2 séances'
  },
  {
    before: '/dental-before-after-1.png',
    after: '/dental-before-after-1.png',
    title: 'Alignement Dentaire',
    description: 'Traitement orthodontique'
  }
];

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => i === 0 ? results.length - 1 : i - 1);
  const next = () => setCurrent(i => i === results.length - 1 ? 0 : i + 1);

  return (
    <section className="results" id="results">
      <div className="container">
        <div className="services-header centered">
          <span className="section-label">Avant / Après</span>
          <h2 className="section-title">Nos Résultats</h2>
          <p className="section-subtitle">
            Des sourires retrouvés grâce à notre expertise
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
                  <div className="result-images">
                    <div className="result-img-wrapper">
                      <img src={result.before} alt={`Avant - ${result.title}`} />
                      <span className="result-img-label before">Avant</span>
                    </div>
                    <div className="result-img-wrapper">
                      <img src={result.after} alt={`Après - ${result.title}`} />
                      <span className="result-img-label after">Après</span>
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
          {results.map((_, index) => (
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
