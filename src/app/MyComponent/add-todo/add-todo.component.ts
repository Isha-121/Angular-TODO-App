import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  sno!:number
  title!:string
  desc!:string
  constructor() {
    this.sno = 0;
    this.title = "";
    this.desc = "";
   }
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    const todo = {
      sno:8,
      title : this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
  
}
