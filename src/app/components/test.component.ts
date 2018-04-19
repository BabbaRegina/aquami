import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, Test } from '../models/event';
import { EventDetailComponent } from './event-detail.component';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {

  events: Event[];
  selected = [];

  private subscription: Subscription;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().then((events: Event[]) => {
      this.events = events;
    });

    this.subscription = this.eventService.eventsChanged
    .subscribe(
      (changed: boolean) => {
        this.eventService.getEvents().then((events: Event[]) => {
          this.events = events;
        });
      }
    );
  }

  private getIndexOfEvent = (eventId: String) => {
    return this.events.findIndex(event => {
      return event._id === eventId;
    });
  }

  onSelect({ selected }) {
    const idx = this.getIndexOfEvent(selected[0]._id);
    this.eventService.eventEdit.next(idx);
    $('#detail-modal').modal('toggle');
  }
}
