import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarDirective } from './directives/full-calendar.directive';
import { FullCalendarEventDirective } from './directives/full-calendar-event.directive';
import { ChartjsDirective } from './directives/chartjs.directive';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [
    CommonModule,
    FullCalendarDirective,
    FullCalendarEventDirective,
    ChartjsDirective,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule,
    BsDropdownModule,
    TabsModule
    ],
  declarations: [FullCalendarDirective, FullCalendarEventDirective, ChartjsDirective]
})
export class SharedModule {}
