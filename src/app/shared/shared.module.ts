import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarDirective } from './directives/full-calendar.directive';
import { FullCalendarEventDirective } from './directives/full-calendar-event.directive';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, FullCalendarDirective, FullCalendarEventDirective],
  declarations: [FullCalendarDirective, FullCalendarEventDirective]
})
export class SharedModule {}
