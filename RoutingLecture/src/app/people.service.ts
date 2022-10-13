import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private staff:Person[] = [
    {
      id:1,
      name:"David",
      role:"Manager"
    },
    {
      id:2,
      name:"Nicholas",
      role:"CEO"
    },
    {
      id:3,
      name:"Justin",
      role: "Janitor"
    }
  ];

  constructor() { }

  getAllStaff():Person[]{
    return this.staff;
  }

  getStaffById(id:number):Person{
    // let index = this.staff.findIndex(s => s.id == id);
    // return this.staff[index];
    return this.staff.filter(s => s.id == id)[0];
  }
}
