import { Component } from '@angular/core';
import { MainColorDirective } from '../../../Core/Directives/main-color.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainColorDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
