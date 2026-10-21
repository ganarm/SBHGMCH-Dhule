import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMISSIONS_PAGE_DATA } from '../../data/academics.data';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
})
export class AdmissionsComponent {
  readonly data = ADMISSIONS_PAGE_DATA;
  
  // State for the tabs (defaults to B.Sc. Nursing)
  activeTab = signal<'bsc' | 'gnm' | 'msc'>('bsc');
}