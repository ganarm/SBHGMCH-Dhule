import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MANDATORY_DISCLOSURES } from '../../data/disclosures.data';
import { AppIconComponent } from '../../shared/app-icon/app-icon.component';

@Component({
  selector: 'app-disclosures',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './disclosures.component.html',
  styleUrl: './disclosures.component.scss',
})
export class DisclosuresComponent {
  readonly documents = MANDATORY_DISCLOSURES;

  trackDocument(index: number, doc: (typeof MANDATORY_DISCLOSURES)[number]): string {
    return `${doc.title}-${index}`;
  }
}
