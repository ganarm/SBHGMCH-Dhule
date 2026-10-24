export interface AboutContent {
  aim: string;
  vision: string;
  mission: string;
  objectives: string[];
}

export interface Notice {
  title: string;
  link: string;
  date?: string;
  tag?: string;
  urgent?: boolean;
  description?: string;
  actionLink?: string;
}

export interface LeadershipMessage {
  slug: 'dean' | 'principal';
  title: string;
  name: string;
  designation: string;
  photoUrl?: string;
  message: string[];
  concludingText?: string;
}

export interface HistoryFact {
  label: string;
  value: string;
}

export interface HistoryTimelineEntry {
  year: number;
  title: string;
  description: string;
}

export interface SocietyHistory {
  registeredYear: number;
  registrationAct: string;
  serviceAreas: string[];
  paragraphs: string[];
  keyFacts: HistoryFact[];
  timeline: HistoryTimelineEntry[];
}

export interface FacultyMember {
  name: string;
  initials: string;
  designation: string;
  qualification: string;
  image?: string;
  category: 'teaching' | 'non-teaching' | 'guest';
}

export interface FacultyEntry {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  photoUrl: string;
}

export type CommitteeCategory =
  | 'Academic'
  | 'Student Welfare'
  | 'Clinical'
  | 'Quality Assurance'
  | 'Infrastructure'
  | 'Community Health';

export interface CommitteeEntry {
  category: CommitteeCategory;
  name: string;
  responsibility: string;
}

export interface AcademicProgram {
  slug: string;
  name: string;
  duration: string;
  intake: number;
  description: string;
  highlights: string[];
}

export interface AdmissionCriteria {
  title: string;
  eligibility: string[];
  ageRequirement: string;
  admissionAuthority: string;
}

export interface LabDetail {
  id: string;
  title: string;
  summary: string;
  images: string[];
  inventory: { name: string; qty: string }[];
}

export interface FacilityDetail {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  images?: string[];
  labs?: LabDetail[];
  sections?: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
}

export interface FacilityItem {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export interface DisclosureDocument {
  title: string;
  href: string;
}

export interface DisclosureCategory {
  title: string;
  documents: DisclosureDocument[];
}

export interface StudentCornerItem {
  heading: string;
  detail: string;
  bullets?: string[];
}

export interface StudentCornerTopic {
  slug: string;
  title: string;
  intro: string;
  items: StudentCornerItem[];
}
