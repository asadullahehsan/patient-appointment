import { Component } from '@angular/core';

@Component({
  selector: 'app-form-actions',
  imports: [],
  templateUrl: './form-actions.component.html',
  styleUrl: './form-actions.component.css'
})
export class FormActionsComponent {

  onSave() {
    console.log('Tapahtuma tallennettu (dummy save)');
  }

  onClose() {
    console.log('Lomake suljettu (dummy close)');
  }
}
