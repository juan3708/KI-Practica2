import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { SolucionesDigitalesComponent } from './components/soluciones-digitales/soluciones-digitales.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: '',
    component: MisionVisionComponent
  },
  {
    path: '',
    component: SolucionesDigitalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
