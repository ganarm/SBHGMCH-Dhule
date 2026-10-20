import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme/theme.service';
import { ThemeId } from '../../core/theme/theme.model';
@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  private readonly themeService = inject(ThemeService);

  readonly options = this.themeService.options;
  readonly activeId = this.themeService.activeId;
  readonly open = signal(false);

  toggle(): void {
    this.open.update((v) => !v);
  }

  select(id: ThemeId): void {
    this.themeService.setTheme(id);
  }
}
