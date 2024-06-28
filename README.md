# Pec6

Mejoras sugeridas:

## Optimizaciónes

- lazy loading
- ngfor + trackby
- virtual scrolling
- control flow
- changedetection on push
- defer block
- defect trigger

**lazy loading (carga diferida)**

Ver app-routing.module.ts

**nfgor + trackby** en HOME y List

```javascript
*ngFor="let student of students; let i = index; trackBy: trackByStudent"

trackByStudent(index: number, student: StudentDTO): string {
    return student.ID_Alumno;
  }

    *cdkVirtualFor="
      let student of students;
      let i = index;
      trackBy: trackByStudent
    "
```

**virtual scrolling**

Uso en list

```html
<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
  <div
    *cdkVirtualFor="
      let student of students;
      let i = index;
      trackBy: trackByStudent
    "
```

**control flow**

Un ejemplo de alternativa para el if

```
<div *ngIf="students.length > 0; else noStudents">
```

Se ha incluido ajustes de loading para mejorar la espera.

**chagedetection on push** aplicado a las estadísticas

```javascript
changeDetection: ChangeDetectionStrategy.OnPush,
```

**defer block** y **defect trigger**

No aplicados

## Información por defecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
