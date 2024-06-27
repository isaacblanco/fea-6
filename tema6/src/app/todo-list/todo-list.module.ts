import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoListRoutingModule, HttpClientModule],
  providers: [TaskService],
  exports: [TodoListComponent],
})
export class TodoListModule {}
