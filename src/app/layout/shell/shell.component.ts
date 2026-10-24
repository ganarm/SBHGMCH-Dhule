import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { ImportantNoticeModalComponent } from '../important-notice-modal/important-notice-modal.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ThemeSwitcherComponent,
    BreadcrumbsComponent,
    ImportantNoticeModalComponent,
  ],
  template: `
    <app-header />
    <main id="main-content">
      <app-breadcrumbs />
      <router-outlet />
    </main>
    <app-footer />
    <app-theme-switcher />
    <app-important-notice-modal />
  `,
  styles: `
    main {
      min-height: calc(100vh - var(--header-height) - 200px);
    }
  `,
})
export class ShellComponent {}
