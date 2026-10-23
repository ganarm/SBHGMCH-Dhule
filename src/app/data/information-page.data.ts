import { ACADEMIC_SUPPORT_PAGES } from './academics.data';
import { InformationPage } from './information-pages.model';
import { IQAC_PAGE } from './iqac.data';
import { MUHS_MANDATE_PAGE } from './muhs-mandate.data';
import { ALUMNI_PAGE } from './alumni.data';
import { GALLERY_PAGE } from './gallery.data';
import { EVENTS_PAGE } from './events.data';

const INFORMATION_PAGES: Record<string, InformationPage> = {
  'academics.holidays': ACADEMIC_SUPPORT_PAGES['holidays'],
  'academics.calendar': ACADEMIC_SUPPORT_PAGES['calendar'],
  'academics.syllabus': ACADEMIC_SUPPORT_PAGES['syllabus'],
  iqac: IQAC_PAGE,
  muhsMandate: MUHS_MANDATE_PAGE,
  alumni: ALUMNI_PAGE,
  gallery: GALLERY_PAGE,
  events: EVENTS_PAGE,
};

export function getInformationPage(key: string): InformationPage | undefined {
  return INFORMATION_PAGES[key];
}
