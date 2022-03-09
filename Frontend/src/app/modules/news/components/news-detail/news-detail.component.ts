import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  bulletin;
  constructor(private router: Router) { 
    this.bulletin = this.router.getCurrentNavigation().extras.state.news;
  }

  ngOnInit(): void {
  }

}
