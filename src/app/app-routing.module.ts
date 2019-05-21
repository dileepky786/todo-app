import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SearchTodoComponent } from './search-todo/search-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: TodoDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'addTodo', component: AddTodoComponent },
  { path: 'todos/search', component: SearchTodoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
