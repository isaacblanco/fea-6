import { Component, OnInit } from "@angular/core";
import { ChartData, ChartType } from "chart.js";
import { CsvLoaderService } from "../../home/csv-loader.service";

@Component({
  selector: "app-general-results",
  templateUrl: "./general-results.component.html",
  styleUrls: ["./general-results.component.css"],
})
export class GeneralResultsComponent implements OnInit {
  public generalResultsChartData: ChartData<"bar", number[], string[]> = {
    labels: ["Aprobados", "Suspendidos"],
    datasets: [],
  };
  public generalResultsChartType: ChartType = "bar";

  constructor(private csvLoaderService: CsvLoaderService) {}

  ngOnInit(): void {
    this.csvLoaderService.getStudents().subscribe((data) => {
      const approvedCount = data.filter((student) => student.score >= 5).length;
      const failedCount = data.filter((student) => student.score < 5).length;
      this.generalResultsChartData.datasets = [
        {
          label: "Resultados Generales",
          data: [approvedCount, failedCount],
        },
      ];
    });
  }
}
