import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public items = [
    {
      id: 1, description: "PC"
    },
    {
      id: 2, description: "Notebook"
    },
    {
      id: 3, description: "Server"
    },
    {
      id: 4, description: "NAS"
    },
  ]
  public showTitle = true;
  public changeTitle(){
    if(this.showTitle) this.showTitle = false
    else this.showTitle = true
  }
}
