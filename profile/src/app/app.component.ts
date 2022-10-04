import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  user:User = {
    name: "Justin",
    age:25,
    favoriteColor: "Black",
    birthday: new Date,
    caffeine: "Water"
  };

  displayEdit:boolean = false;

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }
}
