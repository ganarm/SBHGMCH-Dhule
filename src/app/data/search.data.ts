export interface SearchItem {
  title: string;
  keywords: string;
  route: string;
}

export const SEARCH_DATA: SearchItem[] = [
  { title: 'Vision & Mission', keywords: 'vision, mission, aim, objectives, goals', route: '/about/vision' },
  { title: "Dean's Message", keywords: 'dean, ajit pathak, message, leadership', route: '/about/messages' },
  { title: "Principal's Message", keywords: 'principal, mahesh dhayal, message', route: '/about/messages' },
  { title: 'Admission Criteria', keywords: 'admission, eligibility, cet, 45%, age, 10+2', route: '/academics/admission' },
  { title: 'Faculty Directory', keywords: 'faculty, teachers, staff, professors, hod', route: '/faculty' },
  { title: 'Anti-Ragging Committee', keywords: 'ragging, discipline, complaint, welfare', route: '/committees' },
  { title: 'Hospital Facilities', keywords: 'hospital, beds, icu, opd, wards', route: '/facilities/hospital' },
  { title: 'Hostel Facilities', keywords: 'hostel, rooms, b1, b2, accommodation', route: '/facilities/hostel' },
  { title: 'Laboratories', keywords: 'labs, nursing foundation, nutrition, mch', route: '/facilities/labs' },
  { title: 'Mandatory Disclosures', keywords: 'mpcb, environmental clearance, land, pdf, legal', route: '/disclosures' },
];
