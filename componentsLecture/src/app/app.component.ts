import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentsLecture';
  newName:string = "";

  names:string[] = [
    "Matt",
    "Thiru",
    "Kenny",
    "Arianna",
    "D P",
    "Nazeem",
    "Sandhya",
    "Vasu"
  ];

  //methods
  addNameToArray():void{
    this.names.push(this.newName);
  }

  removeFromArray(name:string):void{
    let index:number = this.names.findIndex(n=> n == name);
    this.names.splice(index,1);
  }
}
