import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/ui/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'well-architected-angular';
}
