import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worklist-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './worklist-item.component.html',
  styleUrls: ['./worklist-item.component.css']
})
export class WorklistItemComponent {
  @Input() name = '';
  @Input() time = '';
  @Input() room = '';
  @Input() status: 'checked' | 'pending' = 'pending';
}
