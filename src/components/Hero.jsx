import { Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/hero-bg.jpg" alt="Cabinet dentaire moderne" />
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero_title').split(',')[0]},<br />{t('hero_title').split(',')[1] || t('hero_title')}</h1>
          <p className="hero-description">
            {t('hero_subtitle')}
          </p>
          <div className="hero-buttons">
            <a href="#rendez-vous" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('rendez-vous'); }}>
              {t('nav_book')}
            </a>
            <a href="#video-consultation" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('video-consultation'); }}>
              <Video size={18} /> {t('nav_video')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
