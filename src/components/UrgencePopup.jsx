import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Clock, AlertTriangle } from 'lucide-react';

const CABINET_PHONE = "+212 663-316332";
const CABINET_PHONE_RAW = "212663316332";

export default function UrgencePopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const checkTime = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1-6 is Mon-Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      // Show popup:
      // 1. If Sunday (day === 0) -> all day
      // 2. If Mon-Sat -> before 09:00 or after 19:30
      if (day === 0 || currentTime < 9 || currentTime >= 19.5) {
        setShow(true);
      } else {
        setShow(false); // Hide if within normal hours (in case it was open)
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="urgence-popup-overlay" onClick={handleDismiss}>
      <div className="urgence-popup" onClick={(e) => e.stopPropagation()}>
        <button className="urgence-popup-close" onClick={handleDismiss} aria-label="Fermer">
          <X size={20} />
        </button>

        <div className="urgence-popup-header">
          <div className="urgence-popup-icon">
            <AlertTriangle size={28} />
          </div>
          <h3>Urgence Dentaire</h3>
          <p>Le cabinet est actuellement fermé, mais nous restons disponibles pour les urgences.</p>
        </div>

        <div className="urgence-popup-info">
          <div className="urgence-popup-schedule">
            <div className="urgence-popup-time">
              <Clock size={18} />
              <div>
                <strong>Horaires Normaux</strong>
                <p>Lundi — Samedi : 09:00 - 19:30</p>
              </div>
            </div>
            <div className="urgence-popup-time emergency">
              <AlertTriangle size={18} />
              <div>
                <strong>Urgences Disponibles</strong>
                <p>19:30 → 00:00 · Tous les jours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="urgence-popup-actions">
          <a href={`tel:${CABINET_PHONE_RAW}`} className="urgence-btn phone">
            <Phone size={20} />
            Appeler Maintenant
          </a>
          <a href={`https://wa.me/${CABINET_PHONE_RAW}`} target="_blank" rel="noopener noreferrer" className="urgence-btn whatsapp">
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
