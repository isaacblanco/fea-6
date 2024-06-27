import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { GenderComponent } from "./gender/gender.component";
import { GeneralResultsComponent } from "./general-results/general-results.component";
import { ResumeDataComponent } from "./resume-data/resume-data.component";
import { StatisticsPageComponent } from "./statistics-page/statistics-page.component";

const routes: Routes = [{ path: "", component: StatisticsPageComponent }];

@NgModule({
  declarations: [
    StatisticsPageComponent,
    ResumeDataComponent,
    GenderComponent,
    GeneralResultsComponent,
  ],
  imports: [CommonModule, ChartsModule, RouterModule.forChild(routes)],
})
export class StatisticsModule {}
