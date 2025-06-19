import { ChecklistsComponent } from './checklists/checklists.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "checklists", component: ChecklistsComponent
  },
  {
    path: "**", component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
