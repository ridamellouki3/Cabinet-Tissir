import { Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/doctor-khawla.png" alt="Dr. Tissir Khaoula" loading="lazy" />
          </div>

          <div className="about-content">
            <span className="section-label">À Propos</span>
            <h2 className="about-name">Dr. Tissir Khaoula</h2>
            <p className="about-text">
              Chirurgienne-dentiste passionnée, je place la relation humaine
              au cœur de ma pratique. Mon objectif est de vous offrir des soins
              dentaires de qualité dans un environnement moderne et apaisant.
            </p>
            <p className="about-text">
              Située au quartier Al Houda à Agadir, notre cabinet combine
              expertise professionnelle et flexibilité exceptionnelle pour
              s'adapter à votre emploi du temps.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <Shield size={24} />
                </div>
                <h3>Expertise</h3>
                <p>Soins modernes et protocoles actualisés</p>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <Heart size={24} />
                </div>
                <h3>Écoute</h3>
                <p>Approche humaine et personnalisée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
