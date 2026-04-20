import { Sparkles, Droplets, Star } from 'lucide-react';

const treatments = [
  {
    icon: <Droplets size={24} />,
    title: 'Acide Hyaluronique',
    description: 'Injections de filler pour redonner du volume et combler les rides. Résultats naturels et immédiats.',
    duration: '30 min'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Botox',
    description: 'Relaxation des muscles du visage pour lisser les rides d\'expression. Front, pattes d\'oie, rides du lion.',
    duration: '20 min'
  },
  {
    icon: <Star size={24} />,
    title: 'Skinbooster',
    description: 'Hydratation profonde de la peau pour un teint lumineux et une peau revitalisée.',
    duration: '45 min'
  }
];

export default function FacialEsthetics() {
  return (
    <section className="facial-esthetics" id="facial-esthetics">
      <div className="container">
        <div className="facial-grid">
          <div className="facial-image">
            <img src="/facial-aesthetics.png" alt="Esthétique du visage" loading="lazy" />
          </div>

          <div className="facial-content">
            <span className="section-label">Esthétique du Visage</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Traitements Esthétiques</h2>
            <p className="about-text">
              Au-delà des soins dentaires, nous proposons des traitements d'esthétique médicale 
              du visage pour sublimer votre beauté naturelle.
            </p>

            <div className="facial-treatments">
              {treatments.map((treatment, index) => (
                <div className="facial-treatment" key={index}>
                  <div className="facial-treatment-icon">
                    {treatment.icon}
                  </div>
                  <div className="facial-treatment-content">
                    <div className="facial-treatment-header">
                      <h3>{treatment.title}</h3>
                      <span className="facial-duration">{treatment.duration}</span>
                    </div>
                    <p>{treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
