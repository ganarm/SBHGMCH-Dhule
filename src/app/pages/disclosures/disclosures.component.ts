import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MANDATORY_DISCLOSURES } from '../../data/disclosures.data';

@Component({
  selector: 'app-disclosures',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './disclosures.component.html',
  styleUrl: './disclosures.component.scss',
})
export class DisclosuresComponent {
  readonly disclosures = MANDATORY_DISCLOSURES;

  trackCategory(index: number, category: any): string {
    return category.title;
  }

  trackDocument(index: number, doc: any): string {
    return doc.title;
  }
}