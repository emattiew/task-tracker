import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component'; // Correct path to ButtonComponent

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent], // Import ButtonComponent if it's standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker';
  toggleAddTask(){
    console.log('toggle')
  }
}
