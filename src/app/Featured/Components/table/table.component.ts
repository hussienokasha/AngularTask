import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Ticket } from '../../../Core/Models/ticket';
import { TicketService } from '../../../Core/Services/ticket.service';
import { CommonModule } from '@angular/common';
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { TooltipModule } from 'primeng/tooltip';
import { FileSaverDirective, FileSaverModule, FileSaverService } from 'ngx-filesaver';
import { TableSearchComponent } from '../table-search/table-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    FileSaverDirective
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

  constructor(
    private tickitService: TicketService,
    private _FileSaverService: FileSaverService,
    private _http: HttpClient
  ) {}

  tickets!: Ticket[];
  ngOnInit() {
    this.getAllTickets();
  }
  getAllTickets() {
    this.tickets = this.tickitService.getTickets();
  }

}
