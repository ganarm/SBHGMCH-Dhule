import { Component, input } from '@angular/core';

export type IconName =
  | 'location'
  | 'phone'
  | 'mobile'
  | 'envelope'
  | 'envelope-open'
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'graduation-cap'
  | 'users'
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'chevron-right'
  | 'angle-right'
  | 'home'
  | 'headset'
  | 'bullhorn'
  | 'alert'
  | 'pdf'
  | 'send'
  | 'external'
  | 'search';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('location') {
          <path
            d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.75" />
        }
        @case ('phone') {
          <path
            d="M8.5 4.5h2l1.2 3.6a1 1 0 0 1-.25 1l-1.4 1.4a11 11 0 0 0 5.45 5.45l1.4-1.4a1 1 0 0 1 1-.25l3.6 1.2v2a2 2 0 0 1-2 2A14.5 14.5 0 0 1 6.5 6.5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        }
        @case ('mobile') {
          <rect x="7.5" y="3.5" width="9" height="17" rx="2" stroke="currentColor" stroke-width="1.75" />
          <path d="M11 18h2" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
        @case ('envelope') {
          <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" stroke-width="1.75" />
          <path d="m4 8 8 5.5L20 8" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
        }
        @case ('envelope-open') {
          <path
            d="M4 9.5 12 14l8-4.5V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.5Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
          <path d="M4 9.5 12 14l8-4.5" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
        }
        @case ('whatsapp') {
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
          />
        }
        @case ('instagram') {
          <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" stroke-width="1.75" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.75" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        }
        @case ('facebook') {
          <path
            fill="currentColor"
            d="M14 8.5h2.5l-.5 3H14v9h-3.5v-9H9V8.5h1.5V6.8c0-1.2.4-2.2 1.2-3 .8-.8 1.9-1.2 3.3-1.2.9 0 1.7.1 2.3.3v2.9h-1.6c-.6 0-1 .2-1.2.5-.2.3-.3.8-.3 1.4v1.8Z"
          />
        }
        @case ('youtube') {
          <path
            d="M4 8.2c0-1 .8-1.8 1.9-1.9C7.6 6 12 6 12 6s4.4 0 6.1.3c1.1.1 1.9.9 1.9 1.9v7.6c0 1-.8 1.8-1.9 1.9-1.7.3-6.1.3-6.1.3s-4.4 0-6.1-.3C4.8 17.6 4 16.8 4 15.8V8.2Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
          <path d="m10 9.5 4.5 2.5L10 14.5V9.5Z" fill="currentColor" />
        }
        @case ('graduation-cap') {
          <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
          <path d="M7 12v3.5c0 .5 2.2 1.5 5 1.5s5-1 5-1.5V12" stroke="currentColor" stroke-width="1.75" />
          <path d="M21 10v5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
        @case ('users') {
          <circle cx="9" cy="9" r="3" stroke="currentColor" stroke-width="1.75" />
          <path d="M3.5 19c.8-2.8 3-4.5 5.5-4.5S13.7 16.2 14.5 19" stroke="currentColor" stroke-width="1.75" />
          <circle cx="16.5" cy="10" r="2.2" stroke="currentColor" stroke-width="1.5" />
          <path d="M20 19c-.6-1.8-1.8-3-3.5-3" stroke="currentColor" stroke-width="1.5" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
        @case ('close') {
          <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        }
        @case ('chevron-right') {
          <path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        }
        @case ('angle-right') {
          <path d="m9 6 5 6-5 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        }
        @case ('home') {
          <path
            d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-5.5H10V20H5a1 1 0 0 1-1-1v-8.5Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
        }
        @case ('headset') {
          <path
            d="M4 14v-2a8 8 0 1 1 16 0v2a3 3 0 0 1-3 3h-1v-4.5a5 5 0 0 0-10 0V17H7a3 3 0 0 1-3-3Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
          <path d="M7 17v1.5A2.5 2.5 0 0 0 9.5 21h0" stroke="currentColor" stroke-width="1.75" />
        }
        @case ('bullhorn') {
          <path d="M5 10v4M5 12H3v-1h2Z" stroke="currentColor" stroke-width="1.75" />
          <path
            d="M5 12h2.5l7.5 3.5V8.5L7.5 12H5Z"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
        }
        @case ('alert') {
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.75" />
          <path d="M12 8v5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        }
        @case ('pdf') {
          <path
            d="M8 4h6l4 4v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            stroke-width="1.75"
          />
          <path d="M14 4v4h4M10 13h4M10 16h4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
        @case ('send') {
          <path d="m4 12 16-7-7 16-2-7-7-2Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
        }
        @case ('external') {
          <path d="M14 5h5v5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
          <path d="M10 14 19 5M19 10v9H5V5h9" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
        @case ('search') {
          <circle cx="11" cy="11" r="5.5" stroke="currentColor" stroke-width="1.75" />
          <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 0;
    }
  `,
})
export class AppIconComponent {
  name = input.required<IconName>();
  size = input(18);
}
