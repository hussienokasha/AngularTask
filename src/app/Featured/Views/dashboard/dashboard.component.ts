import { Component } from '@angular/core';
import { TableComponent } from "../../Components/table/table.component";
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { HeaderComponent } from "../../Components/header/header.component";
import { TicketComponent } from "../../Components/ticket/ticket.component";
import { ChartComponent } from "../../Components/chart/chart.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, MainColorDirective, HeaderComponent, TicketComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
