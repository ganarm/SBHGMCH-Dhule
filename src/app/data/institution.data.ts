export const INSTITUTION_AIM =
  'To prepare competent, compassionate, ethical, and skilled nursing professionals capable of providing comprehensive, safe, and quality nursing care to individuals, families, and communities.';

export const INSTITUTION_VISION =
  'To become a centre of excellence in nursing education, clinical practice, research, and community health services, contributing to the development of a healthier society.';

export const INSTITUTION_MISSION =
  'To provide quality nursing education through academic excellence, competency-based clinical training, evidence-based practice, research, community engagement, and the promotion of professional ethics and lifelong learning.';

export const INSTITUTION_OBJECTIVES = [
  'To provide quality nursing education in accordance with applicable regulatory standards.',
  'To develop clinical competence, critical thinking, and decision-making skills.',
  'To promote safe, ethical, compassionate, and patient-centred nursing care.',
  'To encourage research, innovation, and evidence-based nursing practice.',
  'To develop leadership, communication, teamwork, and management skills.',
  'To promote community health, disease prevention, and public health awareness.',
  'To inculcate professional responsibility, discipline, and lifelong learning.',
  'To prepare nursing graduates to meet the evolving health care needs of society.',
];

export const INSTITUTION_DEAN_MESSAGE = {
  slug: 'dean' as const,
  title: "Dean's Message",
  name: 'Dr. Ajit Pathak',
  designation: 'Dean',
  photoUrl:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  message: [
    'It is my privilege to welcome you to our Government College of Nursing. We aim to nurture nursing graduates who are technically competent, responsible, empathetic, and committed to patient safety and human dignity.',
  ],
};

export const INSTITUTION_PRINCIPAL_MESSAGE = {
  slug: 'principal' as const,
  title: "Principal's Message",
  name: 'Mr. Mahesh C. Dhayal',
  designation: 'Principal',
  photoUrl:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  message: [
    'It gives me immense pleasure to welcome you to our Government College of Nursing Dhule. Nursing is a noble and dynamic profession that combines scientific knowledge, clinical competence, compassion, and a strong commitment to humanity.',
    'Our college is committed to providing quality nursing education in a supportive, disciplined, and student-centred learning environment. Through classroom teaching, laboratory training, clinical experiences, community-based education, research, and extracurricular activities, we strive to prepare our students to become competent, confident, ethical, and compassionate nursing professionals.',
    'We believe that education extends beyond textbooks and examinations. Our students are encouraged to develop critical thinking, communication skills, leadership qualities, professional responsibility, teamwork, and respect for the dignity and rights of every individual.',
    'As future nurses, our students have an important role in promoting health, preventing disease, providing safe and holistic care, and serving individuals, families, and communities. I encourage every student to pursue knowledge with dedication, practise with compassion, uphold professional ethics, and continue learning throughout their career.',
    'I warmly welcome prospective students, parents, faculty members, and all stakeholders to be part of our institution\'s journey towards excellence in nursing education and health care.',
  ],
  concludingText: 'Wishing all our students a successful, meaningful, and fulfilling nursing career.',
};

export const INSTITUTION_HISTORY = {
  registeredYear: 2004,
  registrationAct: 'Societies Registration Act, 1860',
  serviceAreas: ['Dhule', 'Nandurbar', 'Jalgaon', 'Nashik'],
  paragraphs: [
    'The parent society governing nursing education at this campus was registered in 2004 under the Societies Registration Act, 1860, with a mission to expand access to quality health professions education in North Maharashtra.',
    'Government College of Nursing, Dhule functions in association with Shri. Bhausaheb Hire Government Medical College & Sarvopachar Rugnalay, providing undergraduate nursing programmes with clinical training integrated across the medical college hospital network.',
    'The institution serves students and communities across the Dhule, Nandurbar, Jalgaon, and Nashik regions, contributing to the availability of skilled nursing personnel in government and public health settings.',
  ],
  keyFacts: [
    { label: 'Registered', value: '2004' },
    { label: 'Legal Act', value: 'Societies Registration Act, 1860' },
    { label: 'Service Area', value: 'Dhule, Nandurbar, Jalgaon, Nashik' },
  ],
  timeline: [
    {
      year: 1991,
      title: 'Initial land handover',
      description:
        'Initial land handover for the establishment of the nursing institution in the region.',
    },
    {
      year: 1999,
      title: 'Government Resolution',
      description:
        'Government Resolution was issued for the establishment of the college of nursing.',
    },
    {
      year: 2004,
      title: 'Society registered',
      description:
        'The society was registered under the Societies Registration Act, 1860.',
    },
    {
      year: 2009,
      title: 'GR approved ₹9.10 Crores',
      description:
        'Government Resolution approved a project cost of ₹9.10 Crores for the institution.',
    },
    {
      year: 2011,
      title: 'Commencement of revised GNM programme',
      description: 'The revised GNM programme commenced at the institution.',
    },
  ],
};

export const INSTITUTION_DETAILS = {
  aim: INSTITUTION_AIM,
  vision: INSTITUTION_VISION,
  mission: INSTITUTION_MISSION,
  objectives: INSTITUTION_OBJECTIVES,
  deanMessage: INSTITUTION_DEAN_MESSAGE,
  principalMessage: INSTITUTION_PRINCIPAL_MESSAGE,
  history: INSTITUTION_HISTORY,
};
