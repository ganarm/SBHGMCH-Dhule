import { Component } from '@angular/core';
import { InformationPageComponent } from '../information-page/information-page.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [InformationPageComponent],
  template: '<app-information-page />',
})
export class GalleryComponent {}
