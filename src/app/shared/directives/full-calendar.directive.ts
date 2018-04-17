import { Directive, ElementRef, OnInit, Input } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appFullCalendar]'
})
export class FullCalendarDirective implements OnInit {

  @Input() appFullCalendar;
  constructor(private ele: ElementRef) { }
  ngOnInit() {
    const events = [];
    $(this.ele.nativeElement).fullCalendar(this.appFullCalendar);
  }


}
