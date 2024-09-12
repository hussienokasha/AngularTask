import { Component } from '@angular/core';
import { MainBackgroundDirective } from '../../../Core/Directives/main-background.directive';
import { TooltipModule } from 'primeng/tooltip';
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    MainBackgroundDirective,
    TooltipModule,
    MainColorDirective,
    ToastModule,
    QRCodeModule,
    TranslateModule
  ],
  templateUrl: './ticket.component.html',
  providers: [MessageService],
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  constructor(
    private messageService: MessageService,

  ) {}
  ticketLink: string = 'www.tazkty.com/473847';
  copyLink() {
    navigator.clipboard.writeText(this.ticketLink).then(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Copy',
        detail: 'Link Copied to Clipboard',
      });
    });
  }
}
