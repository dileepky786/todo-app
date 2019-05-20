import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  todos: Todo[];

  constructor( private todoService: TodoService, private location: Location ) { }

  goBack(): void{

    this.location.back();
  }


  saveTodo(title: string): void{

    this.todoService.addTodo({ title } as Todo).subscribe( () => this.goBack());
  }

  ngOnInit() {
  }

}
