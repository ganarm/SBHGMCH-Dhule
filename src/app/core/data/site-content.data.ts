import { AdmissionProgram, HeroSlide, SiteSettings } from '../models/site.models';

export const SITE_SETTINGS: SiteSettings = {
  societyName: 'SHRI. BHAUSAHEB HIRE GOVERNMENT MEDICAL COLLEGE & SARVOPACHAR RUGNALAYA',
  instituteName: 'Government College of Nursing, Dhule',
  headerTagline: 'Dedicated to excellence in nursing education and community service.',
  approvalsLine:
    'Approved by Maharashtra University of Health sciences Nashik, Nursing Council (MNC), Mumbai & Indian Nursing Council (INC), New Delhi.',
  contact: {
    address: 'SBHGMC & SR, near Surat Bypass road, Chakkarbardi, Dhule - 424311',
    phone: '02562-297050',
    email: 'gcondhule@gmail.com',
    principalEmail: 'principalgcondhule@gmail.com',
  },
  quickLinks: [
    { label: 'Maharashtra Nursing Council', url: 'https://www.maharashtranursingcouncil.org' },
    { label: 'Indian Nursing Council', url: 'https://www.indiannursingcouncil.org' },
    { label: 'DMER, Mumbai', url: 'https://www.dmer.org' },
    { label: 'MahaDBT', url: 'https://mahadbt.maharashtra.gov.in' },
    { label: 'National Scholarship Portal', url: 'https://scholarships.gov.in' },
  ],
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    imageUrl: './images/College Image.jpg',
    alt: 'Government College of Nursing, Dhule building and campus',
    title: 'Government College of Nursing, Dhule',
    subtitle:
      'Shri. Bhausaheb Hire Government Medical College & Sarvopachar Rugnalaya. Dedicated to excellence in nursing education and community service.',
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
