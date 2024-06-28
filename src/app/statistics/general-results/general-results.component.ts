import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { StudentDTO } from "src/app/models/StudentDTO";
import { CsvService } from "src/app/services/csv.service";

@Component({
  selector: "app-general-results",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./general-results.component.html",
  styleUrls: ["./general-results.component.scss"],
})
export class GeneralResultsComponent implements OnInit {
  @ViewChild("chartAprobados", { static: true })
  chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart?: Chart<"bar">;

  constructor(private csvService: CsvService) {}

  ngOnInit(): void {
    this.csvService.getStudents().subscribe({
      next: (students) => {
        const resultsData = this.processResultsData(students);
        this.createChart(resultsData);
      },
      error: (error) => console.error("Error fetching students:", error),
    });
  }

  processResultsData(students: StudentDTO[]): {
    labels: string[];
    percentages: number[];
  } {
    const totalStudents = students.length;
    const totalApproved = students.filter(
      (student) => student.Nota_Final >= 5
    ).length;
    const totalFailed = students.filter(
      (student) => student.Nota_Final < 5
    ).length;
    const approvedPercentage = (totalApproved / totalStudents) * 100;
    const failedPercentage = (totalFailed / totalStudents) * 100;

    return {
      labels: ["Aprobados", "Suspendidos"],
      percentages: [approvedPercentage, failedPercentage],
    };
  }

  createChart(resultsData: { labels: string[]; percentages: number[] }): void {
    const ctx = this.chartCanvas.nativeElement.getContext("2d");
    if (ctx) {
      const config: ChartConfiguration<"bar", number[], string> = {
        type: "bar",
        data: {
          labels: resultsData.labels,
          datasets: [
            {
              label: "Porcentaje de Estudiantes",
              data: resultsData.percentages,
              backgroundColor: [
                "rgba(33, 99, 66, 0.2)", // Color para "Aprobados"
                "rgba(255, 0, 168, 0.2)", // Color para "Suspendidos"
              ],
              borderColor: [
                "rgba(33, 99, 66, 1)", // Color del borde para "Suspendidos"
                "rgba(255, 0, 168, 1)", // Color del borde para "Aprobados"
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: false,
                text: "Porcentaje de Estudiantes",
              },
              ticks: {
                callback: function (value) {
                  return value + "%";
                },
              },
            },
          },
        },
      };

      this.chart = new Chart(ctx, config);
    }
  }
}
