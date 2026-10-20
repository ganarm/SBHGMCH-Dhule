import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { telHref } from '../../core/utils/contact-links';
import { SiteDataService } from '../../core/services/site-data.service';
import { AppIconComponent, IconName } from '../../shared/app-icon/app-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule, AppIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly data = inject(SiteDataService);
  readonly settings = this.data.getSettings();
  readonly year = new Date().getFullYear();

  newsletterEmail = '';

  telLink(number: string): string {
    return telHref(number);
  }

  socialIcon(icon: string): IconName {
    const map: Record<string, IconName> = {
      instagram: 'instagram',
      facebook: 'facebook',
      youtube: 'youtube',
    };
    return map[icon] ?? 'external';
  }

  onSubscribe(event: Event): void {
    event.preventDefault();
    this.newsletterEmail = '';
  }
}
