import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../services/homepage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  masterHead;
  masterHead_1;
  descubrir;
  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
    this.homepageService.getTextos().subscribe((resp:any)=>{
      console.log(resp);
      this.masterHead = resp.textos.find(masterHead => masterHead.tag === 'tag_masterHead');
      console.log(this.masterHead);
      this.masterHead_1 = resp.textos.find(masterHead_1 => masterHead_1.tag === 'tag_masterHead_1');
      console.log(this.masterHead_1);
    })
  }

}
