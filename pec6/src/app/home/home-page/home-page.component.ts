import { Component, OnInit } from "@angular/core";
import { CsvLoaderService, StudentDTO } from "./../csv-loader.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  students: StudentDTO[] = [];
  constructor(private csvLoaderService: CsvLoaderService) {}

  ngOnInit(): void {
    this.csvLoaderService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }
}
