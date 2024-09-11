import { Component } from '@angular/core';
import { MainBackgroundDirective } from '../../../Core/Directives/main-background.directive';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [MainBackgroundDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {

}
