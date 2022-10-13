import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  displayPerson:Person = {} as Person;

  constructor(private route:ActivatedRoute, private personService: PeopleService) { }

  ngOnInit(): void {
    //Number( ) parses string to number
    let id: number = Number(this.route.snapshot.paramMap.get("id"))
    console.log(id);

    this.displayPerson = this.personService.getStaffById(id);
    console.log(this.displayPerson);
  }

}
