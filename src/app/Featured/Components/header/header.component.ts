import { Component, output } from '@angular/core';
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { language } from '../../../Core/Services/ticket.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainColorDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentLang: any = localStorage.getItem('language') ?? 'en';
  languageChange = output<language>();
  constructor(private translate: TranslateService) {
    this.translate.use(this.currentLang);
    this.setDirection(this.currentLang);
  }

  switchLang() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', this.currentLang);
    this.translate.use(this.currentLang);
    this.setDirection(this.currentLang);
    this.languageChange.emit(this.currentLang);
  }
  private setDirection(lang: string) {
    const dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', dir);
  }
}
