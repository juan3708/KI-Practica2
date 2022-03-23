import { Component } from '@angular/core';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})

export class AppComponent {
  title = 'Frontend';
  showMenu:boolean = false;
  constructor(private router: Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart){
        this.showMenu = event.url !== "/login" && event.url !== "/administrator" && event.url !== "/administrator/listUsers"
      }
    });
  }
}
