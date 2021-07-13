
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyInternComponent } from './apply-intern/apply-intern.component';
import { GetInternComponent } from './get-intern/get-intern.component';
import { InternDetailsComponent } from './intern-details/intern-details.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {path:'',redirectTo:'interns', pathMatch: 'full' },
  {path: 'interns/add', component:ApplyInternComponent},
  {path: 'interns', component:GetInternComponent},
  {path:'interns/:id', component:InternDetailsComponent},
  {path:'interns/:id/progress', component:ProgressComponent}
 
  // {path: 'interns', children:[
  //   {path: '', component:GetInternComponent},
  //   {path: 'add', component:ApplyInternComponent},
  //   {path: ':id', component:InternDetailsComponent},
  //   {path: ':id/progress', component:ProgressComponent}
  // ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }

