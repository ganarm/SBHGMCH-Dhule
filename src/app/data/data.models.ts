export interface AboutContent {
  aim: string;
  vision: string;
  mission: string;
  objectives: string[];
}

export interface LeadershipMessage {
  slug: 'dean' | 'principal';
  title: string;
  name: string;
  designation: string;
  photoUrl?: string;
  message: string[];
}

export interface SocietyHistory {
  registeredYear: number;
  registrationAct: string;
  serviceAreas: string[];
  paragraphs: string[];
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

export interface FacilityDetail {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
}

export interface DisclosureDocument {
  title: string;
  href: string;
}

export interface StudentCornerTopic {
  slug: string;
  title: string;
  intro: string;
  items: { heading: string; detail: string }[];
}
