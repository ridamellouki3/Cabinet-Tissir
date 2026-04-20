import { useState, useMemo } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, ExternalLink } from 'lucide-react';
import axios from 'axios';

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

  const timeSlots = useMemo(() => generateTimeSlots(bookingForm.day), [bookingForm.day]);

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => {
      const updated = { ...prev, [name]: value };
      if (name === 'day') updated.time = '';
      return updated;
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);
    setBookingStatus({ type: '', message: '' });
    try {
      const res = await axios.post(`${API_URL}/api/appointments`, bookingForm);
      setBookingStatus({ type: 'success', message: res.data.message || 'Rendez-vous réservé!' });
      setBookingForm({ name: '', phone: '', date: '', day: '', time: '' });
    } catch (err) {
      setBookingStatus({ type: 'error', message: 'Erreur lors de la réservation.' });
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
                  <h4>Téléphone & WhatsApp</h4>
                  <p>Notre secrétariat est à votre écoute au :</p>
                  <a href={`tel:${CABINET_PHONE_RAW}`} style={{ fontWeight: '700', fontSize: '18px', color: 'var(--primary)' }}>
                    {CABINET_PHONE}
                  </a>
                </div>
              </div>

              <div className="contact-item-expert">
                <div className="expert-icon-box"><Mail size={26} /></div>
                <div className="expert-info-text">
                  <h4>Support Email</h4>
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
                <h3 style={{ margin: 0, border: 'none', padding: 0 }}>Heures d'Ouverture</h3>
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
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Réservation</span>
            <h2 className="section-title">Planifiez Votre Visite</h2>
            <p className="section-subtitle">
              Réservez votre créneau en quelques clics pour un soin dentaire d'exception.
            </p>
          </div>
          <div className="booking-form-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bk-name">Nom Complet <span>*</span></label>
                  <input type="text" id="bk-name" name="name" value={bookingForm.name} onChange={handleBookingChange} placeholder="Votre nom complet" required />
                </div>
                <div className="form-group">
                  <label htmlFor="bk-phone">Téléphone <span>*</span></label>
                  <input type="tel" id="bk-phone" name="phone" value={bookingForm.phone} onChange={handleBookingChange} placeholder={CABINET_PHONE} required />
                </div>
              </div>
              <div className="form-row" style={{ marginBottom: '20px' }}>
                <div className="form-group">
                  <label htmlFor="bk-date">Date <span>*</span></label>
                  <input type="date" id="bk-date" name="date" value={bookingForm.date} onChange={handleBookingChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="bk-day">Jour <span>*</span></label>
                  <select id="bk-day" name="day" value={bookingForm.day} onChange={handleBookingChange} required>
                    <option value="" disabled>Choisir un jour</option>
                    {days.map(day => (<option key={day} value={day}>{day}</option>))}
                  </select>
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
              <button type="submit" className="btn-submit" disabled={bookingLoading}>
                {bookingLoading ? 'Envoi...' : 'Confirmer le Rendez-vous'}
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
