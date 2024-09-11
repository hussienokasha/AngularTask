import { Injectable } from '@angular/core';
import { Ticket } from '../Models/ticket';

const TICKET_DATA: Ticket[] = [
  {
    id: 1,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone:'01129542518'
    },
    ticketCode: 'C-101',
    price: 20,
    location: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: 'Ticket No 45',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  getTickets(): Ticket[] {
    return TICKET_DATA;
  }
}
