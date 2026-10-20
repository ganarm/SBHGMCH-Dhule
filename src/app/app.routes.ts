import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { AboutVisionMissionComponent } from './pages/about-vision-mission/about-vision-mission.component';
import { AcademicsPageComponent } from './pages/academics-page/academics-page.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { CommitteesComponent } from './pages/committees/committees.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DisclosuresComponent } from './pages/disclosures/disclosures.component';
import { FacilityComponent } from './pages/facility/facility.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LeadershipMessageComponent } from './pages/leadership-message/leadership-message.component';
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
      { path: 'faculty', component: FacultyComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about/vision', redirectTo: 'about/vision-mission', pathMatch: 'full' },
      { path: 'about/vision-mission', component: AboutVisionMissionComponent },
      { path: 'about/messages', redirectTo: 'about/message/dean', pathMatch: 'full' },
      { path: 'about/message/:slug', component: LeadershipMessageComponent },
      { path: 'about/history', component: HistoryComponent },
      { path: 'academics/admission', redirectTo: 'academics/admission-criteria', pathMatch: 'full' },
      { path: 'academics/:slug', component: AcademicsPageComponent },
      { path: 'facilities/:slug', component: FacilityComponent },
      { path: 'student-corner/:slug', component: StudentCornerComponent },
      { path: 'committees', component: CommitteesComponent },
      { path: 'disclosures', redirectTo: 'mandatory-disclosures', pathMatch: 'full' },
      { path: 'mandatory-disclosures', component: DisclosuresComponent },
      { path: 'courses/bsc-nursing', redirectTo: 'academics/bsc-nursing', pathMatch: 'full' },
      { path: 'courses/gnm-nursing', redirectTo: 'academics/gnm', pathMatch: 'full' },
      { path: 'about/:slug', redirectTo: 'about/vision-mission' },
      { path: 'page/:slug', redirectTo: '' },
      { path: '**', redirectTo: '' },
    ],
  },
];
