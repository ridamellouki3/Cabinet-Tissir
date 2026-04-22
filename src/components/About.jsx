import { Shield, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/doctor-khawla.jpg" alt="Dr. Tissir Khaoula" loading="lazy" />
          </div>

          <div className="about-content">
            <span className="section-label">{t('about_label')}</span>
            <h2 className="about-name">{t('about_name')}</h2>
            <p className="about-text">
              {t('about_p1')}
            </p>
            <p className="about-text">
              {t('about_p2')}
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <Shield size={24} />
                </div>
                <h3>{t('about_feat1_title')}</h3>
                <p>{t('about_feat1_desc')}</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <Heart size={24} />
                </div>
                <h3>{t('about_feat2_title')}</h3>
                <p>{t('about_feat2_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
