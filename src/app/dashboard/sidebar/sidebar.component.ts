import { Component } from '@angular/core';
import { ShortcutsComponent } from "./shortcuts/shortcuts.component";
import { RecentPatientsComponent } from "./recent-patients/recent-patients.component";

@Component({
  selector: 'app-sidebar',
  imports: [ShortcutsComponent, RecentPatientsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
