import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: Todo;

  constructor(  private activatedRoute: ActivatedRoute,
                private location: Location,
                private todoService: TodoService) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
                    .subscribe(todo => this.todo = todo)
  }

  goBack(): void{

    this.location.back();
  }

  saveTodo(): void {

    this.todoService.updateTodo(this.todo).subscribe(() => this.goBack());
  }



}
