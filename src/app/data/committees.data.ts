import { CommitteeCategory, CommitteeEntry } from './data.models';

export const COMMITTEE_CATEGORIES: CommitteeCategory[] = [
  'Academic',
  'Student Welfare',
  'Clinical',
  'Quality Assurance',
  'Infrastructure',
  'Community Health',
];

export const COMMITTEES: CommitteeEntry[] = [
  {
    category: 'Academic',
    name: 'Academic Council',
    responsibility: 'Overall academic planning, policy approval, and periodic review of programmes.',
  },
  {
    category: 'Academic',
    name: 'Curriculum Committee',
    responsibility: 'Design, revision, and alignment of curriculum with INC and university norms.',
  },
  {
    category: 'Academic',
    name: 'Board of Studies',
    responsibility: 'Course content, syllabi, and credit structure for nursing programmes.',
  },
  {
    category: 'Academic',
    name: 'Examination Committee',
    responsibility: 'Conduct of internal assessments, practical exams, and result processing.',
  },
  {
    category: 'Academic',
    name: 'Time Table Committee',
    responsibility: 'Preparation and publication of class, lab, and clinical posting schedules.',
  },
  {
    category: 'Academic',
    name: 'Student Assessment Committee',
    responsibility: 'Monitoring continuous evaluation, remedial teaching, and academic progress.',
  },
  {
    category: 'Academic',
    name: 'Faculty Development Committee',
    responsibility: 'Workshops, CNE programmes, and faculty upskilling initiatives.',
  },
  {
    category: 'Academic',
    name: 'Research & Publication Committee',
    responsibility: 'Promotion of student and faculty research activities and publications.',
  },
  {
    category: 'Academic',
    name: 'Library Advisory Committee',
    responsibility: 'Library collection development, journal subscriptions, and reader services.',
  },
  {
    category: 'Student Welfare',
    name: 'Anti-Ragging Committee',
    responsibility: 'Prevention of ragging, awareness programmes, and compliance with UGC regulations.',
  },
  {
    category: 'Student Welfare',
    name: 'Anti-Ragging Squad',
    responsibility: 'Surprise inspections and immediate action on ragging complaints.',
  },
  {
    category: 'Student Welfare',
    name: 'Internal Complaint Committee',
    responsibility: 'Redressal of complaints related to harassment as per statutory guidelines.',
  },
  {
    category: 'Student Welfare',
    name: 'Discipline Committee',
    responsibility: 'Maintenance of conduct, attendance norms, and disciplinary procedures.',
  },
  {
    category: 'Student Welfare',
    name: 'Guidance and Counselling Committee',
    responsibility: 'Personal, academic, and emotional counselling support for students.',
  },
  {
    category: 'Student Welfare',
    name: 'Internal Grievance and Redressal Committee',
    responsibility: 'Time-bound resolution of student grievances related to academics and facilities.',
  },
  {
    category: 'Student Welfare',
    name: 'Student Welfare Committee',
    responsibility: 'Hostel, mess, transport, and general welfare matters affecting students.',
  },
  {
    category: 'Student Welfare',
    name: 'Hostel Management Committee',
    responsibility: 'Hostel rules, warden coordination, and residential discipline.',
  },
  {
    category: 'Student Welfare',
    name: 'Career Guidance Cell',
    responsibility: 'Orientation on licensing exams, higher studies, and employment pathways.',
  },
  {
    category: 'Clinical',
    name: 'Clinical Training Committee',
    responsibility: 'Planning and monitoring of hospital and community clinical postings.',
  },
  {
    category: 'Clinical',
    name: 'Hospital Liaison Committee',
    responsibility: 'Coordination with medical college hospital units for student placements.',
  },
  {
    category: 'Clinical',
    name: 'Clinical Evaluation Committee',
    responsibility: 'Assessment of clinical performance, skills checklists, and OSCE planning.',
  },
  {
    category: 'Clinical',
    name: 'Code Blue Committee',
    responsibility: 'Emergency response training and mock drills for resuscitation scenarios.',
  },
  {
    category: 'Clinical',
    name: 'Infection Control Committee',
    responsibility: 'Training on standard precautions, isolation protocols, and biomedical waste handling.',
  },
  {
    category: 'Clinical',
    name: 'Medication Safety Committee',
    responsibility: 'Safe medication administration practices and error prevention in clinical labs.',
  },
  {
    category: 'Clinical',
    name: 'Nursing Audit Committee',
    responsibility: 'Periodic audit of clinical records, care plans, and procedure compliance.',
  },
  {
    category: 'Clinical',
    name: 'Clinical Rotation Planning Committee',
    responsibility: 'Department-wise rotation charts and preceptor allocation.',
  },
  {
    category: 'Clinical',
    name: 'Preceptorship Committee',
    responsibility: 'Selection and orientation of ward preceptors for student supervision.',
  },
  {
    category: 'Quality Assurance',
    name: 'Internal Quality Assurance Cell (IQAC)',
    responsibility: 'Institutional quality enhancement, AQAR preparation, and best practices.',
  },
  {
    category: 'Quality Assurance',
    name: 'NAAC Steering Committee',
    responsibility: 'Coordination of accreditation documentation and criterion-wise compliance.',
  },
  {
    category: 'Quality Assurance',
    name: 'Institutional Research & Ethics Committee',
    responsibility: 'Ethical review of research proposals involving human participants.',
  },
  {
    category: 'Quality Assurance',
    name: 'Patient Safety Committee',
    responsibility: 'Promotion of safe care practices and incident reporting awareness.',
  },
  {
    category: 'Quality Assurance',
    name: 'Biomedical Waste Management Committee',
    responsibility: 'Compliance with MPCB norms for segregation and disposal of biomedical waste.',
  },
  {
    category: 'Quality Assurance',
    name: 'Documentation & Record Committee',
    responsibility: 'Standardisation of registers, log books, and clinical record keeping.',
  },
  {
    category: 'Quality Assurance',
    name: 'Continuous Quality Improvement Committee',
    responsibility: 'Analysis of feedback and implementation of corrective actions.',
  },
  {
    category: 'Quality Assurance',
    name: 'Accreditation Compliance Committee',
    responsibility: 'Monitoring INC and council compliance indicators and inspections.',
  },
  {
    category: 'Quality Assurance',
    name: 'Feedback Analysis Committee',
    responsibility: 'Collection and analysis of student, faculty, and alumni feedback.',
  },
  {
    category: 'Infrastructure',
    name: 'Infrastructure Development Committee',
    responsibility: 'Planning upgrades to classrooms, labs, and clinical skill areas.',
  },
  {
    category: 'Infrastructure',
    name: 'Equipment Purchase Committee',
    responsibility: 'Procurement of lab manikins, instruments, and teaching aids.',
  },
  {
    category: 'Infrastructure',
    name: 'Maintenance & Housekeeping Committee',
    responsibility: 'Upkeep of campus buildings, sanitation, and periodic repairs.',
  },
  {
    category: 'Infrastructure',
    name: 'ICT Committee',
    responsibility: 'Computer lab, networking, and digital learning resources.',
  },
  {
    category: 'Infrastructure',
    name: 'Safety & Security Committee',
    responsibility: 'Fire safety, CCTV, and campus security protocols.',
  },
  {
    category: 'Infrastructure',
    name: 'Transport Committee',
    responsibility: 'Student transport arrangements for community postings where applicable.',
  },
  {
    category: 'Infrastructure',
    name: 'Audit Committee',
    responsibility: 'Internal audit of stores, accounts, and asset registers.',
  },
  {
    category: 'Infrastructure',
    name: 'Purchase Committee',
    responsibility: 'Tendering and purchase of consumables and office requirements.',
  },
  {
    category: 'Infrastructure',
    name: 'Estate Management Committee',
    responsibility: 'Land, building, and hostel estate records and handover documentation.',
  },
  {
    category: 'Community Health',
    name: 'Community Health Nursing Committee',
    responsibility: 'Urban and rural field practice, home visits, and school health programmes.',
  },
  {
    category: 'Community Health',
    name: 'Extension Activities Committee',
    responsibility: 'Health camps, rallies, and outreach beyond routine clinical postings.',
  },
  {
    category: 'Community Health',
    name: 'NSS Advisory Committee',
    responsibility: 'National Service Scheme activities and annual special camp planning.',
  },
  {
    category: 'Community Health',
    name: 'SNA Advisory Committee',
    responsibility: 'Student Nurses Association programmes and professional activity calendar.',
  },
  {
    category: 'Community Health',
    name: 'Health Education Committee',
    responsibility: 'Awareness sessions on nutrition, hygiene, and disease prevention.',
  },
  {
    category: 'Community Health',
    name: 'Rural Health Outreach Committee',
    responsibility: 'Coordination with primary health centres in adopted villages.',
  },
  {
    category: 'Community Health',
    name: 'School Health Programme Committee',
    responsibility: 'Screening and health talks in schools under community health nursing.',
  },
  {
    category: 'Community Health',
    name: 'Disaster Management Committee',
    responsibility: 'Training students in first aid and disaster preparedness drills.',
  },
];
