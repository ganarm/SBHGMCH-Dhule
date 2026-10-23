import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavControlPanelComponent } from '../nav-control-panel/nav-control-panel.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavControlPanelComponent,
    ThemeSwitcherComponent,
    BreadcrumbsComponent,
  ],
  template: `
    <app-header />
    <main id="main-content">
      <app-breadcrumbs />
      <router-outlet />
    </main>
    <app-footer />
    <app-nav-control-panel />
    <app-theme-switcher />
  `,
  styles: `
    main {
      min-height: calc(100vh - var(--header-height) - 200px);
    }
  `,
})
export class ShellComponent {}
