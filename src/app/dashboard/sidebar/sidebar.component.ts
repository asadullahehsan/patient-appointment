import { Component } from '@angular/core';
import { ShortcutsComponent } from "./shortcuts/shortcuts.component";
import { RecentPatientsComponent } from "./recent-patients/recent-patients.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  shortcuts = [
    { icon: 'assignment', label: 'Sairaalalähete' },
    { icon: 'edit_note', label: 'Tekstin lisäys' },
    { icon: 'content_copy', label: 'Kopioi viimeisin' },
    { icon: 'person_add', label: 'Lisää uusi potilas' }
  ];

  recentPatients = [
    'Juha Lahtinen',
    'Helena Nieminen',
    'Marko Salminen',
    'Laura Virtanen',
    'Mikko Mäkelä'
  ];
}
