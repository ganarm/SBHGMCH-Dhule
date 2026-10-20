import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
})
export class AdmissionsComponent {
  private readonly data = inject(SiteDataService);
  readonly programs = this.data.getAdmissions();

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
