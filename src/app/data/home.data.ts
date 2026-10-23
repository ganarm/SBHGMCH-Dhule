import { HeroSlide } from '../core/models/site.models';
import { Notice } from './data.models';

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

export const NOTICES_DATA: Notice[] = [
  {
    title: 'B.Sc Nursing Admissions 2026-27',
    link: '/academics/bsc',
    tag: 'Admissions',
  },
];

export const HOME_STATS = [
  { value: '90', label: 'Total Annual Intake' },
  { value: '2', label: 'Academic Programs' },
  { value: '250', label: 'Hospital Beds' },
  { value: '15k+', label: 'Sq.m. Campus Area' },
];

export const HOME_KEY_PERSONS = [
  {
    name: 'Shri. Devendra Fadnavis',
    title: "Hon'ble Chief Minister",
    sub: 'Maharashtra State',
    image: './images/Devendra-Fadnavis.png',
  },
  {
    name: 'Shri. Eknath Shinde',
    title: "Hon'ble Deputy Chief Minister",
    sub: 'Maharashtra State',
    image: './images/eknath-shinde.png',
  },
  {
    name: 'Smt. Sunetra Ajit Pawar',
    title: "Hon'ble Deputy Chief Minister",
    sub: 'Maharashtra State',
    image: './images/Smt-Sunetra-Ajit-Pawar.png',
  },
  {
    name: 'Shri. Hasan Mushrif',
    title: "Hon'ble Minister Medical Education",
    sub: 'Maharashtra State',
    image: './images/hasan-mushrif.png',
  },
  {
    name: 'Smt. Madhuri Misal',
    title: "Hon'ble Minister of State",
    sub: 'Medical Education, Maharashtra State',
    image: './images/madhuri-misal.png',
  },
  {
    name: 'Shri. Dheeraj Kumar',
    title: 'Secretary,',
    sub: 'Medical Education and Drugs',
    image: './images/dheeraj-kumar.png',
  },
  {
    name: 'Shri. Anil Bhandari',
    title: 'Commissioner, Medical Education & Ayush and',
    sub: 'Director, Medical Education & Research',
    image: './images/anil_bhandari.png',
  },
  {
    name: 'Dr. Archana Badhe',
    title: 'State Nursing Superintendent Medical Education',
    sub: '& Ayush and Director, Medical Education & Research',
    image: './images/Archana.jpeg',
  },
];
