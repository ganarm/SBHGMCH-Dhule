import { inject, Injectable } from '@angular/core';
import { CommitteeCategory, FacultyEntry, LeadershipMessage } from '../../data/data.models';
import { NavigationControlService } from '../navigation/navigation-control.service';
import {
  FacilityItem,
  HeroSlide,
  NavItem,
  SiteSettings,
} from '../models/site.models';
import { SITE_SETTINGS } from '../../data/college-info.data';
import { HERO_SLIDES } from '../../data/home.data';
import { ADMISSION_PROGRAMS, ADMISSION_CRITERIA, ACADEMIC_PROGRAMS } from '../../data/academics.data';
import { FACULTY_MEMBERS } from '../../data/faculty.data';
import { ABOUT_CONTENT, LEADERSHIP_MESSAGES, SOCIETY_HISTORY } from '../../data/about.data';
import { COMMITTEE_CATEGORIES, COMMITTEES } from '../../data/committees.data';
import { FACILITY_DETAILS } from '../../data/facilities.data';
import { MANDATORY_DISCLOSURES } from '../../data/disclosures.data';
import { STUDENT_CORNER_TOPICS } from '../../data/student-corner.data';

@Injectable({ providedIn: 'root' })
export class SiteDataService {
  private readonly navControl = inject(NavigationControlService);

  getSettings(): SiteSettings {
    return SITE_SETTINGS;
  }

  getNavigation(): NavItem[] {
    return this.navControl.visibleNavigation();
  }

  getHeroSlides(): HeroSlide[] {
    return HERO_SLIDES;
  }

  getAdmissions() {
    return ADMISSION_PROGRAMS;
  }

  getFaculty(): FacultyEntry[] {
    return FACULTY_MEMBERS;
  }

  getAboutContent() {
    return ABOUT_CONTENT;
  }

  getLeadershipMessage(slug: string): LeadershipMessage | undefined {
    return LEADERSHIP_MESSAGES.find((m) => m.slug === slug);
  }

  getSocietyHistory() {
    return SOCIETY_HISTORY;
  }

  getCommitteeCategories(): CommitteeCategory[] {
    return COMMITTEE_CATEGORIES;
  }

  getCommitteesByCategory(category: CommitteeCategory) {
    return COMMITTEES.filter((c) => c.category === category);
  }

  getAcademicProgram(slug: string) {
    return ACADEMIC_PROGRAMS.find((p) => p.slug === slug);
  }

  getAdmissionCriteria() {
    return ADMISSION_CRITERIA;
  }

  getFacility(slug: string) {
    return FACILITY_DETAILS.find((f) => f.slug === slug);
  }

  getFacilities(): FacilityItem[] {
    return FACILITY_DETAILS.map(({ slug, title, summary, imageUrl }) => ({
      slug,
      title,
      summary,
      imageUrl,
    }));
  }

  getMandatoryDisclosures() {
    return MANDATORY_DISCLOSURES;
  }

  getStudentCornerTopic(slug: string) {
    return STUDENT_CORNER_TOPICS.find((t) => t.slug === slug);
  }
}
