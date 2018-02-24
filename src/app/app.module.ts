import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './components/tables.component';
import { HomeComponent } from './components/home.component';
import { FertilizationComponent } from './components/fertilization.component';


@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    HomeComponent,
    FertilizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
