import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingContactComponent } from './layout/floating-contact/floating-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FloatingContactComponent],
  template: `
    <div class="app-shell">
      <router-outlet />
      <app-floating-contact />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .app-shell {
      min-height: 100vh;
    }
  `,
})
export class AppComponent {}
