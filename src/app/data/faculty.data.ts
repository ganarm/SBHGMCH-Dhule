import { FacultyEntry, FacultyMember } from './data.models';

export const FACULTY_DATA: FacultyMember[] = [
  {
    name: 'Mr. Mahesh C. Dhayal',
    initials: 'MD',
    designation: 'Principal',
    qualification: 'M.Sc. Nursing (Child Health Nursing)',
    image: '/images/Mahesh.jpg',
  },
  {
    name: 'Mr. Shashikant P. Sonawane',
    initials: 'SS',
    designation: 'Vice Principal',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/Shashikant.jpg',
  },
  {
    name: 'Mr. Amol D. Patil',
    initials: 'AP',
    designation: 'Associate Professor',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/Amol.jpg',
  },
  {
    name: 'Mr. Ganesh R. Shete',
    initials: 'GS',
    designation: 'Assistant Professor',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '/images/Ganesh.jpg',
  },
  {
    name: 'Mrs. Ashwini R. Rajput',
    initials: 'AR',
    designation: 'Assistant Professor',
    qualification: 'M.Sc. Nursing (Obstetrical & Gynecological Nursing)',
    image: '',
  },
  {
    name: 'Smt. Anita Sabale',
    initials: 'AS',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Mental Health Nursing)',
    image: '',
  },
  {
    name: 'Smt. Shital Kumbhar',
    initials: 'SK',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Obstetrical & Gynecological Nursing)',
    image: '',
  },
  {
    name: 'Mr. Ashish Wankhede',
    initials: 'AW',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Community Health Nursing)',
    image: '',
  },
  {
    name: 'Mr. Pritam K. Thingale',
    initials: 'PT',
    designation: 'Tutor',
    qualification: 'M.Sc. Nursing (Medical Surgical Nursing)',
    image: '',
  },
  {
    name: 'Mrs. Sandhya Chaudhari',
    initials: 'SC',
    designation: 'Administrative Officer',
    qualification: 'Administration',
    image: '',
  },
  {
    name: 'Mrs. Devyani Sonawane',
    initials: 'DS',
    designation: 'Administrative Staff',
    qualification: 'Administration',
    image: '',
  },
];

export const FACULTY_MEMBERS: FacultyEntry[] = FACULTY_DATA.map((member, index) => ({
  id: `faculty-${index + 1}`,
  name: member.name,
  designation: member.designation,
  qualification: member.qualification,
  photoUrl: member.image ?? '',
}));
