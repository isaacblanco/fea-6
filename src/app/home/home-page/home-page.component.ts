import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { StudentDTO } from "src/app/models/StudentDTO";
import { CsvService } from "src/app/services/csv.service";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  students: StudentDTO[] = [];
  isLoading = true;
  hasError = false;

  constructor(private csvService: CsvService) {}

  ngOnInit(): void {
    this.csvService.getStudents().subscribe({
      next: (students) => {
        this.students = students;
        console.log(this.students);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error fetching students:", error);
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  // Función trackBy para mejorar el rendimiento de *ngFor
  trackByStudent(index: number, student: StudentDTO): string {
    return student.ID_Alumno;
  }
}
