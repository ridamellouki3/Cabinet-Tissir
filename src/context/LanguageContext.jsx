import React, { createContext, useContext } from 'react';

const translations = {
  fr: {
    // Navigation
    nav_about: 'À Propos',
    nav_services: 'Services',
    nav_video: 'Consultation Vidéo',
    nav_testimonials: 'Témoignages',
    nav_contact: 'Contact',
    nav_book: 'Prendre Rendez-vous',
    
    // Hero
    hero_badge: 'Bienvenue au Cabinet Tissir Dent',
    hero_title: 'Votre Sourire, Notre Priorité',
    hero_subtitle: 'Un cabinet dentaire moderne au cœur d\'Al Houda, Agadir. Soins de qualité avec flexibilité et écoute.',
    
    // About
    about_label: 'À Propos',
    about_name: 'Dr. Tissir Khaoula',
    about_p1: 'Chirurgienne-dentiste passionnée, je place la relation humaine au cœur de ma pratique. Mon objectif est de vous offrir des soins dentaires de qualité dans un environnement moderne et apaisant.',
    about_p2: 'Située au quartier Al Houda à Agadir, notre cabinet combine expertise professionnelle et flexibilité exceptionnelle pour s\'adapter à votre emploi du temps.',
    about_feat1_title: 'Expertise',
    about_feat1_desc: 'Soins modernes et protocoles actualisés',
    about_feat2_title: 'Écoute',
    about_feat2_desc: 'Approche humaine et personnalisée',

    // Services
    serv_badge: 'Nos Spécialités',
    serv_title: 'Soins Dentaires d\'Excellence',
    serv_desc: 'Des solutions complètes pour parfaire votre sourire.',
    serv_card1_title: 'Chirurgie Orale',
    serv_card1_desc: 'Extractions de dents de sagesse, pose d\'implants et greffes osseuses dans un confort optimal.',
    serv_card2_title: 'Implantologie',
    serv_card2_desc: 'Remplacez vos dents manquantes avec des implants durables et à l\'aspect naturel.',
    serv_card3_title: 'Orthodontie',
    serv_card3_desc: 'Alignement dentaire esthétique pour adultes et enfants avec des gouttières invisibles ou bagues classiques.',
    serv_card4_title: 'Esthétique Dentaire',
    serv_card4_desc: 'Facettes céramiques, blanchiment dentaire professionnel pour raviver l\'éclat de votre sourire.',
    serv_card5_title: 'Parodontie',
    serv_card5_desc: 'Traitements spécialisés des gencives pour prévenir et soigner le déchaussement dentaire.',
    serv_card6_title: 'Endodontie',
    serv_card6_desc: 'Traitement canalaire de haute précision pour sauver vos dents naturelles.',
    serv_card7_title: 'Radiologie Dentaire',
    serv_card7_desc: 'Radiographies numériques et panoramiques pour un diagnostic précis et rapide avec un minimum de rayonnement.',
    
    // Video Consultation
    vc_badge: 'Innovation',
    vc_title: 'Consultation Vidéo en Ligne',
    vc_subtitle: 'Consultez Dr. Khawla depuis chez vous. Idéal pour les conseils, suivis post-traitement, ou urgences légères.',
    vc_rib_copied: 'RIB Copié !',
    
    // Urgences
    urg_badge: 'Urgence Dentaire',
    urg_title: 'Disponible en Dehors des Heures',
    urg_desc: 'Une urgence dentaire ne prévient pas. Notre cabinet vous assure une prise en charge rapide du lundi au samedi, même en soirée.',
    urg_h_title: 'Horaires Normaux',
    urg_h_desc: 'Lundi — Samedi : 09:00 - 19:30',
    urg_avail_title: 'Urgences Disponibles',
    urg_avail_desc: 'Après 19h30 jusqu\'à 00:00 · Tous les jours',
    urg_contact_title: 'Contact Direct',
    urg_contact_desc: 'Par téléphone ou WhatsApp pour une réponse immédiate',
    urg_call: 'Appeler',

    // Testimonials
    testi_badge: 'Avis des Patients',
    testi_title: 'Ce Qu\'ils Disent de Nous',
    testi_subtitle: 'Découvrez les expériences de nos patients qui nous font confiance pour leur sourire',

    // Gallery
    gal_badge: 'Le Cabinet',
    gal_title: 'Votre Espace de Soins',
    gal_subtitle: 'Découvrez notre cabinet dentaire moderne, conçu pour votre confort',

    // Before/After
    ba_badge: 'Avant / Après',
    ba_title: 'Nos Résultats',
    ba_subtitle: 'Des sourires transformés par notre équipe experte',

    // Contact
    contact_badge: 'Nous Contacter',
    contact_title: 'Prenez Rendez-vous Facilement',
    contact_subtitle: 'Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner.',
    contact_info: 'Informations Pratiques',
    contact_address_lbl: 'Notre Adresse',
    contact_address: 'Al houda côté de la pharmacie el assala Agadir',
    contact_phone_lbl: 'Téléphone & Urgences',
    contact_email_lbl: 'Email',
    contact_open_lbl: 'Horaires d\'Ouverture',
    contact_book_btn: 'Confirmer la Réservation',
    contact_book_date: 'Date',
    contact_book_name: 'Nom Complet',
    contact_book_phone: 'Téléphone',
    
    // Footer
    footer_desc: 'Un cabinet dentaire moderne dédié à votre santé bucco-dentaire.',
    footer_links: 'Liens Rapides',
    footer_hours: 'Heures d\'Ouverture',
    footer_rights: 'Tous droits réservés.',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const t = (key, fallback = '') => {
    return translations['fr'][key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ lang: 'fr', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
