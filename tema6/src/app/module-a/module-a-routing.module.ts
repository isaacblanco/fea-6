import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentMa1Component } from './component-ma-1/component-ma-1.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentMa1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleARoutingModule {}
