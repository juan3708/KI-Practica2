import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobNoticesComponent } from './components/job-notices/job-notices.component';

const routes: Routes = [
  {
    path: '',
    component: JobNoticesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobNoticesRoutingModule { }
