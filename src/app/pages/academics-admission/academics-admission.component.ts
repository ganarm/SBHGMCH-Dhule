import { Component } from '@angular/core';
import { AdmissionsComponent } from '../admissions/admissions.component';

@Component({
  selector: 'app-academics-admission',
  standalone: true,
  imports: [AdmissionsComponent],
  template: '<app-admissions />',
})
export class AcademicsAdmissionComponent {}
