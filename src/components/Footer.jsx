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
            <h2>
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                <path d="M32 8C28 8 24 12 22 18C20 24 20 32 24 40C27 46 30 52 32 56C34 52 37 46 40 40C44 32 44 24 42 18C40 12 36 8 32 8Z" 
                      fill="rgba(189,219,209,0.3)" stroke="#BDDBD1" strokeWidth="2"/>
              </svg>
              Tissir Dent
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
