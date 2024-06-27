import { Component } from "@angular/core";
import { GenderComponent } from "./../gender/gender.component";
import { GeneralResultsComponent } from "./../general-results/general-results.component";
import { ResumeDataComponent } from "./../resume-data/resume-data.component";

@Component({
  selector: "app-statistics-page",
  standalone: true,
  imports: [ResumeDataComponent, GenderComponent, GeneralResultsComponent],
  templateUrl: "./statistics-page.component.html",
  styleUrls: ["./statistics-page.component.scss"],
})
export class StatisticsPageComponent {}
