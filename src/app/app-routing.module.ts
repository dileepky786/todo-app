import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component:TodoDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todos', component: TodosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
