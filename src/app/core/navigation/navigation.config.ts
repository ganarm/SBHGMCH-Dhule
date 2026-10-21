import { NavConfigItem } from '../models/navigation.models';

const v = true;

function leaf(id: string, label: string, path: string, shortLabel?: string): NavConfigItem {
  return { id, label, path, shortLabel, visible: v, defaultVisible: v };
}

function group(
  id: string,
  label: string,
  children: NavConfigItem[],
  path?: string,
  shortLabel?: string,
): NavConfigItem {
  return { id, label, path, shortLabel, visible: v, defaultVisible: v, children };
}

/** Master navigation tree — toggle visibility in Demo → Navigation panel */
export const NAVIGATION_CONFIG: NavConfigItem[] = [
  leaf('home', 'Home', '/'),
  group(
    'about',
    'About Us',
    [
      leaf('about-vm', 'Vision & Mission', '/about/vision-mission'),
      leaf('about-dean', "Dean's Message", '/about/message/dean'),
      leaf('about-principal', "Principal's Message", '/about/message/principal'),
      leaf('about-history', 'History', '/about/history'),
    ],
    undefined,
    'About',
  ),
  leaf('faculty', 'Faculty', '/faculty'),
  group(
    'academics',
    'Academics',
    [
      leaf('acad-bsc', 'B.Sc. Nursing', '/academics/bsc-nursing'),
      leaf('acad-gnm', 'GNM', '/academics/gnm'),
      leaf('acad-msc', 'M.Sc. Nursing', '/academics/msc-nursing'),
      
      // ONLY ONE ADMISSION LINK REMAINS HERE
      leaf('acad-adm', 'Admission', '/admissions'),
      
    ],
    '/academics',
  ),
  group('facilities', 'Facilities', [
    leaf('fac-hospital', 'Hospital', '/facilities/hospital'),
    leaf('fac-hostel', 'Hostel', '/facilities/hostel'),
    leaf('fac-labs', 'Laboratories', '/facilities/laboratories'),
    leaf('fac-library', 'Library', '/facilities/library'),
  ]),
  group('student', 'Student Corner', [
    leaf('stu-extra', 'Extra-Curricular', '/student-corner/extra-curricular'),
    leaf('stu-days', 'Important Days', '/student-corner/important-days'),
    leaf('stu-grievance', 'Grievance', '/student-corner/grievance'),
  ]),
  leaf('committees', 'Committees', '/committees'),
  leaf('disclosures', 'Mandatory Disclosures', '/mandatory-disclosures', 'Disclosures'),
  leaf('contact', 'Contact Us', '/contact', 'CONTACT US'),
];