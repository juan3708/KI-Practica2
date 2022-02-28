import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts',
    loadChildren: () =>
        import('./modules/contacts/contacts-routing.module').then(m => m.ContactsRoutingModule),
  },
  {
    path: '',
    loadChildren: () =>
        import('./modules/homepage/homepage-routing.module').then(m => m.HomepageRoutingModule),
  },
  {
    path: 'about',
    loadChildren: () =>
        import('./modules/about/about-routing.module').then(m => m.AboutRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
