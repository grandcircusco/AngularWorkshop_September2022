import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  newContact:Contact = {} as Contact;
  @Output() addContact = new EventEmitter<Contact>();
  constructor() { }

  ngOnInit(): void {
  }

  AddContact():void{
    
    let result:Contact = {} as Contact;
    result.email = this.newContact.email;
    result.name = this.newContact.name;
    result.image = this.newContact.image;
    this.addContact.emit(result);
  }

}
