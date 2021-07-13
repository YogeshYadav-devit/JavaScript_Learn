import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyInternComponent } from './components/intern/apply-intern/apply-intern.component';
import { GetInternComponent } from './components/intern/get-intern/get-intern.component';
import { InternDetailsComponent } from './components/intern/intern-details/intern-details.component';
import { ProgressComponent } from './components/intern/progress/progress.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
