import { Component, OnDestroy, inject, signal } from '@angular/core';
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
export class HomeComponent implements OnDestroy {
  private readonly data = inject(SiteDataService);
  private readonly slideTimer: ReturnType<typeof setInterval>;

  readonly settings = this.data.getSettings();
  readonly about = this.data.getAboutContent();
  readonly slides = this.data.getHeroSlides();
  readonly notices = NOTICES_DATA;
  readonly marqueeNotices = this.notices.length ? [...this.notices, ...this.notices] : [];
  readonly admissions = this.data.getAdmissions();
  readonly leadership = LEADERSHIP_MESSAGES;
  readonly criteria = this.data.getAdmissionCriteria();
  readonly facilities = this.data.getFacilities().slice(0, 4);
  readonly stats = HOME_STATS;
  readonly keyPersons = HOME_KEY_PERSONS;

  activeSlide = signal(0);
  slideAnimationCycle = signal(false);

  constructor() {
    this.slideTimer = setInterval(() => this.nextSlide(), 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideTimer);
  }

  prevSlide(): void {
    const next = (this.activeSlide() - 1 + this.slides.length) % this.slides.length;
    this.setSlide(next);
  }

  nextSlide(): void {
    this.setSlide((this.activeSlide() + 1) % this.slides.length);
  }

  setSlide(index: number): void {
    if (index === this.activeSlide()) {
      return;
    }

    this.activeSlide.set(index);
    this.slideAnimationCycle.update((cycle) => !cycle);
  }

  statusLabel(status: string): string {
    return status.replace('-', ' ').replace(/^\w/, (letter) => letter.toUpperCase());
  }
}