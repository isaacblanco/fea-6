import { Component } from "@angular/core";
import { ResumeDataComponent } from "../resume-data/resume-data.component";
import { GenderComponent } from "./../gender/gender.component";
import { GeneralResultsComponent } from "./../general-results/general-results.component";

@Component({
  selector: "app-statistics-page",
  templateUrl: "./statistics-page.component.html",
  styleUrls: ["./statistics-page.component.scss"],
  standalone: true,
  imports: [GeneralResultsComponent, GenderComponent, ResumeDataComponent],
})
export class StatisticsPageComponent {}
