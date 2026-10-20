import { Component, computed, inject, signal } from '@angular/core';
import { NavConfigItem } from '../../core/models/navigation.models';
import { NavigationControlService } from '../../core/navigation/navigation-control.service';

@Component({
  selector: 'app-nav-control-panel',
  standalone: true,
  templateUrl: './nav-control-panel.component.html',
  styleUrl: './nav-control-panel.component.scss',
})
export class NavControlPanelComponent {
  private readonly nav = inject(NavigationControlService);

  readonly open = signal(false);
  readonly rows = computed(() => this.nav.walkConfig(this.nav.config));

  toggle(): void {
    this.open.update((v) => !v);
  }

  isChecked(item: NavConfigItem): boolean {
    return this.nav.isVisible(item);
  }

  onCheck(item: NavConfigItem, event: Event): void {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) {
      return;
    }
    this.nav.setVisible(item.id, input.checked);
  }

  reset(): void {
    this.nav.resetToDefaults();
  }
}
