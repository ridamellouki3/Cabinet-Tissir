import { useState, useMemo } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, ExternalLink, RefreshCw } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const CABINET_PHONE = "+212 663-316332";
const CABINET_PHONE_RAW = "212663316332";

const generateTimeSlots = (day) => {
  const slots = [];
  if (day === 'Samedi') {
    for (let h = 9; h < 14; h++) {
      slots.push(`${String(h).padStart(2, '0')}:00`, `${String(h).padStart(2, '0')}:30`);
    }
    slots.push('14:00');
  } else if (day && day !== 'Dimanche') {
    for (let h = 9; h < 13; h++) {
      slots.push(`${String(h).padStart(2, '0')}:00`, `${String(h).padStart(2, '0')}:30`);
    }
    slots.push('13:00', '13:30');
    for (let h = 15; h < 19; h++) {
      slots.push(`${String(h).padStart(2, '0')}:00`, `${String(h).padStart(2, '0')}:30`);
    }
    slots.push('19:00', '19:30');
  }
  return [...new Set(slots)].sort();
};

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export default function Contact() {
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', date: '', day: '', time: '' });
  const [bookingStatus, setBookingStatus] = useState({ type: '', message: '' });
  const [bookingLoading, setBookingLoading] = useState(false);
  const { t } = useLanguage();

  const timeSlots = useMemo(() => generateTimeSlots(bookingForm.day), [bookingForm.day]);

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
      const dateObj = new Date(value);
      const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      const calculatedDay = dayNames[dateObj.getDay()];
      
      if (calculatedDay === 'Dimanche') {
        setBookingStatus({ type: 'error', message: 'Désolé, nous sommes fermés le Dimanche. Veuillez choisir un autre jour.' });
        setBookingForm(prev => ({ ...prev, date: value, day: '', time: '' }));
      } else {
        setBookingStatus({ type: '', message: '' }); // clear error
        setBookingForm(prev => ({ ...prev, date: value, day: calculatedDay, time: '' }));
      }
    } else {
      setBookingForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);
    setBookingStatus({ type: '', message: '' });
    
    try {
      // Create the text message to send to the clinic via WhatsApp
      const dentalMsg = `Bonjour Cabinet Tissir Dent,\n\nJe souhaite réserver une consultation :\n👤 Patient : ${bookingForm.name}\n📞 Contact : ${bookingForm.phone}\n📅 Date : ${bookingForm.date} (${bookingForm.day})\n⏰ Heure : ${bookingForm.time}\n\nMerci de me confirmer la disponibilité.`;
      const whatsappUrl = `https://wa.me/${CABINET_PHONE_RAW}?text=${encodeURIComponent(dentalMsg)}`;

      // Message displayed to the user
      const userMsg = `✅ Merci ${bookingForm.name} ! Votre demande est enregistrée. Cliquez sur le bouton WhatsApp qui s'est ouvert pour nous finaliser l'envoi.`;

      // Display success message to the user
      setBookingStatus({ type: 'success', message: userMsg });
      
      // Open WhatsApp for the dental clinic
      window.open(whatsappUrl, '_blank');

      // Clear the form
      setBookingForm({ name: '', phone: '', date: '', day: '', time: '' });
    } catch (err) {
      setBookingStatus({ type: 'error', message: 'Erreur lors de la préparation de la réservation.' });
    } finally {
      setBookingLoading(false);
    }
  };

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3441.765!2d-9.531931!3d30.397953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDIzJzUyLjYiTiA5wrAzMSc1NC45Ilc!5e0!3m2!1sen!2sma!4v1713550000000!5m2!1sen!2sma`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=30.397953,-9.531931`;

  return (
    <section className="contact-expert" id="contact">
      <div className="container">
        {/* ─── Modern Header ─── */}
        <div className="section-header-left" style={{ marginBottom: '60px' }}>
          <span className="section-label">Nos Coordonnées</span>
          <h2 className="section-title" style={{ textAlign: 'left', margin: '15px 0' }}>Retrouvez-Nous à Agadir</h2>
          <p className="about-text" style={{ maxWidth: '700px' }}>
            Situé au cœur de la résidence Al Houda à Agadir, notre cabinet vous accueille dans un 
            cadre moderne, lumineux et conçu pour votre confort. Suivez le plan interactif pour nous 
            rejoindre en toute simplicité.
          </p>
        </div>

        <div className="contact-expert-grid">
          {/* ─── Left Pane: Immersive Map ─── */}
          <div className="map-immersive-box">
            <iframe
              title="Google Maps"
              src={mapUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a 
              href={directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-overlay-btn"
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '30px',
                background: 'var(--primary)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                zIndex: 10
              }}
            >
              <MapPin size={20} />
              Itinéraire
            </a>
          </div>

          {/* ─── Right Pane: Expert Info Cards ─── */}
          <div className="contact-info-panel">
            <div className="contact-detail-card">
              <div className="contact-item-expert">
                <div className="expert-icon-box"><MapPin size={26} /></div>
                <div className="expert-info-text">
                  <h4>Adresse Physique</h4>
                  <p>Quartier Al Houda, Résidence Al Houda, Agadir, Maroc</p>
                </div>
              </div>

              <div className="contact-item-expert">
                <div className="expert-icon-box"><Phone size={26} /></div>
                <div className="expert-info-text">
                  <h4>{t('contact_phone_lbl')}</h4>
                  <p>Notre secrétariat est à votre écoute au :</p>
                  <a href={`tel:${CABINET_PHONE_RAW}`} style={{ fontWeight: '700', fontSize: '18px', color: 'var(--primary)' }}>
                    {CABINET_PHONE}
                  </a>
                </div>
              </div>

              <div className="contact-item-expert">
                <div className="expert-icon-box"><Mail size={26} /></div>
                <div className="expert-info-text">
                  <h4>{t('contact_email_lbl')}</h4>
                  <p>Pour vos dossiers administratifs :</p>
                  <a href="mailto:contact@tissirdent.ma" style={{ fontWeight: '500' }}>
                    contact@tissirdent.ma
                  </a>
                </div>
              </div>
            </div>

            <div className="hours-expert-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <Clock className="text-primary" size={28} />
                <h3 style={{ margin: 0, border: 'none', padding: 0 }}>{t('contact_open_lbl')}</h3>
              </div>
              <ul className="hours-list-expert">
                <li className="hour-row">
                  <span className="hour-day">Lundi — Vendredi</span>
                  <span className="hour-time">09:00 - 13:30 | 15:00 - 19:30</span>
                </li>
                <li className="hour-row">
                  <span className="hour-day">Samedi</span>
                  <span className="hour-time">09:00 - 14:00</span>
                </li>
                <li className="hour-row">
                  <span className="hour-day">Dimanche</span>
                  <span className="hour-time" style={{ color: '#EF4444', fontWeight: 'bold' }}>Fermé</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="#rendez-vous" 
              className="btn-primary" 
              style={{ 
                textAlign: 'center', 
                padding: '20px', 
                fontSize: '18px', 
                borderRadius: 'var(--radius-xl)',
                marginTop: '10px'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rendez-vous')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Prendre Rendez-vous en Ligne
            </a>
          </div>
        </div>
      </div>

      {/* ─── Re-integrated Appointment Form (Centered Above) ─── */}
      <div className="container" style={{ marginTop: '100px', paddingTop: '100px', borderTop: '1px solid var(--border)' }}>
        <div id="rendez-vous" className="booking-section">
          <div className="container">
            <div className="section-header centered">
              <span className="section-label">{t('contact_badge')}</span>
              <h2 className="section-title">{t('contact_title')}</h2>
              <p className="section-subtitle">
                {t('contact_subtitle')}
              </p>
            </div>
          </div>
          <div className="booking-form-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bk-name">{t('contact_book_name')} <span>*</span></label>
                  <input type="text" id="bk-name" name="name" value={bookingForm.name} onChange={handleBookingChange} placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="bk-phone">{t('contact_book_phone')} <span>*</span></label>
                  <input type="tel" id="bk-phone" name="phone" value={bookingForm.phone} onChange={handleBookingChange} placeholder="+212 XXX XXX XXX" required />
                </div>
              </div>
              <div className="form-row" style={{ marginBottom: '20px' }}>
                <div className="form-group">
                  <label htmlFor="bk-date">Date <span>*</span></label>
                  <input type="date" id="bk-date" name="date" value={bookingForm.date} onChange={handleBookingChange} required />
                </div>
                <div className="form-group">
                  <label>Jour détecté</label>
                  <input 
                    type="text" 
                    value={bookingForm.day || 'Le jour s\'affichera ici'} 
                    disabled 
                    style={{ background: '#f8fafc', color: bookingForm.day ? 'var(--dark)' : '#94A3B8', fontWeight: bookingForm.day ? '600' : 'normal' }}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bk-time">Heure <span>*</span></label>
                  <select id="bk-time" name="time" value={bookingForm.time} onChange={handleBookingChange} required disabled={!bookingForm.day}>
                    <option value="" disabled>{bookingForm.day ? 'Choisir une heure' : 'Sélectionnez un jour d\'abord'}</option>
                    {timeSlots.map(slot => (<option key={slot} value={slot}>{slot}</option>))}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-submit" disabled={bookingLoading} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                {bookingLoading ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  <>
                    <Calendar size={20} /> {t('contact_book_btn')}
                  </>
                )}
              </button>
              {bookingStatus.message && (
                <div className={`form-message ${bookingStatus.type}`}>
                  {bookingStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
