import { Component } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table-search',
  standalone: true,
  imports: [
    InputIconModule,
    InputSwitchModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './table-search.component.html',
  styleUrl: './table-search.component.css',
})
export class TableSearchComponent {
  constructor(private translate: TranslateService) {}
  lang = localStorage.getItem("language")??'en';
  switch: boolean = true;
  getTranslation(): string {
    return this.translate.instant(
      this.switch ? 'search.enabled' : 'search.disabled'
    );
  }
}
