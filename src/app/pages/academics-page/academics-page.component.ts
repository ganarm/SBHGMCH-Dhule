import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
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
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly isAdmissionCriteria = computed(() => this.slug() === 'admission-criteria');
  readonly program = computed(() => this.data.getAcademicProgram(this.slug()));
  readonly admission = computed(() => (this.isAdmissionCriteria() ? this.data.getAdmissionCriteria() : undefined));
}
