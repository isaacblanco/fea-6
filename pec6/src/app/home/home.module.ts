import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { PapaParseModule } from "ngx-papaparse";
import { CsvLoaderService } from "./csv-loader.service";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [{ path: "", component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [CsvLoaderService],
})
export class HomeModule {}
