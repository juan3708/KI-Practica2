import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './modules/about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { NewsModule } from './modules/news/news.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { JobNoticesModule } from './modules/job-notices/job-notices.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './modules/login/login.module';
import { AdministratorModule } from './modules/administrator/administrator.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NewsComponent } from './modules/news/components/news/news.component';








@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NewsComponent
  ], //imports de los modelos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AboutModule,
    HomepageModule,
    NewsModule,
    JobNoticesModule,
    NgbModule,
    LoginModule,
    AdministratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
