import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Ticket } from '../../../Core/Models/ticket';
import { TicketService } from '../../../Core/Services/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,CommonModule],
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
