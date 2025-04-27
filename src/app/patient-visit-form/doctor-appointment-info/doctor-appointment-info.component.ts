import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-doctor-appointment-info',
  imports: [MatFormFieldModule, MatIconModule, DatePipe, MatInputModule],
  templateUrl: './doctor-appointment-info.component.html',
  styleUrl: './doctor-appointment-info.component.css'
})
export class DoctorAppointmentInfoComponent {
  doctor = 'Tuomas Veikko Kerola';
  appointmentDate = new Date(2024, 9, 29, 14, 49); // month is 0-indexed
}
