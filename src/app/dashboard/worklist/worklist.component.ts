import { Component } from '@angular/core';
import { WorklistItemComponent } from "./worklist-item/worklist-item.component";

@Component({
  selector: 'app-worklist',
  imports: [WorklistItemComponent],
  templateUrl: './worklist.component.html',
  styleUrl: './worklist.component.css'
})
export class WorklistComponent {

}
