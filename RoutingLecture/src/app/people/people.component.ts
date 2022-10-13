import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  staff:Person[] = [];

  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
    //Not an api, no subscribe needed
    this.staff = this.peopleService.getAllStaff();

  }

}
