import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-status-selector',
  imports: [FormsModule, MatRadioModule],
  templateUrl: './status-selector.component.html',
  styleUrl: './status-selector.component.css'
})
export class StatusSelectorComponent {  
  statuses = ['Luonnos', 'Valmis', 'Hyväksytty'];
  selectedStatus = '';
}
