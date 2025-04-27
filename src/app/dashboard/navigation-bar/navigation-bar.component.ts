import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  navItems = [
    { icon: 'visibility', label: 'Potilaan tarkastelu' },
    { icon: 'chat', label: 'Potilaan viestit' },
    { icon: 'calendar_month', label: 'Potilaan kalenteri' },
    { icon: 'medical_services', label: 'Potilaan palvelut' },
    { icon: 'group', label: 'Tiimin tarkastelu' },
    { icon: 'mail', label: 'Tiimin viestit' }
  ];
}