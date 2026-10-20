import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CommitteeCategory } from '../../data/data.models';
import { COMMITTEE_CATEGORIES, COMMITTEES } from '../../data/committees.data';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss',
})
export class CommitteesComponent {
  readonly categories = COMMITTEE_CATEGORIES;
  readonly activeCategory = signal<CommitteeCategory>(this.categories[0]);

  committeesFor(category: CommitteeCategory) {
    return COMMITTEES.filter((committee) => committee.category === category);
  }

  selectCategory(category: CommitteeCategory): void {
    this.activeCategory.set(category);
  }

  trackCommittee(index: number, item: (typeof COMMITTEES)[number]): string {
    return `${item.category}-${item.name}-${index}`;
  }
}
