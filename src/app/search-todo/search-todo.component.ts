import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {


  todos: Todo[];

  constructor( private todoService: TodoService) { }

  search(title: string): void{

    this.todoService.search(title).subscribe(todos => this.todos = todos )

  }

  ngOnInit() {
  }

}
