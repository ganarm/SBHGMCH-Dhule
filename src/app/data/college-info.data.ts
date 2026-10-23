import { SiteSettings } from '../core/models/site.models';

export const SITE_SETTINGS: SiteSettings = {
  societyName: 'SHRI. BHAUSAHEB HIRE GOVERNMENT MEDICAL COLLEGE & SARVOPACHAR RUGNALAYA',
  instituteName: 'Government College of Nursing, Dhule',
  headerTagline: 'Dedicated to excellence in nursing education and community service.',
  approvalsLine:
    'Approved by Maharashtra University of Health sciences Nashik, Nursing Council (MNC), Mumbai & Indian Nursing Council (INC), New Delhi.',
  contact: {
    address: 'SBHGMC & SR, near Surat Bypass road, Chakkarbardi, Dhule - 424311',
    phone: '02562-297050',
    email: 'gcondhule@gmail.com',
    principalEmail: 'principalgcondhule@gmail.com',
  },
  quickLinks: [
    { label: 'Maharashtra Nursing Council', url: 'https://www.maharashtranursingcouncil.org' },
    { label: 'Indian Nursing Council', url: 'https://www.indiannursingcouncil.org' },
    { label: 'DMER, Mumbai', url: 'https://www.dmer.org' },
    { label: 'MahaDBT', url: 'https://mahadbt.maharashtra.gov.in' },
    { label: 'National Scholarship Portal', url: 'https://scholarships.gov.in' },
  ],
};
