import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shortcuts',
  imports: [MatIconModule],
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.css'
})
export class ShortcutsComponent {
  shortcuts = [
    { icon: 'assignment', label: 'Sairaalalähete' },
    { icon: 'edit_note', label: 'Tekstin lisäys' },
    { icon: 'content_copy', label: 'Kopioi viimeisin' },
    { icon: 'person_add', label: 'Lisää uusi potilas' }
  ];
}
