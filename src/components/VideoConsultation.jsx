import { useState } from 'react';
import { Calendar, User, Mail, Clock } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function VideoConsultation() {
  const [form, setForm] = useState({ 
    full_name: '', 
    phone: '', 
    email: '', 
    consultation_date: '',
    consultation_time: '' 
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await axios.post(`${API_URL}/api/video-consultations`, form);
      setStatus({ type: 'success', message: res.data.message || 'Consultation enregistrée avec succès!' });
      setForm({ full_name: '', phone: '', email: '', consultation_date: '', consultation_time: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.error || 'Erreur lors de la réservation. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="video-consultation" id="video-consultation">
      <div className="container">
        <span className="section-label">Innovation</span>
        <h2 className="section-title">Consultation Vidéo en Ligne</h2>
        <p className="section-subtitle">
          Consultez Dr. Khawla depuis chez vous. Idéal pour les conseils, suivis post-traitement, ou urgences légères.
        </p>

        <div className="video-steps">
          <div className="video-step">
            <div className="video-step-number">
              <Calendar size={24} />
            </div>
            <h3>Réservez</h3>
            <p>Choisissez votre créneau horaire</p>
          </div>
          <div className="video-step">
            <div className="video-step-number">
              <User size={24} />
            </div>
            <h3>Confirmez</h3>
            <p>Remplissez vos informations</p>
          </div>
          <div className="video-step">
            <div className="video-step-number">
              <Mail size={24} />
            </div>
            <h3>Consultez</h3>
            <p>Recevez le lien de consultation</p>
          </div>
        </div>

        <div className="booking-form-card">
          <h3>Vos Informations</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vc-name">Nom Complet <span>*</span></label>
                <input
                  type="text"
                  id="vc-name"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="vc-phone">Téléphone <span>*</span></label>
                <input
                  type="tel"
                  id="vc-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+212 XXX XXX XXX"
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="vc-email">Email (Optionnel)</label>
              <input
                type="email"
                id="vc-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-row" style={{ marginBottom: '20px' }}>
              <div className="form-group">
                <label htmlFor="vc-date">Date <span>*</span></label>
                <input
                  type="date"
                  id="vc-date"
                  name="consultation_date"
                  value={form.consultation_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="vc-time">Heure <span>*</span></label>
                <input
                  type="time"
                  id="vc-time"
                  name="consultation_time"
                  value={form.consultation_time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Envoi en cours...' : 'Continuer vers le Paiement'}
            </button>

            {status.message && (
              <div className={`form-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
