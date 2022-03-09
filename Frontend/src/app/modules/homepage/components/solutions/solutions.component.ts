import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  soluciones;
  textos;
  constructor(private homepageService: HomepageService) {
   }

  ngOnInit(): void {
    this.homepageService.getSolutions_Services().subscribe((resp:any)=>{
      console.log(resp);
      this.soluciones=resp.soluciones_servicios.filter(soluciones => soluciones.tag === 'tag_soluciones');
      console.log(this.soluciones);
    }),
    this.homepageService.getTextos().subscribe((resp:any)=>{
      console.log(resp);
      this.textos=resp.textos.filter(textos => textos.tag === 'tag_soluciones');
      console.log(this.textos);
    })
  }
}
