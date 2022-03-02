import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.scss']
})
export class MisionVisionComponent implements OnInit {
  mision;
  vision;
  constructor(private aboutServices: AboutService) { }

  //cada vez que se crea ESE componente se inicializa todo lo que esta dentro del ngOnInit.
  ngOnInit(): void {
    this.aboutServices.getMisionVision().subscribe((resp: any)=>{
      console.log(resp);
      this.mision = resp.textos.find(mision => mision.tag === 'tag_mision');
      console.log(this.mision);
      this.vision = resp.textos.find(vision => vision.tag === 'tag_vision');
      console.log(this.vision);
    })
  }
}