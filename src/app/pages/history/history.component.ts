import { Component, inject } from '@angular/core';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  private readonly data = inject(SiteDataService);
  readonly history = this.data.getSocietyHistory();
}
