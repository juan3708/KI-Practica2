import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: '',
    component: MisionVisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
