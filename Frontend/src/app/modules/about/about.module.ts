import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { SolucionesDigitalesComponent } from './components/soluciones-digitales/soluciones-digitales.component';
import { DistingueComponent } from './components/distingue/distingue.component';


@NgModule({
  declarations: [AboutComponent, MisionVisionComponent, SolucionesDigitalesComponent, DistingueComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
