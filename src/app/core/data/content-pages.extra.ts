import { ContentPage } from '../models/site.models';

function page(
  slug: string,
  title: string,
  breadcrumb: string[],
  intro?: string,
  bullets?: string[],
): ContentPage {
  return {
    slug,
    title,
    breadcrumb,
    intro,
    sections: [
      {
        paragraphs: [
          intro ??
            `This is sample content for "${title}". Replace with approved text and documents from the institute office.`,
        ],
        bullets,
      },
    ],
  };
}

function committee(slug: string, title: string): ContentPage {
  return {
    slug,
    title,
    breadcrumb: ['Home', 'Committees', title],
    sections: [
      {
        paragraphs: [
          `The ${title} supports statutory compliance, student welfare, and transparent governance at Bhonsala Institute of Nursing.`,
        ],
      },
      {
        heading: 'Composition (sample)',
        bullets: [
          'Dr. T. Sivabalan — Chairperson',
          'Ms. Vandana Vairal — Member Secretary',
          'Parent representative — Member',
          'Student representative — Member',
          'External expert — Member',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: ['For queries, email info@nursing.bhonsala.in or visit the academic office during working hours.'],
      },
    ],
  };
}

function research(slug: string, title: string): ContentPage {
  return {
    slug,
    title,
    breadcrumb: ['Home', 'Research', title],
    sections: [
      {
        paragraphs: [`Overview of ${title} activities at BIN for the current academic year.`],
      },
      {
        heading: 'Recent highlights (sample)',
        bullets: [
          'Faculty–student collaborative projects under MUHS guidelines',
          'Workshops on research methodology and biostatistics',
          'Submission of proposals to Institutional Research & Ethics Committee',
        ],
      },
    ],
  };
}

export const EXTRA_CONTENT_PAGES: ContentPage[] = [
  research('research-iec', 'Institutional Ethics Committee (IEC)'),
  research('research-faculty-project', 'Faculty Project'),
  research('research-student-project', 'Student Project'),
  research('research-publication', 'Publication'),
  research('research-presentation', 'Presentation'),
  research('research-innovation-cell', 'Innovation Cell'),
  research('research-extension-activities', 'Extension Activities'),
  committee('committee-anti-ragging', 'Anti Ragging Committee'),
  committee('committee-anti-ragging-squad', 'Anti Ragging Squad'),
  committee('committee-internal-complaint', 'Internal Complaint Committee'),
  committee('committee-discipline', 'Discipline Committee'),
  committee('committee-hygiene', 'Hygiene Committee'),
  committee('committee-code-blue', 'Code Blue Committee'),
  committee('committee-curriculum', 'Curriculum Committee'),
  committee('committee-guidance-counselling', 'Guidance and Counselling Committee'),
  committee('committee-grievance-redressal', 'Internal Grievance and Redressal Committee'),
  committee('committee-library-advisory', 'Library Advisory Committee'),
  committee('committee-research-ethics', 'Institutional Research & Ethics Committee'),
  page('alumni-details', 'Alumni — Details', ['Home', 'Association', 'Alumni', 'Details']),
  page('alumni-committee', 'Alumni — Committee', ['Home', 'Association', 'Alumni', 'Committee']),
  page('alumni-photos', 'Alumni — Photos', ['Home', 'Association', 'Alumni', 'Photos']),
  page('sna-details', 'SNA — Details', ['Home', 'Association', 'SNA', 'Details']),
  page('sna-committee', 'SNA — Committee', ['Home', 'Association', 'SNA', 'Committee']),
  page('sna-activity-report', 'SNA — Activity Report', ['Home', 'Association', 'SNA', 'Activity Report']),
  page('nss-details', 'NSS — Details', ['Home', 'Association', 'NSS', 'Details']),
  page('nss-committee', 'NSS — Committee', ['Home', 'Association', 'NSS', 'Committee']),
  page('nss-activity-report', 'NSS — Activity Report', ['Home', 'Association', 'NSS', 'Activity Report']),
]; 
