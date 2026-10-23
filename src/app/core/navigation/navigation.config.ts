import { NavConfigItem } from '../models/navigation.models';

const v = true;

function leaf(id: string, label: string, path: string): NavConfigItem {
  return { id, label, path, visible: v, defaultVisible: v };
}

function group(id: string, label: string, children: NavConfigItem[]): NavConfigItem {
  return { id, label, visible: v, defaultVisible: v, children };
}

/** Master navigation tree — toggle visibility in Demo → Navigation panel */
export const NAVIGATION_CONFIG: NavConfigItem[] = [
  leaf('home', 'Home', '/'),
  group('about', 'About Us', [
    leaf('about-vision', 'Vision', '/about/vision'),
    leaf('about-dean', 'Dean', '/about/dean'),
    leaf('about-principal', 'Principal', '/about/principal'),
    leaf('about-history', 'History', '/about/history'),
  ]),
  group('academics', 'Academics', [
    leaf('acad-bsc', 'B.Sc. Nursing', '/academics/bsc'),
    leaf('acad-gnm', 'GNM', '/academics/gnm'),
    leaf('acad-admission', 'Admission Process', '/academics/admission'),
    leaf('acad-holidays', 'List of Holidays', '/academics/holidays'),
    leaf('acad-calendar', 'Academic Calendar', '/academics/calendar'),
    leaf('acad-syllabus', 'Syllabus', '/academics/syllabus'),
  ]),
  group('faculty', 'Faculty', [
    leaf('faculty-teaching', 'Teaching', '/faculty/teaching'),
    leaf('faculty-non-teaching', 'Non-Teaching', '/faculty/non-teaching'),
    leaf('faculty-guest', 'Guest', '/faculty/guest'),
  ]),
  group('facilities', 'Facilities', [
    leaf('fac-hospital', 'Hospital', '/facilities/hospital'),
    leaf('fac-hostel', 'Hostel', '/facilities/hostel'),
    leaf('fac-labs', 'Labs', '/facilities/laboratories'),
    leaf('fac-library', 'Library', '/facilities/library'),
  ]),
  group('student-corner', 'Student Corner', [
    leaf('student-extra', 'Extra-Curricular', '/student-corner/extra-curricular'),
    leaf('student-days', 'Important Days', '/student-corner/important-days'),
    leaf('student-hostels', 'Hostels', '/student-corner/hostels'),
    leaf('student-clinical', 'Clinical', '/student-corner/clinical'),
    leaf('student-grievance', 'Grievance', '/student-corner/grievance'),
  ]),
  leaf('committees', 'Committees', '/committees'),
  leaf('iqac', 'IQAC', '/iqac'),
  leaf('muhs-mandate', 'MUHS Mandate', '/muhs-mandate'),
  leaf('alumni', 'Alumni', '/alumni'),
  leaf('gallery', 'Gallery', '/gallery'),
  leaf('events', 'Events', '/events'),
  leaf('disclosures', 'Disclosures', '/disclosures'),
  leaf('contact', 'Contact Us', '/contact'),
];
