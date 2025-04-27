import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WorklistItemComponent } from "./worklist-item/worklist-item.component";

@Component({
  selector: 'app-worklist',
  imports: [MatIconModule],
  templateUrl: './worklist.component.html',
  styleUrl: './worklist.component.css'
})
export class WorklistComponent {
  worklistItems = [
    { time: '09:00', name: 'Juha Lahtinen', status: 'checked', room: 'Huone 5' },
    { time: '09:45', name: 'Helena Nieminen', status: 'pending', room: 'Huone 5' },
    { time: '10:30', name: 'Marko Salminen', status: 'pending', room: 'Huone 5' },
    { time: '11:15', name: 'Laura Virtanen', status: 'pending', room: 'Huone 5' },
    { time: '12:00', name: 'Mikko Mäkelä', status: 'pending', room: 'Huone 5' }
  ];
}