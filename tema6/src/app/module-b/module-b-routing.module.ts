import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentMb1Component } from './component-mb-1/component-mb-1.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentMb1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleBRoutingModule {}
