import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js";
import { StudentDTO } from "src/app/models/StudentDTO";
import { CsvService } from "src/app/services/csv.service";

@Component({
  selector: "app-gender",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./gender.component.html",
  styleUrls: ["./gender.component.scss"],
})
export class GenderComponent implements OnInit {
  @ViewChild("myChartSex") myChartCanvas!: ElementRef<HTMLCanvasElement>;
  myChart!: Chart<"doughnut", number[], string>;

  constructor(private csvService: CsvService) {}

  ngOnInit(): void {
    this.csvService.getStudents().subscribe({
      next: (students) => {
        const genderData = this.processGenderData(students);
        this.createChart(genderData);
      },
      error: (error) => console.error("Error fetching students:", error),
    });
  }

  processGenderData(students: StudentDTO[]): {
    labels: string[];
    data: number[];
  } {
    const genderCount: { [key: string]: number } = {};
    students.forEach((student) => {
      const gender = student.Sexo;
      genderCount[gender] = (genderCount[gender] || 0) + 1;
    });

    return {
      labels: Object.keys(genderCount),
      data: Object.values(genderCount),
    };
  }

  createChart(genderData: { labels: string[]; data: number[] }): void {
    const ctx = this.myChartCanvas.nativeElement.getContext("2d");
    if (ctx) {
      const config: ChartConfiguration<"doughnut", number[], string> = {
        type: "doughnut",
        data: {
          labels: genderData.labels,
          datasets: [
            {
              data: genderData.data,
              backgroundColor: [
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 0, 168, 0.5)",
                "rgba(255, 206, 33, 0.5)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 0, 168, 1)",
                "rgba(255, 206, 33, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Distribución por Género",
            },
          },
        },
      };

      this.myChart = new Chart(ctx, config);
    }
  }
}
