import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-patients',
  imports: [],
  templateUrl: './recent-patients.component.html',
  styleUrl: './recent-patients.component.css'
})
export class RecentPatientsComponent {
  recentPatients = [
    'Juha Lahtinen',
    'Helena Nieminen',
    'Marko Salminen',
    'Laura Virtanen',
    'Mikko Mäkelä'
  ];
}
