import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdmissionDocumentTab, ADMISSIONS_PAGE_DATA } from '../../data/academics.data';

type AdmissionProgramTab = 'bsc' | 'gnm';

interface DocumentTabOption {
  key: AdmissionDocumentTab | 'fees' | 'documents';
  label: string;
}

const DOCUMENT_TABS: DocumentTabOption[] = [
  { key: 'brochure', label: 'Admission Brochure' },
  { key: 'fees', label: 'Approved Fees' },
  { key: 'documents', label: 'Documents Required' },
  { key: 'seat-matrix', label: 'Seat Matrix' },
  { key: 'provisional-short-list', label: 'Provisional Short List' },
  { key: 'institutional-round', label: 'Institutional Round' },
];

function isAdmissionDocumentTab(value: DocumentTabOption['key']): value is AdmissionDocumentTab {
  return value !== 'fees' && value !== 'documents';
}

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
})
export class AdmissionsComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly data = ADMISSIONS_PAGE_DATA;
  readonly documentTabs = DOCUMENT_TABS;
  readonly activeProgram = signal<AdmissionProgramTab>('bsc');
  readonly activeDocumentTab = signal<DocumentTabOption['key']>('brochure');
  readonly currentPdf = computed(() => {
    const key = this.activeDocumentTab();
    if (!isAdmissionDocumentTab(key)) {
      return undefined;
    }

    const pdf = this.data.bsc.documents[key];
    return {
      ...pdf,
      safeSrc: this.sanitizer.bypassSecurityTrustResourceUrl(pdf.src),
    };
  });

  selectProgram(program: AdmissionProgramTab): void {
    this.activeProgram.set(program);
  }

  selectDocument(tab: DocumentTabOption['key']): void {
    this.activeDocumentTab.set(tab);
  }
}