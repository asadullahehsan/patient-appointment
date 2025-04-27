import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { WorklistComponent } from './worklist/worklist.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [TopBarComponent, NavigationBarComponent, WorklistComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
