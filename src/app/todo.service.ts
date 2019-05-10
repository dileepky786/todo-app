import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string = 'https://jsonplaceholder.typicode.com/todos';
  urlLimit: string = '?_limit=10';

  constructor( private http: HttpClient ) { }

  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${this.url}${this.urlLimit}`);
    
  }

  getTodo(id:number): Observable<Todo>{

    return this.http.get<Todo>(`${this.url}/${id}`);

  }
}
