import { Component } from '@angular/core';
import { ShortcutsComponent } from "./shortcuts/shortcuts.component";
import { RecentPatientsComponent } from "./recent-patients/recent-patients.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIconModule,
    ShortcutsComponent,
    RecentPatientsComponent
],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    
}
