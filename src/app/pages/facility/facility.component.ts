import { Component, computed, inject, signal, OnInit, OnDestroy, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.scss',
})
export class FacilityComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(SiteDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly facility = computed(() => this.data.getFacility(this.slug()));
  
  // State for Labs
  activeLabId = signal<string | null>(null);
  
  readonly currentLab = computed(() => {
    const fac = this.facility();
    if (fac?.labs) {
      const id = this.activeLabId() || fac.labs[0].id;
      return fac.labs.find(l => l.id === id) || fac.labs[0];
    }
    return null;
  });

  // State for the slideshow
  activeImageIndex = signal(0);
  private slideInterval: any;

  constructor() {
    // Automatically reset image index when lab changes
    effect(() => {
      this.currentLab(); // Track lab changes
      this.activeImageIndex.set(0);
      this.startSlideshow();
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  setActiveLab(id: string): void {
    this.activeLabId.set(id);
  }

  startSlideshow(): void {
    this.stopSlideshow();
    this.slideInterval = setInterval(() => {
      const lab = this.currentLab();
      const standardImages = this.facility()?.images;
      
      const imgLength = lab ? lab.images.length : (standardImages ? standardImages.length : 0);
      
      if (imgLength > 1) {
        this.activeImageIndex.update((current) => (current + 1) % imgLength);
      }
    }, 3000);
  }

  stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  pauseSlideshow(): void { this.stopSlideshow(); }
  resumeSlideshow(): void { this.startSlideshow(); }
  setActiveImage(index: number): void { this.activeImageIndex.set(index); }
}