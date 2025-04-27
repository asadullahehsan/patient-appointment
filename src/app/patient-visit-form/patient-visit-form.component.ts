import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PatientDetailsFormComponent } from "./patient-details-form/patient-details-form.component";
import { VisitDetailsFormComponent } from "./visit-details-form/visit-details-form.component";
import { StatusSelectorComponent } from "./status-selector/status-selector.component";
import { DoctorAppointmentInfoComponent } from "./doctor-appointment-info/doctor-appointment-info.component";

@Component({
  selector: 'app-patient-visit-form',
  imports: [MatIconModule, DatePipe, MatFormFieldModule, MatRadioModule, FormsModule, MatInputModule, PatientDetailsFormComponent, VisitDetailsFormComponent, StatusSelectorComponent, DoctorAppointmentInfoComponent],
  templateUrl: './patient-visit-form.component.html',
  styleUrl: './patient-visit-form.component.css'
})
export class PatientVisitFormComponent {  
  doctor = 'Tuomas Veikko Kerola';
  appointmentDate = new Date(2024, 9, 29, 14, 49); // month is 0-indexed
}
