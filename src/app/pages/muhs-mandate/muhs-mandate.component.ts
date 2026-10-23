import { Component } from '@angular/core';
import { InformationPageComponent } from '../information-page/information-page.component';

@Component({
  selector: 'app-muhs-mandate',
  standalone: true,
  imports: [InformationPageComponent],
  template: '<app-information-page />',
})
export class MuhsMandateComponent {}
