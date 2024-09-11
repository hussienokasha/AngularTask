import { Component } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-search',
  standalone: true,
  imports: [InputIconModule,InputSwitchModule,IconFieldModule,InputTextModule,FormsModule],
  templateUrl: './table-search.component.html',
  styleUrl: './table-search.component.css'
})
export class TableSearchComponent {
  switch: boolean = true;

}
