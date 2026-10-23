import { FacultyEntry, FacultyMember } from './data.models';

const PRINCIPAL: FacultyMember = {
  name: 'Mr. Mahesh C. Dhayal',
  initials: 'MD',
  designation: 'Principal',
  qualification: 'M.Sc. Nursing (Child Health Nursing)',
  image: '/images/faculty/teaching/Mahesh.jpeg',
  category: 'teaching',
};

export const FACULTY_DATA: FacultyMember[] = [
  PRINCIPAL,
  {
    name: 'Mr. Shashikant P. Sonawane',
    initials: 'SS',
    designation: 'Vice Principal',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/faculty/teaching/Shashikant.jpeg',
    category: 'teaching',
  },
  {
    name: 'Mr. Amol D. Patil',
    initials: 'AP',
    designation: 'Associate Professor',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/faculty/teaching/Amol.jpeg',
    category: 'teaching',
  },
  {
    name: 'Mr. Ganesh R. Shete',
    initials: 'GS',
    designation: 'Assistant Professor',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/faculty/teaching/Ganesh.jpeg',
    category: 'teaching',
  },
  {
    name: 'Mrs. Ashwini R. Rajput',
    initials: 'AR',
    designation: 'Assistant Professor',
    qualification: 'M.Sc. Nursing (Obstetrical & Gynecological Nursing)',
    image: '/images/faculty/teaching/Ashwini.jpeg',
    category: 'teaching',
  },
  {
    name: 'Smt. Anita Sabale',
    initials: 'AS',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Mental Health Nursing)',
    image: '/images/faculty/teaching/Anita.jpeg',
    category: 'teaching',
  },
  {
    name: 'Smt. Shital Kumbhar',
    initials: 'SK',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Obstetrical & Gynecological Nursing)',
    image: '/images/faculty/teaching/Shital.jpeg',
    category: 'teaching',
  },
  {
    name: 'Mr. Ashish Wankhede',
    initials: 'AW',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Community Health Nursing)',
    image: '/images/faculty/teaching/Ashish.jpeg',
    category: 'teaching',
  },
  {
    name: 'Mr. Pritam K. Thingale',
    initials: 'PT',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/faculty/teaching/Pritam.jpeg',
    category: 'teaching',
  },
  {
    name: 'Mrs. Sandhya Chaudhari',
    initials: 'SC',
    designation: 'Administrative Officer',
    qualification: 'Administration',
    image: '',
    category: 'non-teaching',
  },
  {
    name: 'Mrs. Devyani Sonawane',
    initials: 'DS',
    designation: 'Administrative Staff',
    qualification: 'Administration',
    image: '/images/faculty/non-teaching/Devyani.jpeg',
    category: 'non-teaching',
  },
];

export const FACULTY_MEMBERS: FacultyEntry[] = FACULTY_DATA.map((member, index) => ({
  id: `faculty-${index + 1}`,
  name: member.name,
  designation: member.designation,
  qualification: member.qualification,
  photoUrl: member.image ?? '',
}));
