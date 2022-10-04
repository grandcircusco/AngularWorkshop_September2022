import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts';

  contacts:Contact[] = [
    {
      name:"Justin",
      email:"Justin@grandcircus.co",
      image: "https://i.pravatar.cc/150?img=55"
    },
    {
      name:"Nicholas",
      email:"Nicholas@grandcircus.co",
      image: "https://i.pravatar.cc/150?img=3"
    },
  ];

  addContact(newContact:Contact):void{
    this.contacts.push(newContact);
  }

  removeContact(contact:Contact):void{
    let index:number = this.contacts.findIndex(c => c.email == contact.email && c.image == contact.image && c.name == contact.name);
    this.contacts.splice(index,1);
  }
}
