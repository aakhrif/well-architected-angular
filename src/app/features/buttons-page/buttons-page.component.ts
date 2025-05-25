import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-buttons-page',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './buttons-page.component.html',
  styleUrl: './buttons-page.component.scss'
})
export class ButtonsPageComponent {
  save() {
    console.log('Save button clicked');
    // Add your save logic here
  }

  deleteItem() {
    console.log('Delete triggered'); // Test log
    // Your delete logic here
  }
}
