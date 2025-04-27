import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PatientVisitFormComponent } from './patient-visit-form/patient-visit-form.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, PatientVisitFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage: 'dashboard' | 'patientVisitForm' = 'dashboard'; // default

  navigateTo(page: 'dashboard' | 'patientVisitForm') {
    this.currentPage = page;
  }
}
