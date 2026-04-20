import { Phone } from 'lucide-react';

export default function FloatingPhone() {
  return (
    <a href="tel:212663316332" className="floating-phone" aria-label="Appeler le cabinet" title="Appelez-nous">
      <Phone size={24} />
    </a>
  );
}
