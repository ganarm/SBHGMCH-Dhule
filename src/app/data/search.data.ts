export interface SearchItem {
  title: string;
  keywords: string;
  route: string;
}

export const SEARCH_KEYWORDS_BY_SECTION: Record<string, Record<string, string>> = {
  'About Us': {
    '/about/vision': 'mission aim objectives goals',
    '/about/dean': 'message leadership dean',
    '/about/principal': 'message leadership principal',
    '/about/history': 'institution society timeline',
  },
  Academics: {
    '/academics/bsc': 'bsc nursing undergraduate course',
    '/academics/gnm': 'general nursing midwifery diploma',
    '/academics/admission': 'admissions eligibility cet application fees',
    '/academics/holidays': 'holiday vacation leave',
    '/academics/calendar': 'timetable schedule academic year',
    '/academics/syllabus': 'curriculum course subjects',
  },
  Faculty: {
    '/faculty/teaching': 'teachers professors tutors educators',
    '/faculty/non-teaching': 'administrative staff office',
    '/faculty/guest': 'visiting lecturer',
  },
  Facilities: {
    '/facilities/hospital': 'beds icu opd wards clinical',
    '/facilities/hostel': 'rooms accommodation residence',
    '/facilities/laboratories': 'labs nursing foundation nutrition mch',
    '/facilities/library': 'books journals reading',
  },
  'Student Corner': {
    '/student-corner/extra-curricular': 'activities sports cultural',
    '/student-corner/important-days': 'celebrations observances',
    '/student-corner/hostels': 'accommodation residence',
    '/student-corner/clinical': 'clinical postings rural health',
    '/student-corner/grievance': 'complaint support redressal',
  },
  Committees: {
    '/committees': 'anti-ragging discipline complaint welfare',
  },
  'MUHS Mandate': {
    '/muhs-mandate': 'university mandate documents',
  },
  Disclosures: {
    '/disclosures': 'mandatory statutory approvals mpcb environmental pdf',
  },
};

export function getSearchKeywords(section: string, route: string): string {
  return SEARCH_KEYWORDS_BY_SECTION[section]?.[route] ?? '';
}
