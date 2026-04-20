const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85",
    alt: "Salle de soins principale"
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=85",
    alt: "Équipement dentaire moderne"
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=85",
    alt: "Cabinet de consultation"
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=85",
    alt: "Salle de traitement"
  }
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <span className="section-label">Notre Cabinet</span>
        <h2 className="section-title">Un Environnement Moderne &amp; Apaisant</h2>
        <p className="section-subtitle">
          Découvrez notre cabinet équipé des dernières technologies pour votre confort
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
