import { Component, OnInit } from "@angular/core";
import { CsvLoaderService, StudentDTO } from "./../../home/csv-loader.service";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.css"],
})
export class ListPageComponent implements OnInit {
  students: StudentDTO[] = [];

  constructor(private csvLoaderService: CsvLoaderService) {}

  ngOnInit(): void {
    this.csvLoaderService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }
}
