import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Papa } from "ngx-papaparse";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface StudentDTO {
  name: string;
  sex: string;
  score: number;
  absences: number;
}

@Injectable({
  providedIn: "root",
})
export class CsvLoaderService {
  constructor(private http: HttpClient, private papa: Papa) {}

  getStudents(): Observable<StudentDTO[]> {
    return this.http
      .get("/assets/notas_alumnos.csv", { responseType: "text" })
      .pipe(
        map((csv) => {
          const parsed = this.papa.parse<>(csv, {
            header: true,
            skipEmptyLines: true,
          });
          return parsed.data;
        })
      );
  }
}
