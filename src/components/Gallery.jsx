const galleryImages = [
  {
    src: "/cabinet-card.jpg",
    alt: "Salle de radiologie et équipement panoramique 3D"
  },
  {
    src: "/cabinet-cert.jpg",
    alt: "Consultation et analyse radiologique sur écran"
  },
  {
    src: "/cabinet-office.jpg",
    alt: "Fauteuil dentaire et équipement de pointe"
  },
  {
    src: "/wall-mirror.jpg",
    alt: "Salle d'attente confortable et chaleureuse"
  }
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <span className="section-label">Au Cœur de Notre Cabinet</span>
        <h2 className="section-title">Bienvenue chez Tissir Dent</h2>
        <p className="section-subtitle">
          Découvrez notre clinique dentaire, nos diplômes, et l'endroit où nous transformons vos sourires.
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
