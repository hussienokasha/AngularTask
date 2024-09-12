import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Ticket } from '../../../Core/Models/ticket';
import { language, TicketService } from '../../../Core/Services/ticket.service';
import { CommonModule } from '@angular/common';
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { TooltipModule } from 'primeng/tooltip';
import {
  FileSaverDirective,
  FileSaverModule,
  FileSaverService,
} from 'ngx-filesaver';
import { TableSearchComponent } from '../table-search/table-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    MainColorDirective,
    TooltipModule,
    TableSearchComponent,
    FileSaverModule,
    TranslateModule,
    FileSaverDirective,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private tickitService: TicketService) {}
  lang: any = localStorage.getItem('language') ?? 'en';
  tickets!: Ticket[];
  ngOnInit() {
    this.getAllTickets(this.lang);
  }
  getAllTickets(lang: language) {
    this.tickets = this.tickitService.getTickets(lang);
  }
}
