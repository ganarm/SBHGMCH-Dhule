import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../core/services/site-data.service';
import { NoticeType } from '../../core/models/site.models';
import { ACADEMIC_PROGRAMS } from '../../data/academics.data';
import { LEADERSHIP_MESSAGES } from '../../data/about.data';
import { NOTICES_DATA } from '../../data/notices.data';
import { AppIconComponent } from '../../shared/app-icon/app-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AppIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly data = inject(SiteDataService);

  readonly settings = this.data.getSettings();
  readonly about = this.data.getAboutContent();
  readonly slides = this.data.getHeroSlides();
  readonly notices = NOTICES_DATA;
  readonly marqueeNotices = [...NOTICES_DATA, ...NOTICES_DATA];
  readonly admissions = this.data.getAdmissions();
  readonly programs = ACADEMIC_PROGRAMS;
  readonly leadership = LEADERSHIP_MESSAGES;
  readonly criteria = this.data.getAdmissionCriteria();
  readonly facilities = this.data.getFacilities().slice(0, 4);
  readonly stats = [
    { value: '50+', label: 'Annual intake' },
    { value: '4+', label: 'Academic programmes' },
    { value: '250', label: 'Hospital beds' },
    { value: '15k+', label: 'Sq.m. campus area' },
  ];

  activeSlide = signal(0);

  prevSlide(): void {
    const next = (this.activeSlide() - 1 + this.slides.length) % this.slides.length;
    this.activeSlide.set(next);
  }

  nextSlide(): void {
    this.activeSlide.set((this.activeSlide() + 1) % this.slides.length);
  }

  chipClass(type: NoticeType): string {
    return `chip chip-${type}`;
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  statusLabel(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
}
