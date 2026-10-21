import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommitteeCategory, CommitteeEntry } from '../../data/data.models';
import { COMMITTEE_CATEGORIES, COMMITTEES } from '../../data/committees.data';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss',
})
export class CommitteesComponent {
  readonly categories = COMMITTEE_CATEGORIES;
  readonly activeCategory = signal<CommitteeCategory>(this.categories[0]);
  readonly searchQuery = signal<string>('');

  // Computed property that filters by both category AND search query
  readonly filteredCommittees = computed(() => {
    const category = this.activeCategory();
    const query = this.searchQuery().toLowerCase().trim();
    
    return COMMITTEES.filter((committee) => {
      const matchesCategory = committee.category === category;
      const matchesSearch = 
        committee.name.toLowerCase().includes(query) || 
        committee.responsibility.toLowerCase().includes(query);
        
      return matchesCategory && matchesSearch;
    });
  });

  // Helper to get the count for the sidebar badges
  getCategoryCount(category: CommitteeCategory): number {
    return COMMITTEES.filter(c => c.category === category).length;
  }

  selectCategory(category: CommitteeCategory): void {
    this.activeCategory.set(category);
    this.searchQuery.set(''); // Clear search when switching categories
  }

  trackCommittee(index: number, item: CommitteeEntry): string {
    return `${item.category}-${item.name}-${index}`;
  }
}