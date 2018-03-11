import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthenticationService } from './services/authentication.service'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { HomeComponent } from './components/home.component';
import { FertilizationComponent } from './components/fertilization.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { EventService } from './services/event.service';
import { EventDetailComponent } from './components/event-detail.component';
import { MaintenanceComponent } from './components/maintenance.component';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    FertilizationComponent,
    LoginComponent,
    RegisterComponent,
    EventDetailComponent,
    MaintenanceComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [AuthenticationService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
