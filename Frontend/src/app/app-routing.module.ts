import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/homepage/homepage-routing.module').then((m) => m.HomepageRoutingModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about-routing.module').then((m) => m.AboutRoutingModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/news/news-routing.module').then((m) => m.NewsRoutingModule),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./modules/job-notices/job-notices-routing.module').then((m) => m.JobNoticesRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
