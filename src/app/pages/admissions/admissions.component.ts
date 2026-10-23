import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMISSIONS_PAGE_DATA } from '../../data/academics.data';
import { SiteDataService } from '../../core/services/site-data.service';
import { telHref } from '../../core/utils/contact-links';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
})
export class AdmissionsComponent {
  private readonly siteData = inject(SiteDataService);
  readonly data = ADMISSIONS_PAGE_DATA;
  readonly settings = this.siteData.getSettings();
  
  // State for the tabs (defaults to B.Sc. Nursing)
  activeTab = signal<'bsc' | 'gnm' | 'msc'>('bsc');

  telLink(number: string): string {
    return telHref(number);
  }
}