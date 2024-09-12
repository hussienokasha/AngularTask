import { Injectable } from '@angular/core';
import { Ticket } from '../Models/ticket';
export type language = 'en' | 'ar';
const TICKET_DATA_EN: Ticket[] = [
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
    price: 10,
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
const TICKET_DATA_AR: Ticket[] = [
  {
    id: 1,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 20,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 4,
    payCount: 3,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 2,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 10,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 2,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 3,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 30,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 4,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 40,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 5,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 50,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 6,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 60,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 7,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 70,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 8,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 80,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
  {
    id: 9,
    user: {
      img: 'assets/user-pic.jpg',
      userName: 'حسين عكاشة',
      phone: '01129542518',
    },
    ticketCode: 'C-101',
    price: 90,
    location: 'سينما مصر، مول العرب، برج الأوطان، سراي القبة',
    numberOfPersons: 1,
    payCount: 1,
    ticketFile: {
      fileName: 'تذكرة رقم 45.pdf',
      fileType: 'PDF',
      fileSize: 9, // 2 ميجابايت
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  getTickets(lang: language): Ticket[] {
    return lang == 'en' ? TICKET_DATA_EN : TICKET_DATA_AR;
  }
}
