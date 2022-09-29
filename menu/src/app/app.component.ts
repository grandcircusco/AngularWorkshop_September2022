import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Menu:MenuItem[] = [
    {
      name:"Chicken Fingers",
      category:"Dinner",
      price: 11.99
    },
    {
      name:"Pizza",
      category:"Dinner",
      price: 11.99
    },
    {
      name:"Wings",
      category:"Sides",
      price: 8.99
    },
    {
      name:"Breadsticks",
      category:"Sides",
      price: 4.99
    },
    {
      name:"Ceasar Salad",
      category:"Salads",
      price: 5.99
    },
    {
      name:"Cinnamon Roll",
      category:"Dessert",
      price: 8.99
    },
  ];
}
