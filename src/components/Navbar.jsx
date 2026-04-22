import { useState, useEffect } from 'react';
import { Menu, X, Video, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="navbar-logo-icon">
            <img src="/dental-logo.png" alt="Tissir Dent Logo" />
          </div>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>{t('nav_about')}</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>{t('nav_services')}</a>
          <a href="#video-consultation" onClick={(e) => { e.preventDefault(); scrollTo('video-consultation'); }}>
            <Video size={16} /> {t('nav_video')}
          </a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>{t('nav_testimonials')}</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>{t('nav_contact')}</a>
          <button onClick={toggleLanguage} className="lang-toggle-btn" style={{ background: 'none', border: 'none', color: 'var(--dark)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Globe size={18} /> {lang === 'fr' ? 'AR' : 'FR'}
          </button>
          <a href="#rendez-vous" className="navbar-cta" onClick={(e) => { e.preventDefault(); scrollTo('rendez-vous'); }}>
            {t('nav_book')}
          </a>
        </div>

        <button className="navbar-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
