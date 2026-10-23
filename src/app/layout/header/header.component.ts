import { Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { telHref } from '../../core/utils/contact-links';
import { NavigationControlService } from '../../core/navigation/navigation-control.service';
import { SiteDataService } from '../../core/services/site-data.service';
import { NavItem } from '../../core/models/site.models';
import { getSearchKeywords, SearchItem } from '../../data/search.data';
import { AppIconComponent } from '../../shared/app-icon/app-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AppIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly data = inject(SiteDataService);
  private readonly navControl = inject(NavigationControlService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly settings = this.data.getSettings();
  readonly nav = this.navControl.visibleNavigation;
  readonly mobileOpen = signal(false);
  readonly expandedMobile = signal<string | null>(null);
  
  readonly searchQuery = signal('');
  readonly showSearchResults = signal(false);
  readonly searchItems = computed<SearchItem[]>(() =>
    this.nav().flatMap((section) => {
      const items = section.children?.length ? section.children : [section];
      return items
        .filter((item): item is NavItem & { path: string } => !!item.path)
        .map((item) => {
          const pathTerms = item.path.replace(/[/-]/g, ' ');
          return {
            title: item.label,
            keywords: `${section.label} ${item.label} ${pathTerms} ${getSearchKeywords(section.label, item.path)}`,
            route: item.path,
          };
        });
    }),
  );
  readonly filteredSearchResults = computed(() => {
    const term = this.searchQuery().trim().toLowerCase();
    if (!term) {
      return [];
    }

    return this.searchItems().filter((item) => {
      const haystack = `${item.title} ${item.keywords}`.toLowerCase();
      return haystack.includes(term);
    }).slice(0, 8);
  });
  
  readonly suppressDropdownHover = signal(false);

  // Track exact URL and fragment for accurate dropdown highlighting
  currentUrl = '/';
  currentFragment: string | undefined = undefined;

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        const navEnd = event as NavigationEnd;
        this.updateActiveState(navEnd.urlAfterRedirects);
        this.closeMobile();
        this.suppressDropdownHover.set(true);
      });

    // Set initial state
    this.updateActiveState(this.router.url);
  }

  private updateActiveState(url: string) {
    const tree = this.router.parseUrl(url);
    const primary = tree.root.children['primary'];
    this.currentUrl = primary ? '/' + primary.segments.map((s) => s.path).join('/') : '/';
    this.currentFragment = tree.fragment || undefined;
  }

  isLinkActive(path: string | undefined): boolean {
    if (!path) return false;
    const basePath = this.routePath(path);
    const fragment = this.routeFragment(path);

    if (this.currentUrl !== basePath) {
      return false;
    }

    if (fragment) {
      return this.currentFragment === fragment;
    }

    return !this.currentFragment;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobile();
    this.clearSearch();
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null): void {
    const element = target as HTMLElement | null;
    if (!element?.closest('.nav-search-shell')) {
      this.showSearchResults.set(false);
    }
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
    this.syncBodyScrollLock();
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
    this.expandedMobile.set(null);
    this.syncBodyScrollLock();
  }

  private syncBodyScrollLock(): void {
    document.body.classList.toggle('nav-open', this.mobileOpen());
  }

  toggleMobileSection(key: string): void {
    this.expandedMobile.update((c) => (c === key ? null : key));
  }

  mobileSectionKey(item: NavItem): string {
    return item.path ?? item.label;
  }

  onSubnavClick(): void {
    this.suppressDropdownHover.set(true);
    this.closeMobile();
    const el = document.activeElement;
    if (el instanceof HTMLElement) {
      el.blur();
    }
  }

  onNavBarPointerLeave(): void {
    this.suppressDropdownHover.set(false);
  }

  hasChildren(item: NavItem): boolean {
    return !!item.children?.length;
  }

  routePath(path: string | undefined): string {
    return path?.split('#', 1)[0] || '/';
  }

  routeFragment(path: string | undefined): string | undefined {
    return path?.split('#', 2)[1] || undefined;
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.searchQuery.set(value);
    this.showSearchResults.set(value.trim().length > 0);
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.showSearchResults.set(false);
  }

  selectSearchResult(item: SearchItem): void {
    this.router.navigateByUrl(item.route);
    this.clearSearch();
  }

  telLink(number: string): string {
    return telHref(number);
  }

  socialClass(icon: string): string {
    return `social-chip social-${icon}`;
  }
}