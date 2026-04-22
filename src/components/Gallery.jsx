const galleryImages = [
  {
    src: `${import.meta.env.BASE_URL}cabinet-card.jpg`,
    alt: "Salle de radiologie et équipement panoramique 3D"
  },
  {
    src: `${import.meta.env.BASE_URL}cabinet-cert.jpg`,
    alt: "Consultation et analyse radiologique sur écran"
  },
  {
    src: `${import.meta.env.BASE_URL}cabinet-office.jpeg`,
    alt: "Fauteuil dentaire et équipement de pointe"
  },
  {
    src: `${import.meta.env.BASE_URL}wall-mirror.jpg`,
    alt: "Salle d'attente confortable et chaleureuse"
  }
];

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="gallery" id="gallery">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-label" style={{ display: 'inline-block', marginBottom: '10px' }}>{t('gal_badge')}</span>
        <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--dark)' }}>{t('gal_title')}</h2>
        <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: 'var(--text-light)', fontSize: '16px' }}>
          {t('gal_subtitle')}
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
