import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-academics-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './academics-page.component.html',
  styleUrl: './academics-page.component.scss',
})
export class AcademicsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(SiteDataService);

  private readonly slug = toSignal(
    combineLatest([this.route.paramMap, this.route.data]).pipe(
      map(([params, data]) => {
        const routeSlug = params.get('slug');
        const configuredSlug = data['pageSlug'];
        return routeSlug ?? (typeof configuredSlug === 'string' ? configuredSlug : '');
      }),
    ),
    {
      initialValue:
        this.route.snapshot.paramMap.get('slug') ??
        (typeof this.route.snapshot.data['pageSlug'] === 'string'
          ? this.route.snapshot.data['pageSlug']
          : ''),
    },
  );

  readonly isAdmissionCriteria = computed(() => this.slug() === 'admission-criteria');
  readonly program = computed(() => this.data.getAcademicProgram(this.slug()));
  readonly admission = computed(() => (this.isAdmissionCriteria() ? this.data.getAdmissionCriteria() : undefined));
}
