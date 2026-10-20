import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FACULTY_MEMBERS } from '../../data/faculty.data';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss',
})
export class FacultyComponent {
  readonly faculty = FACULTY_MEMBERS;

  trackByMember(index: number, member: (typeof FACULTY_MEMBERS)[number]): string {
    return `${member.name}-${index}`;
  }
}
