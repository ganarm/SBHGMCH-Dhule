import { FacilityDetail } from './data.models';

const HOSPITAL_IMG = './images/Hospital.jpg';
const HOSTEL_IMG = "./images/Girl's Hostel.jpg";
const LAB_IMG = './images/Pre-ClinicalLab-Picture1.jpg';
const LIBRARY_IMG = './images/Library1.jpg';

export const FACILITY_DETAILS: FacilityDetail[] = [
  {
    slug: 'hospital',
    title: 'Hospital',
    summary: 'Clinical training at Shri. Bhausaheb Hire Government Medical College & Sarvopachar Rugnalaya — Hospital Building 1 & 2 with 250 beds and approximately 14,928 sq.m built-up area.',
    imageUrl: HOSPITAL_IMG,
    images: [
      './images/Hospital-Picture1.jpg', './images/Hospital-Picture2.jpg',
      './images/Hospital-Picture3.jpg', './images/Hospital-Picture4.jpg',
      './images/Hospital-Picture5.jpg', './images/Hospital-Picture6.jpg',
      './images/Hospital-Picture7.jpg', './images/Hospital-Picture8.jpg',
      './images/Hospital-Picture9.jpg'
    ],
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
    images: [
      './images/GirlsHostel-Picture1.jpg', './images/GirlsHostel-Picture2.jpg',
      './images/GirlsHostel-Picture3.jpg', './images/GirlsHostel-Picture4.jpg',
      './images/BoyssHostel-Picture1.jpg', './images/BoyssHostel-Picture2.jpg',
      './images/BoyssHostel-Picture3.jpg'
    ],
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
        images: [
          './images/Pre-ClinicalLab-Picture1.jpg',
          './images/Pre-ClinicalLab-Picture2.jpg',
          './images/Pre-ClinicalLab-Picture3.jpg',
          './images/Pre-ClinicalLab-Picture4.jpg'
        ],
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
        images: [
          './images/FONPicture1.jpg',
          './images/FONPicture2.jpg',
          './images/FONPicture3.jpg'
        ],
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
        images: [
          './images/MCHPicture1.jpg',
          './images/MCHPicture2.jpg',
          './images/MCHPicture3.jpg',
          './images/MCHPicture4.jpg'
        ],
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
        images: [
          './images/NutritionLabPicture1.jpg',
          './images/NutritionLabPicture2.jpg',
          './images/NutritionLabPicture3.jpg',
          './images/NutritionLabPicture4.jpg',
          './images/NutritionLabPicture5.jpg'
        ],
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
        images: [
          './images/CHNPicture1.jpg',
          './images/CHNPicture2.jpg',
          './images/CHNPicture3.jpg',
          './images/CHNPicture4.jpg'
        ],
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
        images: [
          './images/AVPicture1.jpg',
          './images/AVPicture2.jpg',
          './images/AVPicture3.jpg'
        ],
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
        images: [
          './images/ComputerLab1.jpg',
          './images/ComputerLab2.jpg',
          './images/ComputerLab3.jpg'
        ],
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
    images: [
      './images/Library1.jpg',
      './images/Library2.jpg',
      './images/Library3.jpg',
      './images/Library4.jpg',
      './images/Library5.jpg'
    ],
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