import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'moduleA',
    loadChildren: () =>
      import('./module-a/module-a.module').then((m) => m.ModuleAModule),
  },
  {
    path: 'moduleB',
    loadChildren: () =>
      import('./module-b/module-b.module').then((m) => m.ModuleBModule),
  },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () =>
      import('./virtual-scroll/virtual-scroll.module').then(
        (m) => m.VirtualScrollModule
      ),
  },
];
