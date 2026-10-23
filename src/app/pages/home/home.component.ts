import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../core/services/site-data.service';
import { NOTICES_DATA, HOME_STATS, HOME_KEY_PERSONS } from '../../data/home.data';
import { LEADERSHIP_MESSAGES } from '../../data/about.data';
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
  readonly marqueeNotices = this.notices.length > 1 ? [...this.notices, ...this.notices] : this.notices;
  readonly admissions = this.data.getAdmissions();
  readonly leadership = LEADERSHIP_MESSAGES;
  readonly criteria = this.data.getAdmissionCriteria();
  readonly facilities = this.data.getFacilities().slice(0, 4);
  readonly stats = HOME_STATS;
  readonly keyPersons = HOME_KEY_PERSONS;

  activeSlide = signal(0);

  prevSlide(): void {
    const next = (this.activeSlide() - 1 + this.slides.length) % this.slides.length;
    this.activeSlide.set(next);
  }

  nextSlide(): void {
    this.activeSlide.set((this.activeSlide() + 1) % this.slides.length);
  }

  statusLabel(status: string): string {
    return status.replace('-', ' ').replace(/^\w/, (letter) => letter.toUpperCase());
  }
}