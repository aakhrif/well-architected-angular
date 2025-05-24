import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/ui/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'well-architected-angular';

  save() {
    console.log('Save button clicked');
    // Add your save logic here
  }

  deleteItem() {
    console.log('Delete triggered'); // Test log
    // Your delete logic here
  }
}
