import { AboutContent, LeadershipMessage, SocietyHistory } from './data.models';
import {
  INSTITUTION_AIM,
  INSTITUTION_HISTORY,
  INSTITUTION_MISSION,
  INSTITUTION_OBJECTIVES,
  INSTITUTION_PRINCIPAL_MESSAGE,
  INSTITUTION_VISION,
} from './about-institution.data';

export const DEAN_MESSAGE = {
  name: 'Dr. Ajit Pathak',
  title: 'Dean',
  fullText: [
    'It is my privilege to welcome you to our Government College of Nursing, an institution dedicated to excellence in nursing education, clinical practice, research, and community service.',
    'Nursing education plays a vital role in preparing health professionals who can respond effectively to the changing health needs of society. Our academic approach is therefore designed to integrate sound theoretical knowledge with clinical competence, evidence-based practice, professional ethics, and compassionate patient care.',
    'We are committed to creating an academic environment that encourages curiosity, critical thinking, innovation, research, collaboration, and lifelong learning. Our students are provided opportunities to learn through classrooms, skills laboratories, clinical settings, community health experiences, seminars, workshops, and academic activities.',
    'We aim to nurture nursing graduates who are not only technically competent but also responsible, empathetic, culturally sensitive, and committed to patient safety and human dignity. We encourage our students to maintain high professional standards and to contribute positively to the health and well-being of individuals, families, and communities.',
    'I invite our students to make full use of the learning opportunities available to them, develop their professional abilities, and uphold the values of integrity, compassion, service, and excellence.',
  ],
  concludingText:
    'May every student who enters our institution grow into a knowledgeable, skilled, ethical, and compassionate nursing professional who contributes meaningfully to society.',
};

export const PRINCIPAL_MESSAGE = {
  name: 'Mr. Mahesh C. Dhayal',
  title: 'Principal',
  fullText: [
    'It gives me immense pleasure to welcome you to our Government College of Nursing Dhule. Nursing is a noble and dynamic profession that combines scientific knowledge, clinical competence, compassion, and a strong commitment to humanity.',
    'Our college is committed to providing quality nursing education in a supportive, disciplined, and student-centred learning environment. Through classroom teaching, laboratory training, clinical experiences, community-based education, research, and extracurricular activities, we strive to prepare our students to become competent, confident, ethical, and compassionate nursing professionals.',
    'We believe that education extends beyond textbooks and examinations. Our students are encouraged to develop critical thinking, communication skills, leadership qualities, professional responsibility, teamwork, and respect for the dignity and rights of every individual.',
    'As future nurses, our students have an important role in promoting health, preventing disease, providing safe and holistic care, and serving individuals, families, and communities. I encourage every student to pursue knowledge with dedication, practise with compassion, uphold professional ethics, and continue learning throughout their career.',
    'I warmly welcome prospective students, parents, faculty members, and all stakeholders to be part of our institution\'s journey towards excellence in nursing education and health care.',
  ],
  concludingText: 'Wishing all our students a successful, meaningful, and fulfilling nursing career.',
};

export const ABOUT_CONTENT: AboutContent = {
  aim: INSTITUTION_AIM,
  vision: INSTITUTION_VISION,
  mission: INSTITUTION_MISSION,
  objectives: INSTITUTION_OBJECTIVES,
};

export const LEADERSHIP_MESSAGES: LeadershipMessage[] = [
  {
    slug: 'dean',
    title: "Dean's Message",
    name: DEAN_MESSAGE.name,
    designation: DEAN_MESSAGE.title,
    photoUrl: 'images/faculty/teaching/Ajit.jpeg',
    message: DEAN_MESSAGE.fullText,
    concludingText: DEAN_MESSAGE.concludingText,
  },
  {
    slug: 'principal',
    title: "Principal's Message",
    name: PRINCIPAL_MESSAGE.name,
    designation: PRINCIPAL_MESSAGE.title,
    photoUrl: 'images/faculty/teaching/Mahesh.jpeg',
    message: PRINCIPAL_MESSAGE.fullText,
    concludingText: PRINCIPAL_MESSAGE.concludingText,
  },
];

export const SOCIETY_HISTORY: SocietyHistory = INSTITUTION_HISTORY;
