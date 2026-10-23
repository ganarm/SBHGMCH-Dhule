import { Component } from '@angular/core';
import { FacultyComponent } from '../faculty/faculty.component';

@Component({
  selector: 'app-faculty-teaching',
  standalone: true,
  imports: [FacultyComponent],
  template: '<app-faculty />',
})
export class FacultyTeachingComponent {}
