import { useState } from 'react';
import { Calendar, User, Mail, CreditCard, CheckCircle, Info, UploadCloud } from 'lucide-react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function VideoConsultation() {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    consultation_date: '',
    consultation_time: ''
  });
  const [step, setStep] = useState(1); // 1: Booking, 2: Payment, 3: Confirmation
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  const goToPayment = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const confirmReservation = () => {
    if (!receipt) return;
    setLoading(true);
    // Simulate API upload & processing
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const copyRib = () => {
    navigator.clipboard.writeText("1234 5678 9012 3456 7890 12");
    alert(t('vc_rib_copied', "RIB Copié !"));
  };

  return (
    <section className="video-consultation" id="video-consultation">
      <div className="container">
        <span className="section-label">{t('vc_badge', 'Innovation')}</span>
        <h2 className="section-title">{t('vc_title', 'Consultation Vidéo en Ligne')}</h2>
        <p className="section-subtitle">
          {t('vc_subtitle', 'Consultez Dr. Khaoula depuis chez vous. Idéal pour les conseils, suivis post-traitement, ou urgences légères.')}
        </p>

        {/* Stepper Header */}
        <div className="wizard-stepper">
          <div className={`wizard-step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-circle"><Calendar size={18} /></div>
            <span>Date & Heure</span>
          </div>
          <div className="wizard-line"></div>
          <div className={`wizard-step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-circle"><CreditCard size={18} /></div>
            <span>Paiement</span>
          </div>
          <div className="wizard-line"></div>
          <div className={`wizard-step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-circle"><CheckCircle size={18} /></div>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="booking-form-card" style={{ maxWidth: '700px', margin: '0 auto' }}>

          {/* STEP 1 : BOOKING FORM */}
          {step === 1 && (
            <form onSubmit={goToPayment}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nom Complet <span>*</span></label>
                  <input type="text" name="full_name" value={form.full_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Téléphone <span>*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label>Email (Optionnel)</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} />
              </div>

              <div className="form-row" style={{ marginBottom: '30px' }}>
                <div className="form-group">
                  <label>Date <span>*</span></label>
                  <input type="date" name="consultation_date" value={form.consultation_date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Heure <span>*</span></label>
                  <input type="time" name="consultation_time" value={form.consultation_time} onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className="btn-submit">
                Continuer vers le Paiement
              </button>
            </form>
          )}

          {/* STEP 2 : PAYMENT & UPLOAD */}
          {step === 2 && (
            <div className="payment-step">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '22px', marginBottom: '20px' }}>
                <CreditCard className="text-primary" /> Paiement Sécurisé
              </h3>

              <div className="info-alert" style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', padding: '15px 20px', borderRadius: '8px', marginBottom: '25px', display: 'flex', gap: '15px' }}>
                <Info size={24} color="#0284C7" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#0369A1' }}>Modalités de Paiement</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#0C4A6E', lineHeight: '1.5' }}>Le tarif de la consultation vidéo est de <strong>300 DH</strong>. Veuillez effectuer un virement bancaire puis télécharger votre reçu ci-dessous.</p>
                </div>
              </div>

              <div className="rib-card" style={{ background: '#FFFDF9', border: '1px solid #E5E7EB', padding: '25px', borderRadius: '12px', marginBottom: '25px' }}>
                <h4 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#374151' }}>Coordonnées Bancaires (RIB)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px' }}>Titulaire</span>
                    <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#1F2937' }}>Dr Tissir Khaoula</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px' }}>Banque</span>
                    <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#1F2937' }}>Banque Populaire</p>
                  </div>
                </div>
                <div style={{ background: '#F3F4F6', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <code style={{ fontSize: '16px', color: '#374151', letterSpacing: '2px', fontWeight: '600' }}>1234 5678 9012 3456 7890 12</code>
                  <button onClick={copyRib} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>Copier</button>
                </div>
              </div>

              <div className="upload-section" style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#374151' }}>Télécharger le Reçu de Paiement <span>*</span></label>
                <div style={{ border: '2px dashed #CBD5E1', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}>
                  <input type="file" onChange={handleFileChange} accept="image/*,.pdf" style={{ opacity: 0, position: 'absolute', inset: 0, width: '100%', cursor: 'pointer' }} />
                  <UploadCloud size={36} color="#94A3B8" style={{ marginBottom: '10px' }} />
                  {receipt ? (
                    <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary)' }}>{receipt.name}</p>
                  ) : (
                    <>
                      <p style={{ margin: '0 0 5px 0', fontWeight: '600', color: '#475569' }}>Cliquez pour télécharger</p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#94A3B8' }}>PNG, JPG, PDF (max 5MB)</p>
                    </>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => setStep(1)} className="btn-secondary" style={{ flex: 1, padding: '16px', background: '#F1F5F9', color: '#475569', border: 'none' }}>
                  Retour
                </button>
                <button onClick={confirmReservation} disabled={!receipt || loading} className="btn-submit" style={{ flex: 2, background: receipt ? 'var(--primary)' : '#CBD5E1' }}>
                  {loading ? 'Traitement...' : 'Confirmer la Réservation'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 : CONFIRMATION SUCCESS */}
          {step === 3 && (
            <div className="success-step" style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: '80px', height: '80px', background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px auto' }}>
                <CheckCircle size={40} color="#16A34A" />
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: '#1F2937', marginBottom: '15px' }}>Réservation Confirmée!</h2>
              <p style={{ fontSize: '16px', color: '#475569', marginBottom: '35px' }}>
                Votre consultation vidéo est réservée pour le <strong>{form.consultation_date}</strong> à <strong>{form.consultation_time}</strong>
              </p>

              <div style={{ background: '#FFFDF9', border: '1px solid #FDE68A', padding: '25px', borderRadius: '12px', textAlign: 'left', marginBottom: '35px' }}>
                <h4 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#374151' }}>Prochaines Étapes</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {form.email && (
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '14px', color: '#475569' }}>
                      <CheckCircle size={18} color="#9CA3AF" style={{ marginTop: '2px', flexShrink: 0 }} />
                      Vous recevrez un email de confirmation à <strong>{form.email}</strong>
                    </li>
                  )}
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '14px', color: '#475569' }}>
                    <CheckCircle size={18} color="#9CA3AF" style={{ marginTop: '2px', flexShrink: 0 }} />
                    Le lien de la consultation vidéo sera envoyé 30 minutes avant le rendez-vous
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '14px', color: '#475569' }}>
                    <CheckCircle size={18} color="#9CA3AF" style={{ marginTop: '2px', flexShrink: 0 }} />
                    Un rappel SMS sera envoyé au <strong>{form.phone}</strong>
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => { setStep(1); setReceipt(null); setForm({ full_name: '', phone: '', email: '', consultation_date: '', consultation_time: '' }); }} className="btn-secondary" style={{ flex: 1, padding: '16px' }}>
                  Nouvelle Réservation
                </button>
                <a href="#hero" className="btn-primary" style={{ flex: 1, padding: '16px', textDecoration: 'none' }}>
                  Retour à l'Accueil
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
