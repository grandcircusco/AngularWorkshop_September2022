import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  //Will fill with empty/default values
  @Input() contact:Contact = {} as Contact;

  @Output() remove = new EventEmitter<Contact>();
  
  constructor() { }

  ngOnInit(): void {
  }

  removeContact():void{
    this.remove.emit(this.contact);
  }
}
