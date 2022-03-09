import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  servicios;
  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getSolutions_Services().subscribe((resp:any)=>{
      console.log(resp);
      this.servicios=resp.soluciones_servicios.filter(servicios => servicios.tag === 'tag_servicios');
      console.log(this.servicios);
    })
  }

}
