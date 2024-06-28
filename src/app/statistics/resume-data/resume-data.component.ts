import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { CsvService } from "src/app/services/csv.service";

@Component({
  selector: "app-resume-data",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./resume-data.component.html",
  styleUrls: ["./resume-data.component.scss"],
})
export class ResumeDataComponent implements OnInit {
  @ViewChild("chartTotales", { static: true })
  chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart?: Chart<"bar">;
  totalStudents: number = 0;
  totalApproved: number = 0;
  totalFailed: number = 0;

  constructor(private csvService: CsvService) {}

  ngOnInit(): void {
    this.csvService.getStudents().subscribe({
      next: (students) => {
        this.totalStudents = students.length;
        this.totalApproved = students.filter((s) => s.Nota_Final >= 5).length;
        this.totalFailed = students.filter((s) => s.Nota_Final < 5).length;
        this.initializeChart();
      },
      error: (error) => console.error("Error fetching students:", error),
    });
  }

  initializeChart(): void {
    const context = this.chartCanvas.nativeElement.getContext("2d");
    if (context) {
      const config: ChartConfiguration<"bar"> = {
        type: "bar",
        data: {
          labels: ["Total Alumnos", "Aprobados", "Suspendidos"],
          datasets: [
            {
              label: "Resultados",
              data: [this.totalStudents, this.totalApproved, this.totalFailed],
              backgroundColor: [
                "rgba(255, 200, 33, 0.2)",
                "rgba(54, 235, 162, 0.2)",
                "rgba(255, 0, 168, 0.2)",
              ],
              borderColor: [
                "rgba(255, 200, 33, 1)",
                "rgba(54, 235, 162, 1)",
                "rgba(255, 0, 168, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      this.chart = new Chart(context, config);
    }
  }
}
