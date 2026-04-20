import { Video } from 'lucide-react';

export default function Hero() {
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
          <h1 className="hero-title">Votre Sourire,<br />Notre Priorité</h1>
          <p className="hero-description">
            Un cabinet dentaire moderne au cœur d'Al Houda,
            Agadir. Soins de qualité avec flexibilité et écoute.
          </p>
          <div className="hero-buttons">
            <a href="#rendez-vous" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('rendez-vous'); }}>
              Prendre Rendez-vous
            </a>
            <a href="#video-consultation" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('video-consultation'); }}>
              <Video size={18} /> Consultation Vidéo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
