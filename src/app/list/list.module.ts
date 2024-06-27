import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPageComponent } from "./list-page/list-page.component";

const routes: Routes = [{ path: "", component: ListPageComponent }];

@NgModule({
  declarations: [ListPageComponent],
  imports: [CommonModule, ScrollingModule, RouterModule.forChild(routes)],
})
export class ListModule {}
