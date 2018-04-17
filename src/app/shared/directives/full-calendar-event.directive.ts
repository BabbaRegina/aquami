import { Directive, OnInit, ElementRef  } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appFullCalendarEvent]'
})
export class FullCalendarEventDirective  implements OnInit  {

  constructor( private el: ElementRef ) { }
  ngOnInit() {
    const eventEl = $(this.el.nativeElement);
    eventEl.data('event', {
        title: $.trim(eventEl.text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
    });
    eventEl.draggable({
      zIndex: 999,
      revert: true,      // will cause the event to go back to its
      revertDuration: 0  //  original position after the drag
    });
  }
}
