import { Component, inject } from '@angular/core';
import { telHref, whatsappHref } from '../../core/utils/contact-links';
import { SiteDataService } from '../../core/services/site-data.service';
import { AppIconComponent } from '../../shared/app-icon/app-icon.component';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [AppIconComponent],
  templateUrl: './floating-contact.component.html',
  styleUrl: './floating-contact.component.scss',
})
export class FloatingContactComponent {
  private readonly data = inject(SiteDataService);
  readonly settings = this.data.getSettings();

  telLink(number: string): string {
    return telHref(number);
  }

  whatsappLink(): string {
    return whatsappHref(this.settings);
  }
}
