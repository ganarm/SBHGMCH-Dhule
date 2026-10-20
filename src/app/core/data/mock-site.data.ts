import { AdmissionProgram, HeroSlide, Notice, SiteSettings } from '../models/site.models';

export const SITE_SETTINGS: SiteSettings = {
  societyName: 'ASSOCIATED WITH SHRI. BHAUSAHEB HIRE GOVERNMENT MEDICAL COLLEGE & SARVOPACHAR RUGNALAY',
  instituteName: 'Government College of Nursing, Dhule',
  logoUrl: './images/logo-bin-placeholder.svg',
  logoAlt: 'Government College of Nursing, Dhule logo',
  shortName: 'GCN Dhule',
  approvalsLine:
    'Approved by Indian Nursing Council (INC) & Maharashtra Nursing Council (MNC).',
  mission:
    'To provide quality nursing education through academic excellence, competency-based clinical training, evidence-based practice, research, community engagement, and the promotion of professional ethics and lifelong learning.',
  vision:
    'To become a centre of excellence in nursing education, clinical practice, research, and community health services, contributing to the development of a healthier society.',
  aims: [
    'Prepare competent, compassionate, and ethical nursing professionals for comprehensive patient care.',
    'Deliver clinical training through the parent government medical college hospital and community settings.',
    'Promote research, lifelong learning, and professional responsibility among students and faculty.',
  ],
  contact: {
    address: 'Chakkarbardi, Malegaon Road, Dhule - 424311',
    landline: '02562-239407, 02562-239408',
    mobile: '02562-239407',
    whatsapp: '912562239407',
    email: 'gmcdhule@gmail.com',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.8!2d74.77!3d20.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU0JzAwLjAiTiA3NMKwNDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000',
  },
  social: [
    { label: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { label: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  ],
  quickLinks: [
    { label: 'Maharashtra Nursing Council', url: 'https://www.maharashtranursingcouncil.org' },
    { label: 'Indian Nursing Council', url: 'https://www.indiannursingcouncil.org' },
    { label: 'DMER, Mumbai', url: 'https://www.dmer.org' },
    { label: 'MahaDBT', url: 'https://mahadbt.maharashtra.gov.in' },
    { label: 'National Scholarship Portal', url: 'https://scholarships.gov.in' },
  ],
  alumniRegistrationUrl: '#alumni-register',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    imageUrl: './images/College Image.jpg',
    alt: 'Government College of Nursing, Dhule building and campus',
    title: 'Government College of Nursing, Dhule',
    subtitle:
      'Associated with Shri. Bhausaheb Hire Government Medical College & Sarvopachar Rugnalay. Dedicated to excellence in nursing education and community service.',
  },
  {
    imageUrl: './images/Hospital.jpg',
    alt: 'Teaching hospital clinical exposure',
    title: 'Extensive Clinical Exposure',
    subtitle:
      'Practical training at our 250-bedded teaching hospital, including OPD, ICU, Casualty, and specialized wards.',
  },
  {
    imageUrl: './images/Pre-Clinical Lab.jpg',
    alt: 'Pre-clinical nursing laboratory',
    title: 'State-of-the-Art Clinical Laboratories',
    subtitle:
      'Hands-on training in Nursing Foundation (F.O.N.), Maternal & Child Health (MCH), Community Health (CHN), and Pre-Clinical Labs.',
  },
  {
    imageUrl: './images/Nutrition Lab.jpg',
    alt: 'Nutrition and dietetics laboratory',
    title: 'Nutrition & Dietetics Lab',
    subtitle:
      'Well-equipped kitchen and lab facilities for practical training in therapeutic diets and community nutrition.',
  },
  {
    imageUrl: './images/Computer lab.jpg',
    alt: 'Computer lab with modern systems',
    title: 'Advanced Computer Lab',
    subtitle:
      'Equipped with modern systems to support nursing informatics, research, and digital literacy.',
  },
  {
    imageUrl: "./images/Girl's Hostel.jpg",
    alt: 'Girls hostel accommodation',
    title: 'Safe & Secure Hostel Facilities',
    subtitle:
      'Separate, well-equipped hostels for boys and girls (B-1 & B-2) providing a disciplined and comfortable environment.',
  },
];

export const NOTICES: Notice[] = [
  {
    id: '1',
    title: 'Academic session 2026–27 — orientation schedule',
    summary: 'Orientation programme for newly admitted B.Sc. Nursing and GNM batches.',
    type: 'important',
    publishedAt: '2026-03-15',
    pinned: true,
  },
  {
    id: '2',
    title: 'Internal assessment timetable — March 2026',
    summary: 'Tentative schedule for unit tests and practical examinations shared with students.',
    type: 'general',
    publishedAt: '2026-03-10',
  },
  {
    id: '3',
    title: 'GNM counselling — document verification',
    summary: 'Shortlisted candidates must report with original certificates on 22 March 2026, 10:00 AM.',
    type: 'admission',
    publishedAt: '2026-03-08',
    pinned: true,
  },
  {
    id: '4',
    title: 'Anti-ragging awareness week',
    summary: 'Orientation sessions for all incoming batches; helpline numbers displayed on campus.',
    type: 'important',
    publishedAt: '2026-03-01',
  },
  {
    id: '5',
    title: 'Library extended hours during exams',
    summary: 'Library open until 9:00 PM from 1–20 April for B.Sc. Nursing students.',
    type: 'general',
    publishedAt: '2026-02-28',
  },
];

export const ADMISSIONS: AdmissionProgram[] = [
  {
    slug: 'bsc-nursing',
    name: 'B.Sc. Nursing',
    status: 'open',
    academicYear: '2026–27',
    intake: 50,
    duration: '4 years (annual pattern)',
    applicationDeadline: '2026-04-30',
    brochureLabel: 'Download B.Sc. prospectus (PDF)',
  },
  {
    slug: 'gnm',
    name: 'GNM',
    status: 'upcoming',
    academicYear: '2026–27',
    intake: 40,
    duration: '3 years + internship',
    applicationDeadline: '2026-05-15',
    brochureLabel: 'Download GNM prospectus (PDF)',
  },
];
