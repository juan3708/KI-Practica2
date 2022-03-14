import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  solutionsByText;
  constructor(private homepageService: HomepageService) {}

  ngOnInit(): void {
    this.homepageService.getSolutions_Services().subscribe((solutions: any) => {
      this.homepageService.getTextos().subscribe((text: any) => {
        let textos = text.textos.filter(
          (textos) => textos.tag === 'tag_soluciones'
        );
        let soluciones = solutions.soluciones_servicios.filter(
          (soluciones) => soluciones.tag === 'tag_soluciones'
        );
        this.solutionsByText = soluciones.map((solution) => {
          let textFound = textos.find(
            (textFound) => textFound.nombre_seccion === solution.nombre_seccion
          );
          return Object.assign(
            {},
            { descripcion_text: textFound.descripcion },
            solution
          );
        });
      });
    });
  }
}
