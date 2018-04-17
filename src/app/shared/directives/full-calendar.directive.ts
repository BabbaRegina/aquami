import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { EventService } from '../../services/event.service';

declare var $: any;
@Directive({
  selector: '[appFullCalendar]'
})
export class FullCalendarDirective implements OnInit {

  @Input() appFullCalendar;
  constructor(private ele: ElementRef, public eventService: EventService) { }
  ngOnInit() {
    const events = [];
    $(this.ele.nativeElement).fullCalendar(this.appFullCalendar);
  }


}
