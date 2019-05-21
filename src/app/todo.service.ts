import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from './todo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  url: string = 'http://localhost:8081/todos';

  constructor( private http: HttpClient ) { }

  addTodo(todo: Todo): Observable<Todo[]> {

    return this.http.post<Todo[]>(this.url,todo,httpOptions);

  }

  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${this.url}`);
    
  }

  getTodo(id: number): Observable<Todo>{

    return this.http.get<Todo>(`${this.url}/${id}`);

  }

  updateTodo(todo: Todo): Observable<any>{

     return this.http.put<Todo>(this.url,todo,httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any>{

      return this.http.delete<Todo>(`${this.url}/${todo.id}`,httpOptions)
  }

  search(title: string): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${this.url}/search?q=${title}`)

  }

}
