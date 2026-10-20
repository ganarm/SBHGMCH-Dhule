import { FacilityDetail } from './data.models';

const HOSPITAL_IMG = '/images/Hospital.jpg';
const HOSTEL_IMG = "/images/Girl's Hostel.jpg";
const LAB_IMG = '/images/Pre-Clinical Lab.jpg';
const LIBRARY_IMG = '/images/library-interior.jpg';

export const FACILITY_DETAILS: FacilityDetail[] = [
  {
    slug: 'hospital',
    title: 'Hospital',
    summary:
      'Clinical training at Shri. Bhausaheb Hire Government Medical College & Sarvopachar Rugnalay — Hospital Building 1 & 2 with 250 beds and approximately 14,928 sq.m built-up area.',
    imageUrl: HOSPITAL_IMG,
    sections: [
      {
        heading: 'Hospital Building 1 & 2',
        paragraphs: [
          'The parent teaching hospital provides supervised clinical exposure across medical, surgical, obstetric, paediatric, and critical care units. Nursing students undertake bedside practice, case presentations, and procedure demonstrations under faculty and ward preceptors.',
        ],
        bullets: [
          'Total bed strength: 250 beds across Hospital Building 1 and Building 2',
          'Approximate built-up area: 14,928 sq.m',
          'Multi-specialty OPD and inpatient services for integrated clinical learning',
        ],
      },
      {
        heading: 'Campus layout & OPD',
        paragraphs: [
          'The nursing college block is located within the medical college campus. The Out Patient Department (OPD) block is approximately 261.80 metres from the nursing college building, allowing structured access for community-facing clinical orientation and supervised visits.',
        ],
      },
    ],
  },
  {
    slug: 'hostel',
    title: 'Hostel',
    summary:
      'Separate hostel blocks (B-1 and B-2) for nursing students with capacity of 150 students per building, warden supervision, and study-friendly amenities.',
    imageUrl: HOSTEL_IMG,
    sections: [
      {
        heading: 'Hostel Block B-1 & B-2',
        bullets: [
          'Capacity: 150 students per hostel building',
          'Secure accommodation with warden and staff supervision',
          'Mess facility, common study areas, and visitor guidelines as per institute rules',
          'Discipline and anti-ragging policies enforced in residential areas',
        ],
      },
    ],
  },
  {
    slug: 'laboratories',
    title: 'Laboratories',
    summary:
      'Nursing foundation, nutrition, community health, and computer labs supporting simulation, skills practice, and integrated teaching.',
    imageUrl: LAB_IMG,
    sections: [
      {
        paragraphs: [
          'Laboratories are equipped for demonstration of nursing procedures, manikin-based practice, and small-group teaching aligned with INC practical competencies.',
        ],
        bullets: [
          'Nursing foundation and clinical skills laboratory',
          'Nutrition and community health nursing lab resources',
          'Computer lab for health informatics and academic work',
        ],
      },
    ],
  },
  {
    slug: 'library',
    title: 'Library',
    summary:
      'Learning resource centre with nursing textbooks, reference volumes, journals, and quiet reading spaces for students and faculty.',
    imageUrl: LIBRARY_IMG,
    sections: [
      {
        paragraphs: [
          'The library supports undergraduate programmes with INC-aligned textbooks, previous question papers, and digital access where available.',
        ],
        bullets: [
          'Reading room seating for individual and group study',
          'Textbooks and reference collection in nursing and allied subjects',
          'Journal and e-resource access as per institute subscription',
        ],
      },
    ],
  },
];

export const FACILITY_NAV_SLUGS = FACILITY_DETAILS.map((f) => f.slug);
