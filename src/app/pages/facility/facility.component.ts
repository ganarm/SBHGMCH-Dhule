import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.scss',
})
export class FacilityComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(SiteDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly facility = computed(() => this.data.getFacility(this.slug()));
}
