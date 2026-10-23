import { Component } from '@angular/core';
import { CourseDetailsComponent } from '../course/course-details.component';

@Component({
  selector: 'app-academics-bsc',
  standalone: true,
  imports: [CourseDetailsComponent],
  template: '<app-course-details />',
})
export class AcademicsBscComponent {}
