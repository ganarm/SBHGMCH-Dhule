import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ADMISSIONS_PAGE_DATA, COURSE_DETAILS_DATA } from '../../data/academics.data';
import { NOTICES_DATA } from '../../data/home.data';
import { Notice } from '../../data/data.models';

@Component({
  selector: 'app-important-notice-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './important-notice-modal.component.html',
  styleUrl: './important-notice-modal.component.scss',
})
export class ImportantNoticeModalComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly notice: Notice | undefined = NOTICES_DATA.find((item) => item.urgent);
  readonly programme = COURSE_DETAILS_DATA['bsc-nursing'];
  readonly availableItems = [
    ADMISSIONS_PAGE_DATA.bsc.documents.brochure.title,
    'Approved Fees',
    ADMISSIONS_PAGE_DATA.bsc.documents['seat-matrix'].title,
    'Document Checklist',
  ];
  readonly visible = signal(false);

  constructor() {
    this.visible.set(isPlatformBrowser(this.platformId) && !!this.notice);
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    if (this.visible()) {
      this.close();
    }
  }

  close(): void {
    if (!this.visible()) {
      return;
    }

    this.visible.set(false);
  }
}
