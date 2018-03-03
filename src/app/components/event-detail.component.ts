import { Component, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent {
  @Input()
  event: Event;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private eventService: EventService) {}

  createEvent(event: Event) {
    this.eventService.createEvent(event).then((newEvent: Event) => {
      this.createHandler(newEvent);
    });
  }

  updateEvent(event: Event): void {
    this.eventService.updateEvent(event).then((updatedEvent: Event) => {
      this.updateHandler(updatedEvent);
    });
  }

  deleteEvent(eventId: String): void {
    this.eventService.deleteEvent(eventId).then((deletedEventId: String) => {
      this.deleteHandler(deletedEventId);
    });
  }
}