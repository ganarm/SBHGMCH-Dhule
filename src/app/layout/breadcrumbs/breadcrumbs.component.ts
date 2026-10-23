import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

interface BreadcrumbItem {
  label: string;
}

const ROUTE_LABELS: Record<string, string> = {
  about: 'About Us',
  'about/vision': 'Vision & Mission',
  'about/vision-mission': 'Vision & Mission',
  'about/dean': "Dean's Message",
  'about/principal': "Principal's Message",
  'about/history': 'History',
  academics: 'Academics',
  'academics/bsc': 'B.Sc. Nursing',
  'academics/gnm': 'GNM',
  'academics/admission': 'Admission Process',
  'academics/holidays': 'List of Holidays',
  'academics/calendar': 'Academic Calendar',
  'academics/syllabus': 'Syllabus',
  'academics/admission-criteria': 'Admission Criteria',
  faculty: 'Faculty',
  'faculty/teaching': 'Teaching',
  'faculty/non-teaching': 'Non-Teaching',
  'faculty/guest': 'Guest',
  facilities: 'Facilities',
  'facilities/hospital': 'Hospital',
  'facilities/hostel': 'Hostel',
  'facilities/laboratories': 'Labs',
  'facilities/library': 'Library',
  'student-corner': 'Student Corner',
  'student-corner/extra-curricular': 'Extra-Curricular',
  'student-corner/important-days': 'Important Days',
  'student-corner/hostels': 'Hostels',
  'student-corner/clinical-postings': 'Clinical',
  'student-corner/grievance': 'Grievance',
  committees: 'Committees',
  iqac: 'IQAC',
  'muhs-mandate': 'MUHS Mandate',
  alumni: 'Alumni',
  gallery: 'Gallery',
  events: 'Events',
  disclosures: 'Disclosures',
  contact: 'Contact Us',
  admissions: 'Admissions',
  notices: 'Notices',
};

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (breadcrumbs().length) {
      <nav class="breadcrumbs container" aria-label="Breadcrumb">
        <a routerLink="/">Home</a>
        @for (breadcrumb of breadcrumbs(); track breadcrumb.label) {
          <span class="separator" aria-hidden="true">/</span>
          <span>{{ breadcrumb.label }}</span>
        }
      </nav>
    }
  `,
  styles: `
    .breadcrumbs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.45rem;
      padding-top: 0.9rem;
      padding-bottom: 0.9rem;
      color: var(--color-text-muted);
      font-size: 0.8125rem;
    }

    .breadcrumbs a {
      color: var(--color-primary);
      text-decoration: none;
    }

    .breadcrumbs a:hover,
    .breadcrumbs a:focus-visible {
      text-decoration: underline;
    }

    .separator {
      color: var(--color-text-muted);
    }
  `,
})
export class BreadcrumbsComponent {
  private readonly router = inject(Router);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly breadcrumbs = computed(() => {
    const segments = this.currentUrl().split(/[?#]/, 1)[0].split('/').filter(Boolean);
    if (!segments.length) {
      return [];
    }

    return segments.map((segment, index): BreadcrumbItem => {
      const routeKey = segments.slice(0, index + 1).join('/');
      const label = ROUTE_LABELS[routeKey] ?? this.humanize(segment);
      return { label };
    });
  });

  private humanize(segment: string): string {
    return decodeURIComponent(segment)
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
