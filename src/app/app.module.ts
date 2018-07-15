import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SharedModule } from './shared/shared.module';
import { ChartjsComponent } from './shared/components/chartjs/chartjs.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    ChartjsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
