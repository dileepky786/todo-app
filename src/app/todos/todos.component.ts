import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor( private todoService: TodoService) { }

  ngOnInit() {

    this.getTodos();
  }

  getTodos(): void {

    this.todoService.getTodos().subscribe(todos => this.todos = todos);

  }
}
