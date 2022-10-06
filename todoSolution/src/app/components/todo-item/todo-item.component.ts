import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {} as Todo;
  @Output() complete: EventEmitter<void> = new EventEmitter<void>();
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleComplete(): void {
    this.complete.emit();
  }

  handleRemove(): void {
    this.remove.emit();
  }

}
