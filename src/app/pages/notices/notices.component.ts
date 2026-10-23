import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NOTICES_DATA } from '../../data/home.data';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss',
})
export class NoticesComponent {
  readonly notices = NOTICES_DATA;
}
