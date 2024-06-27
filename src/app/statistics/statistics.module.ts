import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StatisticsRoutingModule } from "./statistics-routing.module";
import { StatisticsComponent } from "./statistics.component";

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, StatisticsRoutingModule],
})
export class StatisticsModule {}
