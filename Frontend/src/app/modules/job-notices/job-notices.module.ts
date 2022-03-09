import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobNoticesRoutingModule } from './job-notices-routing.module';
import { JobNoticesComponent } from './components/job-notices/job-notices.component';


@NgModule({
  declarations: [JobNoticesComponent],
  imports: [
    CommonModule,
    JobNoticesRoutingModule
  ]
})
export class JobNoticesModule { }
