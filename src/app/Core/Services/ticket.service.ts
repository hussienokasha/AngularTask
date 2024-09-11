import { Injectable } from '@angular/core';
import { Ticket } from '../Models/ticket';

const TICKET_DATA: Ticket[] = [
  {
    id: 1,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 20,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 4,
    payCount: 3,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 2,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 30,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 2,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 3,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 30,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 4,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 40,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 5,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 50,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 6,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 60,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 7,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 70,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 8,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 80,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
  },
  {
    id: 9,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'Hussein Okasha',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 90,
    location: 'Cinema Misr, Mall of Arabia, Al-Otnan Tower, Saraya El-Qubba',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'Ticket No 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2MB
    },
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
