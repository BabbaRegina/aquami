import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { HomeComponent } from './components/home.component';
import { FertilizationComponent } from './components/fertilization.component';
import { LoginComponent } from './components/login.component';
import { EventService } from './services/event.service';
import { EventDetailComponent } from './components/event-detail.component';
import { MaintenanceComponent } from './components/maintenance.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './shared/guards/auth.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    FertilizationComponent,
    LoginComponent,
    EventDetailComponent,
    MaintenanceComponent,
    LayoutComponent,
    TopbarComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [AuthenticationService, EventService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
