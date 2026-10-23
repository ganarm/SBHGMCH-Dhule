import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { getInformationPage } from '../../data/information-page.data';

@Component({
  selector: 'app-information-page',
  standalone: true,
  templateUrl: './information-page.component.html',
  styleUrl: './information-page.component.scss',
})
export class InformationPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly pageKey = toSignal(
    this.route.data.pipe(map((data) => data['pageKey'])),
    { initialValue: this.route.snapshot.data['pageKey'] },
  );
  readonly page = computed(() => {
    const key = this.pageKey();
    return typeof key === 'string' ? getInformationPage(key) : undefined;
  });
}
