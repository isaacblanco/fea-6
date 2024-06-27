import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentMa1Component } from './component-ma-1/component-ma-1.component';
import { ModuleARoutingModule } from './module-a-routing.module';

@NgModule({
  declarations: [ComponentMa1Component],
  imports: [CommonModule, ModuleARoutingModule],
})
export class ModuleAModule {}
