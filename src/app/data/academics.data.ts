import { AcademicProgram, AdmissionCriteria } from './data.models';

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    slug: 'bsc-nursing',
    name: 'B.Sc. Nursing',
    duration: '4 years (annual pattern)',
    intake: 50,
    description:
      'Undergraduate degree programme preparing professional nurses for hospital, community, and specialty care settings in line with Indian Nursing Council competencies.',
    highlights: [
      'Integrated theory, simulation, and bedside clinical practice from early semesters',
      'Rotations through medical college hospital departments and community health centres',
      'Focus on evidence-based practice, ethics, and patient safety',
    ],
  },
  {
    slug: 'gnm',
    name: 'GNM (General Nursing & Midwifery)',
    duration: '3 years + internship',
    intake: 40,
    description:
      'Diploma programme developing competent staff nurses and midwives for primary, secondary, and tertiary care under INC guidelines.',
    highlights: [
      'Competency-based skills training in nursing foundations and midwifery',
      'Supervised clinical postings and community health nursing field work',
      'Preparation for registration with Maharashtra Nursing Council',
    ],
  },
];

export const ADMISSION_CRITERIA: AdmissionCriteria = {
  title: 'INC Admission Criteria',
  eligibility: [
    'Passed 10+2 (Higher Secondary) examination with Physics, Chemistry, Biology, and English (PCB).',
    'Minimum aggregate: 45% for General category candidates.',
    'Minimum aggregate: 40% for SC / ST / OBC category candidates (as per state reservation norms).',
    'Candidates must be medically fit as certified by authorised medical authority.',
  ],
  ageRequirement: 'Minimum age 17 years on or before 31 December of the year of admission.',
  admissionAuthority:
    'Admissions are conducted through the Maharashtra State Common Entrance Test (CET) Cell and government counselling as per prevailing DMER / state policy.',
};
