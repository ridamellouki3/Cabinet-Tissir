import { Phone, MessageCircle, Clock, AlertTriangle, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Urgences() {
  const { t } = useLanguage();
  return (
    <section className="urgences" id="urgences">
      <div className="container">
        <div className="urgences-grid">
          <div>
            <span className="urgences-label">🚨 {t('urg_badge')}</span>
            <h2 className="urgences-title">{t('urg_title')}</h2>
            <p className="urgences-text">{t('urg_desc')}</p>

            <div className="urgences-feature">
              <div className="urgences-feature-icon"><Clock size={22} /></div>
              <div>
                <h3>{t('urg_h_title')}</h3>
                <p>{t('urg_h_desc')}</p>
              </div>
            </div>

            <div className="urgences-feature">
              <div className="urgences-feature-icon"><AlertTriangle size={22} /></div>
              <div>
                <h3>{t('urg_avail_title')}</h3>
                <p>{t('urg_avail_desc')}</p>
              </div>
            </div>

            <div className="urgences-feature">
              <div className="urgences-feature-icon"><Shield size={22} /></div>
              <div>
                <h3>{t('urg_contact_title')}</h3>
                <p>{t('urg_contact_desc')}</p>
              </div>
            </div>

            <div className="urgences-buttons">
              <a href="tel:212663316332" className="btn-urgence phone">
                <Phone size={18} /> {t('urg_call')}
              </a>
              <a href="https://wa.me/212663316332" target="_blank" rel="noopener noreferrer" className="btn-urgence whatsapp">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="urgences-image">
            <img
              src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
              alt="Urgence dentaire"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
