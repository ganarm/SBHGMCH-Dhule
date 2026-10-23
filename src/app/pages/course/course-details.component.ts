import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CourseDetails, COURSE_DETAILS_DATA } from '../../data/academics.data';
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
    combineLatest([this.route.paramMap, this.route.data]).pipe(
      map(([params, data]) => {
        const routeSlug = params.get('slug');
        const configuredSlug = data['courseSlug'];
        return routeSlug ?? (typeof configuredSlug === 'string' ? configuredSlug : '');
      }),
    ),
    {
      initialValue: this.route.snapshot.paramMap.get('slug') ??
        (typeof this.route.snapshot.data['courseSlug'] === 'string'
          ? this.route.snapshot.data['courseSlug']
          : ''),
    },
  );

  readonly course = computed<CourseDetails | undefined>(() => {
    const routeSlug = this.slug();
    const slug = routeSlug === 'bsc' ? 'bsc-nursing' : routeSlug;
    return COURSE_DETAILS_DATA[slug];
  });

  telLink(number: string): string {
    return telHref(number);
  }
}