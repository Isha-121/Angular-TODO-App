import { Component, EventEmitter, Input,Output } from '@angular/core';
import {Todo} from 'src/app/Todo'
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
 @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("On click has been triggered");
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
    console.log("On check box click has been triggered");
  }
}
