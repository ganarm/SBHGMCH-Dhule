import { StudentCornerTopic } from './data.models';

export const STUDENT_CORNER_TOPICS: StudentCornerTopic[] = [
  {
    slug: 'extra-curricular',
    title: 'Extra-Curricular Activities',
    intro: 'Co-curricular programmes that complement clinical training and professional development.',
    items: [
      {
        heading: 'Sports & cultural events',
        detail: 'Annual sports meet, cultural programmes, and inter-class competitions on campus.',
      },
      {
        heading: 'Student Nurses Association (SNA)',
        detail: 'Professional activities, health camps, and nursing week observances led by student office bearers.',
      },
      {
        heading: 'NSS & community outreach',
        detail: 'Blood donation drives, health awareness rallies, and village adoption activities.',
      },
    ],
  },
  {
    slug: 'important-days',
    title: 'Important Days',
    intro: 'Key observances and awareness days marked by the college each academic year.',
    items: [
      { heading: 'International Nurses Day', detail: '12 May — Florence Nightingale birth anniversary and nursing profession celebration.' },
      { heading: 'World Health Day', detail: '7 April — Themed health education and poster competitions.' },
      { heading: 'Anti-Ragging Week', detail: 'Orientation and awareness sessions at the start of each academic session.' },
      { heading: 'Independence & Republic Days', detail: 'Flag hoisting and patriotic programmes with student participation.' },
    ],
  },
  {
    slug: 'grievance',
    title: 'Grievance Redressal',
    intro: 'Students may raise academic, clinical, or welfare concerns through formal committees.',
    items: [
      {
        heading: 'Internal Grievance Redressal Committee',
        detail: 'Submit written grievances to the college office for review and time-bound redressal.',
      },
      {
        heading: 'Anti-ragging helpline',
        detail: 'Report ragging incidents immediately to the Anti-Ragging Committee or warden — zero tolerance policy.',
      },
      {
        heading: 'Online / suggestion box',
        detail: 'Anonymous suggestions accepted at the academic office during working hours.',
      },
    ],
  },
];
