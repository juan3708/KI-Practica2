import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorService } from '../../services/administrator.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  usuarios;
  constructor(private router: Router, private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this.listAllUsers();
  }

  listAllUsers(){
    return this.administratorService.getUsuarios().subscribe((resp:any) => {
      console.log(resp);
      this.usuarios = resp.usuarios;
    });
  }
}
