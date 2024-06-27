import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingSlowComponent } from '../Shared/loading-slow/loading-slow.component';
import { ComponentMb1Component } from './component-mb-1/component-mb-1.component';
import { ModuleBRoutingModule } from './module-b-routing.module';

@NgModule({
  declarations: [ComponentMb1Component, LoadingSlowComponent],
  imports: [CommonModule, ModuleBRoutingModule],
})
export class ModuleBModule {}
