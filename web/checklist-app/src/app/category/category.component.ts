import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  public variable = "Some good value!"
  public isDisabled = false;
  public myBindingProperty: string = "Some value"
  ngOnInit(): void {
    console.log("component init...")
  }

  public someFunction(input: string){
    console.log(input)
    if(this.isDisabled) this.isDisabled = false
    else this.isDisabled = true;
  }
}
