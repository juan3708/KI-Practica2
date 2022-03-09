import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-soluciones-digitales',
  templateUrl: './soluciones-digitales.component.html',
  styleUrls: ['./soluciones-digitales.component.scss']
})
export class SolucionesDigitalesComponent implements OnInit {
  soluciones_digitales;
  soluciones_digitales_1;
  constructor(private aboutServices: AboutService) { }

  ngOnInit(): void {
    this.aboutServices.getTextos().subscribe((resp: any)=>{
      console.log(resp);
      this.soluciones_digitales = resp.textos.find(soluciones_digitales => soluciones_digitales.tag === 'tag_sobreNosotros');
      console.log(this.soluciones_digitales);
      this.soluciones_digitales_1 = resp.textos.find(soluciones_digitales_1 => soluciones_digitales_1.tag === 'tag_sobreNosotros_1');
      console.log(this.soluciones_digitales_1);
    })
  }

}
