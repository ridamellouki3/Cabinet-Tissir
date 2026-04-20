export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/dental-logo.png" alt="Tissir Dent Logo" style={{ height: '80px', width: 'auto' }} />
            </h2>
            <p>
              Cabinet dentaire moderne au cœur d'Al Houda, Agadir.
              Des soins de qualité dans un environnement apaisant.
            </p>
          </div>

          <div className="footer-col">
            <h3>Navigation</h3>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>À Propos</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>Notre Cabinet</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Témoignages</a>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Soins Esthétiques</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Soins Préventifs</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Soins Conservateurs</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Implantologie</a>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <a href="tel:212663316332">+212 663-316332</a>
            <a href="mailto:contact@tissirdent.ma">contact@tissirdent.ma</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('video-consultation'); }}>Consultation Vidéo</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Nous Contacter</a>
          </div>
        </div>

        <p className="footer-bottom">
          © {currentYear} Cabinet Tissir Dent — Dr. Tissir Khawla. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
