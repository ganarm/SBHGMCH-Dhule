import { DisclosureCategory } from './data.models';

export const MANDATORY_DISCLOSURES: DisclosureCategory[] = [
  {
    title: 'Statutory & Environmental Approvals',
    documents: [
      { title: 'MPCB Bio-Medical Waste Authorization', href: '/PDFs/mpcb-authorization.pdf' },
      { title: 'Environmental Clearance (SEAC)', href: '/PDFs/environmental-clearance.pdf' },
      { title: 'Water Act Consent', href: '/PDFs/water-act-consent.pdf' },
    ]
  },
  {
    title: 'Land & Infrastructure Records',
    documents: [
      { title: 'Land Handover Document - Part A', href: '/PDFs/land-handover-part-a.pdf' },
      { title: 'Land Handover Document - Part B', href: '/PDFs/land-handover-part-b.pdf' },
      { title: '7/12 Extract & Property Card', href: '/PDFs/7-12-extract.pdf' },
      { title: 'Hospital Building 1 Completion Certificate', href: '/PDFs/hospital-building-1-cc.pdf' },
      { title: 'Hospital Building 2 Completion Certificate', href: '/PDFs/hospital-building-2-cc.pdf' },
    ]
  },
  {
    title: 'Administrative & Society Documents',
    documents: [
      { title: 'Society Registration Certificate', href: '/PDFs/society-registration.pdf' },
      { title: 'GR - Civil Hospital Converted to Teaching Hospital', href: '/PDFs/gr-hospital-conversion.pdf' },
      { title: 'GR - Establishment of SBHGMCH', href: '/PDFs/gr-college-establishment.pdf' },
      { title: 'Director Order - Nursing College Construction', href: '/PDFs/director-order-construction.pdf' },
    ]
  }
];