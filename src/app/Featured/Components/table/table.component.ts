import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Ticket } from '../../../Core/Models/ticket';
import { TicketService } from '../../../Core/Services/ticket.service';
import { CommonModule } from '@angular/common';
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,CommonModule,MainColorDirective,TooltipModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private tickitService: TicketService) {}

  tickets!: Ticket[];
  ngOnInit() {
    this.getAllTickets();
  }
  getAllTickets() {
    this.tickets = this.tickitService.getTickets();
  }
}
