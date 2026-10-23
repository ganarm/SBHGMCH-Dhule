import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { AboutVisionMissionComponent } from './pages/about-vision-mission/about-vision-mission.component';
import { AcademicsAdmissionComponent } from './pages/academics-admission/academics-admission.component';
import { AcademicsBscComponent } from './pages/academics-bsc/academics-bsc.component';
import { AcademicsCalendarComponent } from './pages/academics-calendar/academics-calendar.component';
import { AcademicsGnmComponent } from './pages/academics-gnm/academics-gnm.component';
import { AcademicsHolidaysComponent } from './pages/academics-holidays/academics-holidays.component';
import { AcademicsPageComponent } from './pages/academics-page/academics-page.component';
import { AcademicsSyllabusComponent } from './pages/academics-syllabus/academics-syllabus.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { CommitteesComponent } from './pages/committees/committees.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseDetailsComponent } from './pages/course/course-details.component';
import { DisclosuresComponent } from './pages/disclosures/disclosures.component';
import { EventsComponent } from './pages/events/events.component';
import { FacilityComponent } from './pages/facility/facility.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { FacultyGuestComponent } from './pages/faculty-guest/faculty-guest.component';
import { FacultyNonTeachingComponent } from './pages/faculty-non-teaching/faculty-non-teaching.component';
import { FacultyTeachingComponent } from './pages/faculty-teaching/faculty-teaching.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { IqacComponent } from './pages/iqac/iqac.component';
import { LeadershipMessageComponent } from './pages/leadership-message/leadership-message.component';
import { MuhsMandateComponent } from './pages/muhs-mandate/muhs-mandate.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { StudentCornerComponent } from './pages/student-corner/student-corner.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'admissions', component: AdmissionsComponent },
      { path: 'faculty/teaching', component: FacultyTeachingComponent, data: { facultyCategory: 'teaching' } },
      { path: 'faculty/non-teaching', component: FacultyNonTeachingComponent, data: { facultyCategory: 'nonTeaching' } },
      { path: 'faculty/guest', component: FacultyGuestComponent, data: { facultyCategory: 'guest' } },
      { path: 'faculty', component: FacultyComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about/vision', component: AboutVisionMissionComponent },
      { path: 'about/vision-mission', component: AboutVisionMissionComponent },
      { path: 'about/dean', component: LeadershipMessageComponent, data: { leaderSlug: 'dean' } },
      { path: 'about/principal', component: LeadershipMessageComponent, data: { leaderSlug: 'principal' } },
      { path: 'about/messages', redirectTo: 'about/message/dean', pathMatch: 'full' },
      { path: 'about/message/:slug', component: LeadershipMessageComponent },
      { path: 'about/history', component: HistoryComponent },
      { path: 'academics', redirectTo: 'admissions', pathMatch: 'full' },
      { path: 'academics/bsc', component: AcademicsBscComponent, data: { courseSlug: 'bsc-nursing' } },
      { path: 'academics/gnm', component: AcademicsGnmComponent, data: { courseSlug: 'gnm' } },
      { path: 'academics/admission', component: AcademicsAdmissionComponent },
      { path: 'academics/holidays', component: AcademicsHolidaysComponent, data: { pageKey: 'academics.holidays' } },
      { path: 'academics/calendar', component: AcademicsCalendarComponent, data: { pageKey: 'academics.calendar' } },
      { path: 'academics/syllabus', component: AcademicsSyllabusComponent, data: { pageKey: 'academics.syllabus' } },
      { path: 'academics/admission-criteria', component: AcademicsPageComponent, data: { pageSlug: 'admission-criteria' } },
      { path: 'academics/:slug', component: CourseDetailsComponent },
      { path: 'facilities/labs', redirectTo: 'facilities/laboratories', pathMatch: 'full' },
      { path: 'facilities/:slug', component: FacilityComponent },
      { path: 'student-corner/clinical', redirectTo: 'student-corner/clinical-postings', pathMatch: 'full' },
      { path: 'student-corner/:slug', component: StudentCornerComponent },
      { path: 'committees', component: CommitteesComponent },
      { path: 'iqac', component: IqacComponent, data: { pageKey: 'iqac' } },
      { path: 'muhs-mandate', component: MuhsMandateComponent, data: { pageKey: 'muhsMandate' } },
      { path: 'alumni', component: AlumniComponent, data: { pageKey: 'alumni' } },
      { path: 'gallery', component: GalleryComponent, data: { pageKey: 'gallery' } },
      { path: 'events', component: EventsComponent, data: { pageKey: 'events' } },
      { path: 'disclosures', component: DisclosuresComponent },
      { path: 'mandatory-disclosures', redirectTo: 'disclosures', pathMatch: 'full' },
      { path: 'courses/bsc-nursing', redirectTo: 'academics/bsc', pathMatch: 'full' },
      { path: 'courses/gnm-nursing', redirectTo: 'academics/gnm', pathMatch: 'full' },
      { path: 'about/:slug', redirectTo: 'about/vision-mission' },
      { path: 'page/:slug', redirectTo: '' },
      { path: '**', redirectTo: '' },
    ],
  },
];
