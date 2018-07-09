import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  public todos;
  public newTodo;


  constructor(public todoService : TodoService) { }

  deleteTodo(todo) {
    this.todoService.delete(todo._id).then(() => {
      return this.getTodos();
    });
  }


  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    })
  }
  addTodo(){
    this.todoService.add({ title: this.newTodo, isDone: false }).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
  }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {
    this.getTodos();
  }

}
