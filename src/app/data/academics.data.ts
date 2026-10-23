import { AcademicProgram, AdmissionCriteria } from './data.models';
import { InformationPage } from './information-pages.model';

export const ACADEMIC_SUPPORT_PAGES: Record<string, InformationPage> = {
  holidays: {
    title: 'List of Holidays',
    description: 'The approved academic-year holiday list will be published here.',
  },
  calendar: {
    title: 'Academic Calendar',
    description: 'The academic calendar will be published here.',
  },
  syllabus: {
    title: 'Syllabus',
    description: 'Programme syllabi and related academic documents will be published here.',
  },
};

export const BSC_NURSING_INTAKE = 100;
export const GNM_DURATION = '3 Years';
export const BSC_ADMISSION_BROCHURE_PDF =
  'PDFs/Admissions/GCON-Dhule-Admission-Brochure-2026-27.pdf';
export const BSC_ADMISSION_ROUTE =
  'Admission is strictly based on merit in the MH-Nursing CET 2026.';
export const GNM_ADMISSION_NOTE =
  'NOTE: The admission process for the GNM course has been put on hold due to the upgradation of the GNM programme to the B.Sc. Nursing programme for the Academic Year 2026–27.';

export interface CourseDetails {
  slug: string;
  title: string;
  cardTitle?: string;
  status: 'open' | 'closed' | 'upcoming' | 'on-hold';
  duration: string;
  intake: number;
  affiliation: string;
  level: string;
  detailPath: string;
  actionLabel: string;
  icon: string;
  subtitle: string;
  overview: string;
  highlights: string[];
  admissionRoute?: string;
  note?: string;
  brochureLink?: string;
  feesLink?: string;
}

export const COURSE_DETAILS_DATA: Record<string, CourseDetails> = {
  'bsc-nursing': {
    slug: 'bsc-nursing',
    title: 'B.Sc. Nursing',
    status: 'open',
    duration: '4 Years',
    intake: BSC_NURSING_INTAKE,
    affiliation: 'INC & MNC',
    level: 'Undergraduate',
    detailPath: '/academics/bsc',
    actionLabel: 'View Details & Admission',
    icon: 'fa-stethoscope',
    subtitle: `4 Years · Intake ${BSC_NURSING_INTAKE} seats`,
    overview:
      'Undergraduate degree programme preparing professional nurses for hospital, community, and specialty care settings in line with Indian Nursing Council competencies.',
    admissionRoute: BSC_ADMISSION_ROUTE,
    highlights: [
      'Integrated theory, simulation, and bedside clinical practice from early semesters.',
      'Rotations through Shree Bhausaheb Hire Government Medical College Hospital departments.',
      'Strict adherence to INC and MNC guidelines for nursing education.',
      'Comprehensive clinical postings and community health outreach programs.'
    ],
    brochureLink: BSC_ADMISSION_BROCHURE_PDF,
    feesLink: '/admissions#fees',
  },
  'gnm': {
    slug: 'gnm',
    title: 'GNM (General Nursing & Midwifery)',
    cardTitle: 'GNM',
    status: 'on-hold',
    duration: GNM_DURATION,
    intake: 40,
    affiliation: 'INC & MNC',
    level: 'Diploma',
    detailPath: '/academics/gnm',
    actionLabel: 'View Details',
    icon: 'fa-hospital',
    subtitle: `${GNM_DURATION} · Intake 40 seats`,
    overview: 'The General Nursing and Midwifery (GNM) programme is a diploma course designed to prepare competent nurses and midwives. It equips students with the knowledge and skills required to provide holistic healthcare in hospital and community settings.',
    highlights: [
      'Comprehensive training in midwifery, maternal, and child health nursing.',
      'Extensive clinical postings in affiliated government medical college hospitals.',
      'Strong focus on primary healthcare, community outreach, and rural health services.',
      'Structured academic curriculum focused on nursing and midwifery practice.'
    ],
    note: GNM_ADMISSION_NOTE,
  },
};

// --- (Keep the rest of your file: ADMISSIONS_PAGE_DATA, ACADEMIC_PROGRAMS, ADMISSION_CRITERIA exactly as they are) ---
// ... 

export type AdmissionDocumentTab =
  | 'brochure'
  | 'seat-matrix'
  | 'provisional-short-list'
  | 'institutional-round';

export interface AdmissionPdf {
  title: string;
  src: string;
  downloadHref: string;
}

export interface AdmissionFeeCategory {
  name: string;
  total: string;
  items: { label: string; amount: string }[];
}

export const ADMISSIONS_PAGE_DATA = {
  title: 'Admissions 2026-2027',
  subtitle: 'Information Brochure, Fees & Criteria',
  bsc: {
    documents: {
      brochure: {
        title: 'Admission Brochure',
        src: BSC_ADMISSION_BROCHURE_PDF,
        downloadHref: BSC_ADMISSION_BROCHURE_PDF,
      },
      'seat-matrix': {
        title: 'Seat Matrix',
        src: BSC_ADMISSION_BROCHURE_PDF,
        downloadHref: BSC_ADMISSION_BROCHURE_PDF,
      },
      'provisional-short-list': {
        title: 'Provisional Short List',
        src: BSC_ADMISSION_BROCHURE_PDF,
        downloadHref: BSC_ADMISSION_BROCHURE_PDF,
      },
      'institutional-round': {
        title: 'Institutional Round',
        src: BSC_ADMISSION_BROCHURE_PDF,
        downloadHref: BSC_ADMISSION_BROCHURE_PDF,
      },
    } satisfies Record<AdmissionDocumentTab, AdmissionPdf>,
    fees: [
      {
        name: 'Open Category (M & F)',
        total: '₹30,400',
        items: [
          { label: 'Tuition', amount: '₹25,400' },
          { label: 'Admission', amount: '₹1,500' },
          { label: 'Library', amount: '₹1,000' },
          { label: 'Gymkhana', amount: '₹2,500' },
        ],
      },
      {
        name: 'EWS, EBC, SEBC (Female)',
        total: '₹5,000',
        items: [
          { label: 'Tuition', amount: '₹0' },
          { label: 'Admission', amount: '₹1,500' },
          { label: 'Library Deposit', amount: '₹2,000' },
          { label: 'Library', amount: '₹1,000' },
          { label: 'Gymkhana', amount: '₹500' },
        ],
      },
      {
        name: 'EWS, EBC (Male)',
        total: '₹17,700',
        items: [
          { label: 'Tuition', amount: '₹12,700' },
          { label: 'Admission', amount: '₹1,500' },
          { label: 'Library Deposit', amount: '₹2,000' },
          { label: 'Library', amount: '₹1,000' },
          { label: 'Gymkhana', amount: '₹500' },
        ],
      },
      {
        name: 'SC, ST, OBC, VJNT, SEBC (M & F)',
        total: '₹5,000',
        items: [
          { label: 'Tuition', amount: '₹0' },
          { label: 'Admission', amount: '₹1,500' },
          { label: 'Library Deposit', amount: '₹2,000' },
          { label: 'Library', amount: '₹1,000' },
          { label: 'Gymkhana', amount: '₹500' },
        ],
      },
    ] satisfies AdmissionFeeCategory[],
    documentsRequired: {
      mandatory: [
        'Online Application form MH-Nursing CET 2026',
        'Admit Card',
        'CET Result',
        'Provisional allotment letter',
        'Aadhaar Card',
        'Nationality Certificate',
        'Age & Domicile Certificate',
        'SSC Marksheet',
        'HSC Marksheet',
        'Medical Fitness Certificate',
      ],
      applicable: [
        'Caste Certificate',
        'Caste Validity',
        'Non Creamy Layer (valid till 31/03/2027)',
        'EWS Certificate',
        'Migration Certificate (for outside MH)',
        'Education Gap Certificate',
        'Defense Certificate',
        'Disability Certificate',
        'Orphan Certificate',
        'Minority Certificate',
      ],
    },
  },
  gnm: {
    note: GNM_ADMISSION_NOTE,
  },
} as const;

export const ACADEMIC_PROGRAMS: AcademicProgram[] = Object.values(COURSE_DETAILS_DATA).map((course) => ({
  slug: course.slug,
  name: course.title,
  duration: course.duration,
  intake: course.intake,
  description: course.overview,
  highlights: course.highlights,
}));

export const ADMISSION_CRITERIA: AdmissionCriteria = {
  title: 'INC Admission Criteria',
  eligibility: ['Passed 10+2 (Higher Secondary) examination...', 'Minimum aggregate: 45%...', 'Minimum aggregate: 40%...', 'Candidates must be medically fit...'],
  ageRequirement: 'Minimum age 17 years on or before 31 December of the year of admission.',
  admissionAuthority: 'Admissions are conducted through the Maharashtra State Common Entrance Test (CET) Cell and government counselling as per prevailing DMER / state policy.',
};

export const ADMISSION_PROGRAMS: CourseDetails[] = [
  COURSE_DETAILS_DATA['bsc-nursing'],
  COURSE_DETAILS_DATA['gnm'],
];