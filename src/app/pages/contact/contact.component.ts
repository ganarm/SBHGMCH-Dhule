import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  // Data for the bottom directory
  directoryContacts = [
    {
      name: 'Dr. Ajit Pathak',
      role: 'Dean',
      email: 'deangmcdhule@gmail.com',
      phone: ''
    },
    {
      name: 'Mr. Mahesh C. Dhayal',
      role: 'Principal',
      email: 'gmcdhule@gmail.com',
      phone: '02562-239407'
    },
    {
      name: 'Mrs. Sandhya Chaudhari',
      role: 'Administrative Officer',
      email: '',
      phone: '02562-239408'
    }
  ];

  telLink(number: string): string {
    if (!number) return '';
    return `tel:${number.replace(/[\s-]/g, '')}`;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    this.form = { name: '', email: '', phone: '', subject: 'Admission inquiry', message: '' };
    
    // Hide success message after 4 seconds
    setTimeout(() => {
      this.submitted = false;
    }, 4000);
  }
}