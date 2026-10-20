import { Injectable, signal } from '@angular/core';
import { DEFAULT_THEME_ID, THEME_OPTIONS } from './themes.data';
import { ThemeId } from './theme.model';

const STORAGE_KEY = 'bin-demo-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly options = THEME_OPTIONS;
  readonly activeId = signal<ThemeId>(DEFAULT_THEME_ID);

  init(): void {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const valid = THEME_OPTIONS.some((t) => t.id === stored);
    this.apply(valid && stored ? stored : DEFAULT_THEME_ID);
  }

  setTheme(id: ThemeId): void {
    this.apply(id);
    localStorage.setItem(STORAGE_KEY, id);
  }

  private apply(id: ThemeId): void {
    document.documentElement.setAttribute('data-theme', id);
    this.activeId.set(id);
  }
}
