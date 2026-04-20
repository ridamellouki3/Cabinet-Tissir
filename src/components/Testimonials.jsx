import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Dr. Khawla est une professionnelle exceptionnelle. Son cabinet est moderne et l'accueil est chaleureux. Je recommande vivement!",
    author: "Amina L."
  },
  {
    quote: "J'avais une peur terrible du dentiste, mais Dr. Tissir m'a mise à l'aise dès la première visite. Ses soins sont doux et efficaces.",
    author: "Fatima Z."
  },
  {
    quote: "Un cabinet au top! Équipements modernes, docteur compétente et horaires flexibles. Toute ma famille y va maintenant.",
    author: "Mohammed B."
  },
  {
    quote: "La consultation vidéo m'a vraiment sauvée quand j'avais un problème urgent un dimanche. Service exceptionnel!",
    author: "Sara K."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => i === 0 ? testimonials.length - 1 : i - 1);
  const next = () => setCurrent(i => i === testimonials.length - 1 ? 0 : i + 1);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <span className="section-label">Témoignages</span>
        <h2 className="section-title">Ce Que Disent Nos Patients</h2>

        <div className="testimonial-card" key={current}>
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <p className="testimonial-quote">"{testimonials[current].quote}"</p>
          <p className="testimonial-author">— {testimonials[current].author}</p>
        </div>

        <div className="testimonial-nav">
          <button onClick={prev} aria-label="Précédent">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} aria-label="Suivant">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
