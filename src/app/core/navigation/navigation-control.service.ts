import { Injectable, signal } from '@angular/core';
import { NavConfigItem } from '../models/navigation.models';
import { NavItem } from '../models/site.models';
import { NAVIGATION_CONFIG } from './navigation.config';

const STORAGE_KEY = 'bin-nav-visibility';

@Injectable({ providedIn: 'root' })
export class NavigationControlService {
  readonly config = NAVIGATION_CONFIG;
  readonly visibleNavigation = signal<NavItem[]>([]);
  private overrides: Record<string, boolean> = {};

  init(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.overrides = JSON.parse(raw) as Record<string, boolean>;
      }
    } catch {
      this.overrides = {};
    }
    this.rebuild();
  }

  isVisible(item: NavConfigItem): boolean {
    if (item.id in this.overrides) {
      return this.overrides[item.id];
    }
    return item.defaultVisible;
  }

  setVisible(id: string, visible: boolean): void {
    this.overrides[id] = visible;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.overrides));
    this.rebuild();
  }

  resetToDefaults(): void {
    this.overrides = {};
    localStorage.removeItem(STORAGE_KEY);
    this.rebuild();
  }

  flattenForMenu(items: NavConfigItem[]): NavItem[] {
    const result: NavItem[] = [];
    for (const item of items) {
      if (!this.isVisible(item)) {
        continue;
      }
      if (item.children?.length) {
        const flatChildren: NavItem[] = [];
        for (const child of item.children) {
          if (!this.isVisible(child)) {
            continue;
          }
          if (child.children?.length) {
            for (const grand of child.children) {
              if (!this.isVisible(grand)) {
                continue;
              }
              flatChildren.push({
                label: `${child.label} — ${grand.label}`,
                path: grand.path,
              });
            }
          } else if (child.path) {
            flatChildren.push({ label: child.label, path: child.path });
          }
        }
        if (flatChildren.length) {
          result.push({
            label: item.label,
            barLabel: item.shortLabel,
            children: flatChildren,
          });
        } else if (item.path) {
          result.push({ label: item.label, barLabel: item.shortLabel, path: item.path });
        }
      } else if (item.path) {
        result.push({ label: item.label, barLabel: item.shortLabel, path: item.path });
      }
    }
    return result;
  }

  rebuild(): void {
    this.visibleNavigation.set(this.flattenForMenu(this.config));
  }

  /** Flat list for navigation demo panel (includes nesting for UI) */
  walkConfig(
    items: NavConfigItem[],
    depth = 0,
  ): { item: NavConfigItem; depth: number }[] {
    const out: { item: NavConfigItem; depth: number }[] = [];
    for (const item of items) {
      out.push({ item, depth });
      if (item.children?.length) {
        out.push(...this.walkConfig(item.children, depth + 1));
      }
    }
    return out;
  }
}
