import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TaskService } from '../todo-list/task.service';
import { TodoListVirtualScrollComponent } from './todo-list-virtual-scroll/todo-list-virtual-scroll.component';
import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';

@NgModule({
  declarations: [TodoListVirtualScrollComponent],
  imports: [
    ScrollingModule,
    CommonModule,
    VirtualScrollRoutingModule,
    HttpClientModule,
  ],
  providers: [TaskService],
  exports: [TodoListVirtualScrollComponent],
})
export class VirtualScrollModule {}
