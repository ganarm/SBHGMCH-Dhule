import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { FACULTY_DATA } from '../../data/faculty.data';
import { FacultyMember } from '../../data/data.models';

type FacultyCategory = 'teaching' | 'nonTeaching' | 'guest';

function facultyCategory(value: unknown): FacultyCategory | undefined {
  return value === 'teaching' || value === 'nonTeaching' || value === 'guest' ? value : undefined;
}

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.scss',
})
export class FacultyComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly category = toSignal(
    this.route.data.pipe(map((data) => facultyCategory(data['facultyCategory']))),
    { initialValue: facultyCategory(this.route.snapshot.data['facultyCategory']) },
  );
  readonly faculty = computed(() => {
    const category = this.category();
    if (category === 'teaching') {
      return FACULTY_DATA.filter((member) => member.category === 'teaching');
    }
    if (category === 'nonTeaching') {
      return FACULTY_DATA.filter((member) => member.category === 'non-teaching');
    }
    if (category === 'guest') {
      return FACULTY_DATA.filter((member) => member.category === 'guest');
    }
    return FACULTY_DATA;
  });
  readonly title = computed(() => {
    switch (this.category()) {
      case 'teaching':
        return 'Teaching Faculty';
      case 'nonTeaching':
        return 'Non-Teaching Staff';
      case 'guest':
        return 'Guest Faculty';
      default:
        return 'Faculty';
    }
  });
  readonly description = computed(() => {
    const category = this.category();
    return category === 'guest' && !this.faculty().length
      ? 'Guest faculty information will be published here when available.'
      : 'Faculty and staff of Government College of Nursing, Dhule.';
  });

  trackByMember(index: number, member: FacultyMember): string {
    return `${member.name}-${index}`;
  }
}
