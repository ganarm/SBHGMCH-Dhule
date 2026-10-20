import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly data = inject(SiteDataService);
  readonly settings = this.data.getSettings();

  form = {
    name: '',
    email: '',
    phone: '',
    subject: 'Admission inquiry',
    message: '',
  };

  submitted = false;

  telLink(number: string): string {
    return `tel:${number.replace(/[\s-]/g, '')}`;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    this.form = { name: '', email: '', phone: '', subject: 'Admission inquiry', message: '' };
  }
}
