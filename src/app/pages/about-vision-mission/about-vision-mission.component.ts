import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ABOUT_CONTENT } from '../../data/about.data';

@Component({
  selector: 'app-about-vision-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-vision-mission.component.html',
  styleUrl: './about-vision-mission.component.scss',
})
export class AboutVisionMissionComponent {
  readonly about = ABOUT_CONTENT;
}
