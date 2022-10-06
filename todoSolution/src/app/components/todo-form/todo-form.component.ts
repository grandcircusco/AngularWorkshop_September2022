import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  formTask = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    console.log(this.formTask);
    // clear form
    this.formTask = "";
  }

}
