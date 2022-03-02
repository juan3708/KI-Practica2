import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './modules/about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { NewsModule } from './modules/news/news.module';
import { HomepageModule } from './modules/homepage/homepage.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AboutModule,
    HomepageModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
