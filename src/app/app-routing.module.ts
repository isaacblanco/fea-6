import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then((m) => m.ListModule),
  },
  {
    path: "statistics",
    loadChildren: () =>
      import("./statistics/statistics.module").then((m) => m.StatisticsModule),
  },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
