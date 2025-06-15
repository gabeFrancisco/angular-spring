import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  public stringInterpolation = "Some test string!";
  constructor() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
