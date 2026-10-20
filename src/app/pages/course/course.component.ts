import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(SiteDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly course = computed(() => this.data.getCourse(this.slug()));
}
