import { useState, useEffect } from 'react';
import { Menu, X, Video } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="navbar-logo-text">
            <h1>Tissir Dent</h1>
            <p>Dr Tissir Khawla · Cabinet Dentaire</p>
          </div>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>À Propos</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
          <a href="#video-consultation" onClick={(e) => { e.preventDefault(); scrollTo('video-consultation'); }}>
            <Video size={16} /> Consultation Vidéo
          </a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Témoignages</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          <a href="#rendez-vous" className="navbar-cta" onClick={(e) => { e.preventDefault(); scrollTo('rendez-vous'); }}>
            Prendre Rendez-vous
          </a>
        </div>

        <button className="navbar-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
