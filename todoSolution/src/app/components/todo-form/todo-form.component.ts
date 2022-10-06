import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() save = new EventEmitter<Todo>();

  formTask = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const newTodo: Todo = {
      task: this.formTask,
      completed: false
    };
    this.save.emit(newTodo);
    // clear form
    this.formTask = "";
  }

}
