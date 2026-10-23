import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { COURSE_DETAILS_DATA, CourseDetails } from '../../data/academics.data';
import { SiteDataService } from '../../core/services/site-data.service';
import { telHref } from '../../core/utils/contact-links';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(SiteDataService);
  readonly settings = this.data.getSettings();

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly course = computed<CourseDetails | undefined>(() => {
    const slug = this.slug();
    const details = COURSE_DETAILS_DATA[slug];

    if (details) {
      return details;
    }

    const program = this.data.getAcademicProgram(slug);
    return program
      ? {
          title: program.name,
          subtitle: `${program.duration} · Intake ${program.intake} seats`,
          overview: program.description,
          highlights: program.highlights,
        }
      : undefined;
  });

  telLink(number: string): string {
    return telHref(number);
  }
}