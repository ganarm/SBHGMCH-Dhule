import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
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
    combineLatest([this.route.paramMap, this.route.data]).pipe(
      map(([params, data]) => {
        const routeSlug = params.get('slug');
        const configuredSlug = data['leaderSlug'];
        return routeSlug ?? (typeof configuredSlug === 'string' ? configuredSlug : '');
      }),
    ),
    {
      initialValue:
        this.route.snapshot.paramMap.get('slug') ??
        (typeof this.route.snapshot.data['leaderSlug'] === 'string'
          ? this.route.snapshot.data['leaderSlug']
          : ''),
    },
  );

  readonly message = computed(() => this.data.getLeadershipMessage(this.slug()));
}
