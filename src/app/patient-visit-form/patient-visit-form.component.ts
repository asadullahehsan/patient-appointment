import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PatientDetailsFormComponent } from "./patient-details-form/patient-details-form.component";

@Component({
  selector: 'app-patient-visit-form',
  imports: [MatIconModule, DatePipe, MatFormFieldModule, MatRadioModule, FormsModule, MatInputModule, PatientDetailsFormComponent],
  templateUrl: './patient-visit-form.component.html',
  styleUrl: './patient-visit-form.component.css'
})
export class PatientVisitFormComponent {
  statuses = ['Luonnos', 'Valmis', 'Hyväksytty'];
  selectedStatus = '';
  doctor = 'Tuomas Veikko Kerola';
  appointmentDate = new Date(2024, 9, 29, 14, 49); // month is 0-indexed
}
