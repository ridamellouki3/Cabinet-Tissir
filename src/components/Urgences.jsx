import { Phone, MessageCircle, Clock, AlertTriangle, Shield } from 'lucide-react';

export default function Urgences() {
  return (
    <section className="urgences" id="urgences">
      <div className="container">
        <div className="urgences-grid">
          <div>
            <span className="urgences-label">🚨 Urgence Dentaire</span>
            <h2 className="urgences-title">Disponible en Dehors des Heures</h2>
            <p className="urgences-text">
              Une urgence dentaire ne prévient pas. Notre cabinet vous assure 
              une prise en charge rapide du lundi au samedi, même en soirée.
            </p>

            <div className="urgences-feature">
              <div className="urgences-feature-icon"><Clock size={22} /></div>
              <div>
                <h3>Horaires Normaux</h3>
                <p>Lundi — Samedi : 09:00 - 19:30</p>
              </div>
            </div>

            <div className="urgences-feature">
              <div className="urgences-feature-icon"><AlertTriangle size={22} /></div>
              <div>
                <h3>Urgences Disponibles</h3>
                <p>Après 19h30 jusqu'à 00:00 · Tous les jours</p>
              </div>
            </div>

            <div className="urgences-feature">
              <div className="urgences-feature-icon"><Shield size={22} /></div>
              <div>
                <h3>Contact Direct</h3>
                <p>Par téléphone ou WhatsApp pour une réponse immédiate</p>
              </div>
            </div>

            <div className="urgences-buttons">
              <a href="tel:212663316332" className="btn-urgence phone">
                <Phone size={18} /> Appeler
              </a>
              <a href="https://wa.me/212663316332" target="_blank" rel="noopener noreferrer" className="btn-urgence whatsapp">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="urgences-image">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85"
              alt="Urgence dentaire"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
