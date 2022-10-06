import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [
    { task: "feed the cactus", completed: false },
    { task: "learn to juggle" , completed: true },
    { task: "write thank-you notes", completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
