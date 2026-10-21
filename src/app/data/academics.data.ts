import { AcademicProgram, AdmissionCriteria } from './data.models';

export interface CourseDetails {
  title: string;
  subtitle: string;
  overview: string;
  highlights: string[];
  eligibility?: string;
  brochureLink?: string;
  feesLink?: string;
  // New fields for the sidebar
  duration?: string;
  intake?: string;
  level?: string;
}

export const COURSE_DETAILS_DATA: Record<string, CourseDetails> = {
  'bsc-nursing': {
    title: 'B.Sc. Nursing',
    subtitle: '4 years (annual pattern) · Intake 50 seats',
    overview:
      'Undergraduate degree programme preparing professional nurses for hospital, community, and specialty care settings in line with Indian Nursing Council competencies.',
    eligibility: 'Admission is strictly based on merit in the <strong>MH-Nursing CET 2026</strong> (State & All India Quota).',
    highlights: [
      'Integrated theory, simulation, and bedside clinical practice from early semesters.',
      'Rotations through Shree Bhausaheb Hire Government Medical College Hospital departments.',
      'Strict adherence to INC and MNC guidelines for nursing education.',
      'Comprehensive clinical postings and community health outreach programs.'
    ],
    brochureLink: '/PDFs/GCON-Dhule-Admission-Brochure-2026-27.pdf',
    feesLink: '/admissions#fees',
    duration: '4 Years',
    intake: '50 Seats',
    level: 'Undergraduate'
  },
  'gnm': {
    title: 'GNM (General Nursing & Midwifery)',
    subtitle: '3 years + 6 months internship · Intake 40 seats',
    overview: 'The General Nursing and Midwifery (GNM) programme is a diploma course designed to prepare competent nurses and midwives. It equips students with the knowledge and skills required to provide holistic healthcare in hospital and community settings.',
    eligibility: 'Admission is based on MH-Nursing CET. (Detailed eligibility criteria for 2026-27 will be updated soon).',
    highlights: [
      'Comprehensive training in midwifery, maternal, and child health nursing.',
      'Extensive clinical postings in affiliated government medical college hospitals.',
      'Strong focus on primary healthcare, community outreach, and rural health services.',
      '3-year structured academic curriculum followed by a mandatory 6-month internship.'
    ],
    duration: '3.5 Years',
    intake: '40 Seats',
    level: 'Diploma'
  },
  'msc-nursing': {
    title: 'M.Sc. Nursing',
    subtitle: '2 years · Intake 15 seats',
    overview: 'The M.Sc. Nursing program is a postgraduate degree designed to prepare nursing leaders, educators, and advanced practitioners. The curriculum focuses on advanced clinical practice, nursing research, and management.',
    eligibility: 'Requires B.Sc. Nursing degree and valid entrance exam score. (Detailed brochure pending client approval).',
    highlights: [
      'Advanced clinical specialization in Medical-Surgical, Community, or Mental Health Nursing.',
      'Strong emphasis on evidence-based practice and nursing research.',
      'Prepares graduates for leadership roles in nursing education and hospital administration.',
      '2-year structured academic curriculum culminating in a dissertation.'
    ],
    duration: '2 Years',
    intake: '15 Seats',
    level: 'Postgraduate'
  }
};

// --- (Keep the rest of your file: ADMISSIONS_PAGE_DATA, ACADEMIC_PROGRAMS, ADMISSION_CRITERIA exactly as they are) ---
// ... 

export const ADMISSIONS_PAGE_DATA = {
  title: 'Admissions 2026-2027',
  subtitle: 'Information Brochure, Fees & Criteria',
  helpline: ['02562 297050 (10 AM to 5 PM)', 'Mob: 9665000348', 'Mob: 9272363867', 'Mob: 9130972261'],
  courses: {
    bsc: {
      name: 'B.Sc. Nursing',
      available: true,
      brochurePdf: '/PDFs/GCON-Dhule-Admission-Brochure-2026-27.pdf',
      criteria: 'Admission is strictly based on merit in the MH-Nursing CET 2026 (State & All India Quota).',
      feesNote: 'B.Sc. Nursing Fees (A.Y. 2026-27). DD Should be made in favour of "Principal, Government College of Nursing, Dhule". Cash/Cheque is NOT accepted.',
      fees: [
        { name: 'Open Category (Male & Female)', total: '₹30,400', items: [{ label: 'Tuition Fee', amount: '₹25,400' }, { label: 'Admission Fee', amount: '₹1,500' }, { label: 'Library Fee (Deposit)', amount: '₹2,000' }, { label: 'Library Fee', amount: '₹1,000' }, { label: 'Gymkhana Fee', amount: '₹500' }], ddInfo: '3 DDs Required (25400, 1500, 3500)' },
        { name: 'EWS, EBC, SEBC (Female)', total: '₹5,000', items: [{ label: 'Admission Fee', amount: '₹1,500' }, { label: 'Library Fee (Deposit)', amount: '₹2,000' }, { label: 'Library Fee', amount: '₹1,000' }, { label: 'Gymkhana Fee', amount: '₹500' }], ddInfo: '2 DDs Required (1500, 3500)' },
        { name: 'EWS, EBC (Male)', total: '₹17,700', items: [{ label: 'Tuition Fee', amount: '₹12,700' }, { label: 'Admission Fee', amount: '₹1,500' }, { label: 'Library Fee (Deposit)', amount: '₹2,000' }, { label: 'Library Fee', amount: '₹1,000' }, { label: 'Gymkhana Fee', amount: '₹500' }], ddInfo: '3 DDs Required (12700, 1500, 3500)' },
        { name: 'SC, ST, OBC, VJNT, SEBC (M & F)', total: '₹5,000', items: [{ label: 'Admission Fee', amount: '₹1,500' }, { label: 'Library Fee (Deposit)', amount: '₹2,000' }, { label: 'Library Fee', amount: '₹1,000' }, { label: 'Gymkhana Fee', amount: '₹500' }], ddInfo: '2 DDs Required (1500, 3500)' }
      ],
      documents: {
        mandatory: ['Online downloaded Application form MH-Nursing CET 2026', 'Admit Card MH-Nursing CET 2026', 'MH-Nursing CET 2026 Result', 'Provisional allotment letter / Selection list printout', 'Photo Identity Proof (Aadhaar Card)', 'Nationality Certificate / Valid Passport', 'Certificate for Age & Domicile (SSC passing Certificate)', 'SSC (10th) Marksheet & Passing Certificate', 'HSC (12th) Marksheet & Passing Certificate', 'Medical Fitness Certificate (Annexure-H)', 'School Leaving / Transfer Certificate (LC/TC)'],
        applicable: ['Caste Certificate', 'Caste Validity Certificate', 'Non Creamy Layer Certificate (Valid up to 31/03/2027)', 'EWS Certificate (Valid for 2026-27)', 'Migration certificate (For outside Maharashtra Students)', 'Education Gap certificate (Stamp paper with affidavit)', 'Defense Certificate (For D-1, D-2, D-3)', 'Disability Certificate (For PWD)', 'Orphan Certificate', 'Minority Certificate']
      }
    },
    gnm: { name: 'GNM (General Nursing & Midwifery)', available: false, notice: 'The detailed information brochure, approved fees, and specific admission criteria for GNM (2026-27) will be published here shortly by the State CET Cell.' },
    msc: { name: 'M.Sc. Nursing', available: false, notice: 'The detailed information brochure, approved fees, and specific admission criteria for M.Sc. Nursing (2026-27) will be published here shortly by the State CET Cell.' }
  }
};

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  { slug: 'bsc-nursing', name: 'B.Sc. Nursing', duration: '4 years (annual pattern)', intake: 50, description: 'Undergraduate degree programme...', highlights: ['Integrated theory...', 'Rotations through...', 'Focus on evidence-based practice...'] },
  { slug: 'gnm', name: 'GNM (General Nursing & Midwifery)', duration: '3 years + internship', intake: 40, description: 'Diploma programme developing...', highlights: ['Competency-based skills...', 'Supervised clinical postings...', 'Preparation for registration...'] },
];

export const ADMISSION_CRITERIA: AdmissionCriteria = {
  title: 'INC Admission Criteria',
  eligibility: ['Passed 10+2 (Higher Secondary) examination...', 'Minimum aggregate: 45%...', 'Minimum aggregate: 40%...', 'Candidates must be medically fit...'],
  ageRequirement: 'Minimum age 17 years on or before 31 December of the year of admission.',
  admissionAuthority: 'Admissions are conducted through the Maharashtra State Common Entrance Test (CET) Cell and government counselling as per prevailing DMER / state policy.',
};