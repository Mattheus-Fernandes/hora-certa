import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "menu", loadChildren: () => import("./layout/layout.module").then(m => m.LayoutModule) },
  { path: "navegation", loadChildren: () => import("./pages/navegation/navegation.module").then(m=> m.NavegationModule) },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
