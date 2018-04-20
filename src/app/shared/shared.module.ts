import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarDirective } from './directives/full-calendar.directive';
import { FullCalendarEventDirective } from './directives/full-calendar-event.directive';
import { ChartjsDirective } from './directives/chartjs.directive';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FullCalendarDirective, FullCalendarEventDirective, ChartjsDirective],
  declarations: [FullCalendarDirective, FullCalendarEventDirective, ChartjsDirective]
})
export class SharedModule {}
