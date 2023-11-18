import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestedproducts',
  templateUrl: './suggestedproducts.component.html',
  styleUrl: './suggestedproducts.component.css'
})
export class SuggestedproductsComponent implements OnInit{
  @Input() category= {
    id: 0,
    category:'',
    subcategory:'',
  };
  
  @Input() count: number = 3;
  constructor() { }

  ngOnInit(): void {
    
  }

}
