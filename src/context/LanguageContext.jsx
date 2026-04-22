import React, { createContext, useState, useContext, useEffect } from 'react';

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
  },
  ar: {
    // Navigation
    nav_about: 'معلومات عنا',
    nav_services: 'خدماتنا',
    nav_video: 'استشارة فيديو',
    nav_testimonials: 'آراء العملاء',
    nav_contact: 'اتصل بنا',
    nav_book: 'احجز موعداً',
    
    // Hero
    hero_badge: 'مرحباً بكم في عيادة تيسير لطب الأسنان',
    hero_title: 'ابتسامتك، أولويتنا',
    hero_subtitle: 'عيادة أسنان حديثة في قلب الهدى، أكادير. رعاية عالية الجودة بمرونة واهتمام.',
    
    // About
    about_label: 'معلومات عنا',
    about_name: 'د. تيسير خولة',
    about_p1: 'طبيبة أسنان شغوفة، أضع العلاقة الإنسانية في صميم عملي. هدفي هو تقديم رعاية أسنان عالية الجودة في بيئة حديثة ومريحة.',
    about_p2: 'تقع عيادتنا في حي الهدى بأكادير، وتجمع بين الخبرة المهنية والمرونة الاستثنائية للتكيف مع جدولك الزمني.',
    about_feat1_title: 'خبرة',
    about_feat1_desc: 'رعاية حديثة وأحدث البروتوكولات',
    about_feat2_title: 'استماع',
    about_feat2_desc: 'نهج إنساني وشخصي',

    // Services
    serv_badge: 'تخصصاتنا',
    serv_title: 'رعاية أسنان متميزة',
    serv_desc: 'حلول شاملة لإتقان ابتسامتك.',
    serv_card1_title: 'جراحة الفم',
    serv_card1_desc: 'قلع ضرس العقل، زراعة الأسنان وتطعيم العظام براحة مثالية.',
    serv_card2_title: 'زراعة الأسنان',
    serv_card2_desc: 'استبدل أسنانك المفقودة بزراعة متينة وذات مظهر طبيعي.',
    serv_card3_title: 'تقويم الأسنان',
    serv_card3_desc: 'محاذاة تجميلية للأسنان للبالغين والأطفال باستخدام تقويم شفاف أو الأقواس الكلاسيكية.',
    serv_card4_title: 'تجميل الأسنان',
    serv_card4_desc: 'قشور خزفية (فينير) وتبييض احترافي لإنعاش إشراقة ابتسامتك.',
    serv_card5_title: 'علاج اللثة',
    serv_card5_desc: 'علاجات متخصصة للثة لمنع وعلاج تراجع الأسنان.',
    serv_card6_title: 'علاج العصب',
    serv_card6_desc: 'علاج دقيق لقنوات الجذور لإنقاذ أسنانك الطبيعية.',
    
    // Video Consultation
    vc_badge: 'ابتكار',
    vc_title: 'استشارة فيديو عبر الإنترنت',
    vc_subtitle: 'استشر د. خولة من منزلك. مثالي للحصول على النصائح، المتابعة بعد العلاج، أو الحالات الطارئة البسيطة.',
    vc_rib_copied: 'تم نسخ رقم الحساب (RIB)!',

    // Urgences
    urg_badge: 'طوارئ الأسنان',
    urg_title: 'متاحون خارج أوقات العمل',
    urg_desc: 'طوارئ الأسنان لا تنذر بقدومها. عيادتنا تضمن لك رعاية سريعة من الاثنين إلى السبت، حتى في المساء.',
    urg_h_title: 'ساعات العمل العادية',
    urg_h_desc: 'الاثنين — السبت : 09:00 - 19:30',
    urg_avail_title: 'طوارئ متاحة',
    urg_avail_desc: 'بعد الساعة 19:30 حتى 00:00 · كل يوم',
    urg_contact_title: 'اتصال مباشر',
    urg_contact_desc: 'عبر الهاتف أو الواتساب لاستجابة فورية',
    urg_call: 'اتصال',

    // Testimonials
    testi_badge: 'آراء المرضى',
    testi_title: 'ماذا يقولون عنا',
    testi_subtitle: 'اكتشف تجارب مرضانا الذين يثقون بنا من أجل ابتسامتهم',

    // Gallery
    gal_badge: 'العيادة',
    gal_title: 'مساحة رعايتك',
    gal_subtitle: 'اكتشف عيادة الأسنان الحديثة الخاصة بنا والمصممة لراحتك',

    // Before/After
    ba_badge: 'قبل / بعد',
    ba_title: 'نتائجنا',
    ba_subtitle: 'ابتسامات تم تحويلها من قبل فريقنا الخبير',

    // Contact
    contact_badge: 'اتصل بنا',
    contact_title: 'احجز موعدا بسهولة',
    contact_subtitle: 'فريقنا تحت تصرفك للإجابة على أسئلتك ومرافقتك.',
    contact_info: 'معلومات عملية',
    contact_address_lbl: 'عنواننا',
    contact_address: 'الهدى، بجوار صيدلية الأصالة، أكادير',
    contact_phone_lbl: 'الهاتف والطوارئ',
    contact_email_lbl: 'البريد الإلكتروني',
    contact_open_lbl: 'ساعات العمل',
    contact_book_btn: 'تأكيد الحجز',
    contact_book_date: 'التاريخ',
    contact_book_name: 'الاسم الكامل',
    contact_book_phone: 'الهاتف',

    // Footer
    footer_desc: 'عيادة أسنان حديثة مخصصة لصحة فمك وأسنانك.',
    footer_links: 'روابط سريعة',
    footer_hours: 'ساعات العمل',
    footer_rights: 'جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }
  }, [lang]);

  const t = (key, fallback = '') => {
    return translations[lang][key] || fallback || key;
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
