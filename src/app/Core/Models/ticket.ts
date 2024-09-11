export interface Ticket {
  id: number;
  user: {
    img: string;
    userName: string;
    phone: string;
  };
  ticketCode: string;
  price: number;
  location: string;
  numberOfPersons: number;
  payCount: number;
  ticketFile: string;
}
