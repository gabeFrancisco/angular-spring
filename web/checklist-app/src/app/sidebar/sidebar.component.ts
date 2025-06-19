import { Component } from '@angular/core';
import { menuItems } from '../../resources/menuItems';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items = menuItems
}
