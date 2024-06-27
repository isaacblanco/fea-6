import { Component, OnInit } from "@angular/core";
import { ChartData, ChartType } from "chart.js";
import { CsvLoaderService } from "../../home/csv-loader.service";

@Component({
  selector: "app-gender",
  templateUrl: "./gender.component.html",
  styleUrls: ["./gender.component.css"],
})
export class GenderComponent implements OnInit {
  public genderChartData: ChartData<"pie", number[], string[]> = {
    labels: [["Masculino"], ["Femenino"]],
    datasets: [],
  };
  public genderChartType: ChartType = "pie";

  constructor(private csvLoaderService: CsvLoaderService) {}

  ngOnInit(): void {
    this.csvLoaderService.getStudents().subscribe((data) => {
      const maleCount = data.filter((student) => student.sex === "M").length;
      const femaleCount = data.filter((student) => student.sex === "F").length;
      this.genderChartData.datasets = [
        {
          data: [maleCount, femaleCount],
        },
      ];
    });
  }
}
