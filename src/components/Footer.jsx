import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--white)', fontSize: '28px', margin: 0, padding: 0 }}>
              <img src="/dental-logof.png" alt="Logo" style={{ height: '80px', objectFit: 'contain' }} />
            </h2>
            <p>{t('footer_desc')}</p>
            <div className="footer-socials" style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
              <a href="#" aria-label="Instagram" style={{ fontWeight: 'bold' }}>Instagram</a>
              <a href="#" aria-label="Facebook" style={{ fontWeight: 'bold' }}>Facebook</a>
            </div>
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
            <div className="footer-col">
              <h3>{t('footer_hours')}</h3>
              <div className="footer-hours">
                <p><span>Lun - Ven:</span> 09:00 - 19:30</p>
                <p><span>Samedi:</span> 09:00 - 14:00</p>
                <p className="closed"><span>Dimanche:</span> Fermé</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Cabinet Dentaire Tissir. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
