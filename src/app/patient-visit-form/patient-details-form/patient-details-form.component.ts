import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-patient-details-form',
  imports: [MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './patient-details-form.component.html',
  styleUrl: './patient-details-form.component.css'
})
export class PatientDetailsFormComponent {
  patientName = '';
  birthDate: string | null = null;
  patientId = '';
}
