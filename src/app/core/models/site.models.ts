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
  /** Header/footer logo — replace with client artwork in production */
  logoUrl: string;
  logoAlt: string;
  shortName: string;
  approvalsLine: string;
  mission: string;
  vision: string;
  aims: string[];
  contact: {
    address: string;
    landline: string;
    mobile: string;
    whatsapp: string;
    email: string;
    mapEmbedUrl: string;
  };
  social: { label: string; url: string; icon: 'instagram' | 'facebook' | 'youtube' }[];
  quickLinks: { label: string; url: string }[];
  alumniRegistrationUrl: string;
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
