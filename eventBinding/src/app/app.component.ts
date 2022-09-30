import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'eventBinding';
  names:string[] = [
    'Fred', 'Julie', 'Sam', 'Olivia', 'Adam', 'Jennifer'
  ];
  newName:string = "";

  displayItem:Item = {
    name: "",
    price:0
  };

  changeTitle(newTitle: string): void{
    this.title = newTitle;
  }

  addName() {
    this.names.push(this.newName);
  }
}
