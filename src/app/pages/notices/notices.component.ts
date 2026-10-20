import { Component, inject } from '@angular/core';
import { NoticeType } from '../../core/models/site.models';
import { SiteDataService } from '../../core/services/site-data.service';

import { AppIconComponent } from '../../shared/app-icon/app-icon.component';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [AppIconComponent],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss',
})
export class NoticesComponent {
  private readonly data = inject(SiteDataService);
  readonly notices = this.data.getNotices();

  chipClass(type: NoticeType): string {
    return `chip chip-${type}`;
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
