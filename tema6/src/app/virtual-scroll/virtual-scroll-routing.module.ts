import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListVirtualScrollComponent } from './todo-list-virtual-scroll/todo-list-virtual-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListVirtualScrollComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualScrollRoutingModule {}
