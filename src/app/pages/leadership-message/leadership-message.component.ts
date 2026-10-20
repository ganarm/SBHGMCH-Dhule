import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-leadership-message',
  standalone: true,
  templateUrl: './leadership-message.component.html',
  styleUrl: './leadership-message.component.scss',
})
export class LeadershipMessageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(SiteDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly message = computed(() => this.data.getLeadershipMessage(this.slug()));
}
