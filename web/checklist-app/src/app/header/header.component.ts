import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menuItems } from '../../resources/menuItems';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  @Output() sidebarToogle = new EventEmitter<void>();
  items = menuItems;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleSidebar(){
    this.sidebarToogle.emit()
  }

}
