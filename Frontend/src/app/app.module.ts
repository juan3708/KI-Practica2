import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ServicesComponent } from './modules/homepage/components/services/services.component';
import { SolutionsComponent } from './modules/homepage/components/solutions/solutions.component';
import { AboutComponent } from './modules/about/components/about/about.component';
import { ContactsComponent } from './modules/contacts/components/contacts/contacts.component';
import { HomeComponent } from './modules/homepage/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    ServicesComponent,
    SolutionsComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
