import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-visit-details-form',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './visit-details-form.component.html',
  styleUrl: './visit-details-form.component.css'
})
export class VisitDetailsFormComponent {
  eventType = '';
  visitReason = '';
  additionalNotes = '';
}
