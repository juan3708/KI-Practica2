import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':title',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
