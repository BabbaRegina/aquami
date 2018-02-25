import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './services/authentication.service'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TablesComponent } from './components/tables.component';
import { HomeComponent } from './components/home.component';
import { FertilizationComponent } from './components/fertilization.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';



@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    HomeComponent,
    FertilizationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
