import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Papa } from "ngx-papaparse";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { StudentDTO } from "../models/StudentDTO";

@Injectable({
  providedIn: "root",
})
export class CsvService {
  constructor(private http: HttpClient, private papa: Papa) {}

  getStudents(): Observable<StudentDTO[]> {
    return this.http
      .get("/assets/notas_alumnos.csv", { responseType: "text" })
      .pipe(
        map((csvData: string) => {
          // Parsear el CSV con ngx-papaparse
          const parsedData = this.papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
              console.log("Parsed: ", result);
            },
          });

          // Validar si el parseo fue exitoso
          if (parsedData.errors.length > 0) {
            throw new Error(
              "Error parsing CSV: " + parsedData.errors[0].message
            );
          }

          // Convertir los datos parseados a StudentDTO[]
          return parsedData.data.map((item: any) => ({
            ID_Alumno: item.ID_Alumno,
            Nombre: item.Nombre,
            Apellidos: item.Apellidos,
            Sexo: item.Sexo,
            Nota_Final: parseFloat(item.Nota_Final),
            Faltas_Asistencia: parseInt(item.Faltas_Asistencia, 10),
          })) as StudentDTO[];
        })
      );
  }
}
