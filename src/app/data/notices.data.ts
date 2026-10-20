export interface Notice {
  title: string;
  date: string;
  link: string;
  isUrgent?: boolean;
}

export const NOTICES_DATA: Notice[] = [
  {
    title: 'B.Sc. Nursing & GNM Admission 2024-25: Check INC Eligibility Criteria',
    date: '15 Mar 2026',
    link: '/academics/admission',
    isUrgent: true,
  },
  {
    title: 'Rural Public Health (RPH) Posting: GNM 1st & 3rd Year students assigned to PHCs',
    date: '08 Mar 2026',
    link: '/academics/clinical-postings',
  },
  {
    title: 'International Nurses Day Celebration – All students assemble in main auditorium',
    date: '01 Mar 2026',
    link: '/student-corner/important-days',
  },
];
