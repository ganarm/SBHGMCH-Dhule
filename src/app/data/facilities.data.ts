import { FacilityDetail } from './data.models';

function numberedImages(directory: string, prefix: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, index) => `/images/${directory}/${prefix}${index + 1}.jpg`,
  );
}

const HOSPITAL_IMAGES = numberedImages('Hospital', 'Hospital-Picture', 8);
const GIRLS_HOSTEL_IMAGES = numberedImages('Hostel/GirlsHostel', 'GirlsHostel-Picture', 3);
const BOYS_HOSTEL_IMAGES = numberedImages('Hostel/BoyssHostel', 'BoyssHostel-Picture', 3);
const PRE_CLINICAL_IMAGES = numberedImages(
  'Laboratories/PreClinicalLab',
  'Pre-ClinicalLab-Picture',
  4,
);
const NUTRITION_IMAGES = Array.from(
  { length: 8 },
  (_, index) => `/images/Laboratories/NutritionLab/NutritionLab${index + 1}.jpeg`,
);
const COMMUNITY_HEALTH_IMAGES = numberedImages(
  'Laboratories/CommunityHealthLab',
  'CHNPicture',
  4,
);
const AV_AIDS_IMAGES = numberedImages('Laboratories/AVAidsLab', 'AVPicture', 3);
const COMPUTER_LAB_IMAGES = numberedImages('Laboratories/ComputerLab', 'ComputerLab', 3);
const LIBRARY_IMAGES = numberedImages('Library', 'Library', 5);

const HOSPITAL_IMG = HOSPITAL_IMAGES[0];
const HOSTEL_IMG = GIRLS_HOSTEL_IMAGES[0];
const LAB_IMG = PRE_CLINICAL_IMAGES[0];
const LIBRARY_IMG = LIBRARY_IMAGES[0];

export const FACILITY_DETAILS: FacilityDetail[] = [
  {
    slug: 'hospital',
    title: 'Hospital',
    summary: 'Clinical training at Shri. Bhausaheb Hire Government Medical College & Sarvopachar Rugnalaya — Hospital Building 1 & 2 with 250 beds and approximately 14,928 sq.m built-up area.',
    imageUrl: HOSPITAL_IMG,
    images: HOSPITAL_IMAGES,
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
    ]
  },
  {
    slug: 'hostel',
    title: 'Hostel',
    summary: 'Separate hostel blocks (B-1 and B-2) for nursing students with capacity of 150 students per building, warden supervision, and study-friendly amenities.',
    imageUrl: HOSTEL_IMG,
    images: [...GIRLS_HOSTEL_IMAGES, ...BOYS_HOSTEL_IMAGES],
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
    ]
  },
  {
    slug: 'laboratories',
    title: 'Laboratories',
    summary: 'State-of-the-art laboratories for simulation, skills practice, and integrated teaching.',
    imageUrl: LAB_IMG,
    labs: [
      {
        id: 'pre-clinical',
        title: 'Pre-Clinical Lab',
        summary: 'Foundational lab for anatomy, physiology, and basic medical sciences.',
        images: PRE_CLINICAL_IMAGES,
        inventory: [
          { name: 'Anatomy Models & Skeletons', qty: 'Available' },
          { name: 'Microscopes', qty: 'Available' },
          { name: 'Charts & Diagrams', qty: 'Available' }
        ]
      },
      {
        id: 'fon',
        title: 'Nursing Foundation Lab',
        summary: 'Equipped with advanced mannequins and medical equipment for hands-on clinical practice.',
        images: [],
        inventory: [
          { name: 'Beds', qty: '04' },
          { name: 'Nursing Multi-Procedures Mannequins', qty: '01' },
          { name: 'Stethoscopes', qty: '05' },
          { name: 'BP Apparatus', qty: '05' },
          { name: 'Glucometer', qty: '02' },
          { name: 'Male/Female Catheterization Simulators', qty: '02' },
          { name: 'Procedure Trays & Sterilizers', qty: '05' }
        ]
      },
      {
        id: 'mch',
        title: 'Maternal & Child Health Lab',
        summary: 'Simulation models for midwifery, labour, and pediatric care.',
        images: [],
        inventory: [
          { name: 'Delivery Instruments Set', qty: '01' },
          { name: 'Fetal Skull and Pelvis', qty: '02' },
          { name: 'Fetus with Placenta', qty: '03' },
          { name: 'Family Planning Kit', qty: '01' },
          { name: 'Cord Care & Vaginal Examination Trays', qty: '02' },
          { name: 'Weighing Scale & Infantometer', qty: '01' }
        ]
      },
      {
        id: 'nutrition',
        title: 'Nutrition Lab',
        summary: 'Centralised granite kitchen and equipment for diet planning and demonstrations.',
        images: NUTRITION_IMAGES,
        inventory: [
          { name: 'Centralised Granite Stone Kitchen', qty: '01' },
          { name: 'Gas Cylinders', qty: '02' },
          { name: 'Pressure Cookers', qty: '05' },
          { name: 'Mixer & Juicer', qty: '02' },
          { name: 'Weighing Machine', qty: '02' },
          { name: 'Aqua Guard with Filter', qty: '01' },
          { name: 'Crokery Set (Plates, Bowls, Spoons)', qty: 'Available' }
        ]
      },
      {
        id: 'chn',
        title: 'Community Health Lab',
        summary: 'Equipment for community outreach, field visits, and public health demonstrations.',
        images: COMMUNITY_HEALTH_IMAGES,
        inventory: [
          { name: 'Community Bags', qty: '20' },
          { name: 'Digital BP Apparatus', qty: '02' },
          { name: 'Sphygmomanometer', qty: '06' },
          { name: 'Stethoscope', qty: '31' },
          { name: 'Haemometer & Pinot Measure', qty: '02' },
          { name: 'Test Tubes & Spirit Lamps', qty: 'Available' }
        ]
      },
      {
        id: 'av-aids',
        title: 'A.V. Aids Lab',
        summary: 'Modern audio-visual equipment for interactive learning and presentations.',
        images: AV_AIDS_IMAGES,
        inventory: [
          { name: 'LCD Projector Multimedia', qty: '02' },
          { name: 'Mobile Screen For Projector', qty: '02' },
          { name: 'LED T.V', qty: '01' },
          { name: 'Amplifier Sound System', qty: '01' },
          { name: 'Epidiascope', qty: '01' },
          { name: 'Laptop', qty: '03' },
          { name: 'DSL Camera', qty: '01' }
        ]
      },
      {
        id: 'computer',
        title: 'Computer Lab',
        summary: 'Facilities for nursing informatics, research, and digital literacy.',
        images: COMPUTER_LAB_IMAGES,
        inventory: [
          { name: 'Acer Desktop Computers', qty: '20+' },
          { name: 'Air Conditioner', qty: '01' },
          { name: 'Instructor Desk', qty: '01' }
        ]
      }
    ]
  },
  {
    slug: 'library',
    title: 'Library',
    summary: 'A comprehensive learning resource centre with over 700+ nursing textbooks, reference volumes, national/international journals, and quiet reading spaces.',
    imageUrl: LIBRARY_IMG,
    images: LIBRARY_IMAGES,
    sections: [
      {
        heading: 'Extensive Book Collection',
        paragraphs: [
          'The library is well-stocked to support undergraduate and diploma programmes with INC-aligned textbooks, reference materials, and previous years question papers. It serves as a quiet sanctuary for study and research.',
          'The collection spans over 700+ titles across all major nursing specialties, including dedicated sections for both English and Marathi literature to cater to diverse student needs.'
        ],
        bullets: [
          'Anatomy, Physiology & Biological Sciences',
          'Community Health & Environmental Sanitation',
          'Medical Surgical Nursing & Psychiatric Nursing',
          'OBGY, Pediatric Nursing & Nutrition',
          'Fundamentals of Nursing, First Aid & Dictionaries',
          'Nursing Research, Computers & English Grammar'
        ]
      },
      {
        heading: 'Facilities & Resources',
        paragraphs: [
          'The library provides a conducive environment for individual and group study with access to essential academic resources.'
        ],
        bullets: [
          'Spacious reading room seating for individual and group study.',
          'Subscription to leading national and international nursing journals.',
          'Digital access and e-resource subscriptions available for research.',
          'Previous years university question papers and reference guides.'
        ]
      }
    ]
  }
];

export const FACILITY_NAV_SLUGS = FACILITY_DETAILS.map((f) => f.slug);