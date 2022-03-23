import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ListUsersComponent } from './components/list-users/list-users.component';


@NgModule({
  declarations: [AdministratorComponent, ListUsersComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorModule { }
