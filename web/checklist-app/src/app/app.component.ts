import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'checklist-app';
  openedSidebar = false;
  toggleSidebar(){
    this.openedSidebar = !this.openedSidebar;
  }
}
