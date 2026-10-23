export type NoticeType = 'important' | 'admission' | 'general';

export interface NavItem {
  label: string;
  /** Compact label for the desktop menu bar; dropdowns/mobile use `label` */
  barLabel?: string;
  path?: string;
  children?: NavItem[];
}

export interface SiteSettings {
  societyName: string;
  instituteName: string;
  headerTagline: string;
  approvalsLine: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    principalEmail: string;
  };
  quickLinks: { label: string; url: string }[];
}

export interface HeroSlide {
  imageUrl: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export interface Notice {
  id: string;
  title: string;
  summary: string;
  type: NoticeType;
  publishedAt: string;
  pinned?: boolean;
}

export interface AdmissionProgram {
  slug: string;
  name: string;
  status: 'open' | 'closed' | 'upcoming';
  academicYear: string;
  intake: number;
  duration: string;
  applicationDeadline?: string;
  brochureLabel: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  photoUrl: string;
}

export interface CourseDetail {
  slug: string;
  name: string;
  duration: string;
  intake: number;
  eligibility: string[];
  recognizedBy: { body: string; reference: string; date: string }[];
  affiliatedTo: { body: string; reference: string; date: string }[];
}

export interface ContentPage {
  slug: string;
  title: string;
  breadcrumb: string[];
  intro?: string;
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
  quote?: { text: string; translation?: string };
}

export interface FacilityItem {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
}
