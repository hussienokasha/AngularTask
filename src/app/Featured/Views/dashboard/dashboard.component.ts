import { Component } from '@angular/core';
import { TableComponent } from "../../Components/table/table.component";
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';
import { HeaderComponent } from "../../Components/header/header.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, MainColorDirective, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
