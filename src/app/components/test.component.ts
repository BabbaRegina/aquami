import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, Test } from '../models/event';
import { EventDetailComponent } from './event-detail.component';

@Component({
  templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {

  events: Event[];
  selected = [];
  selectedEvent: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
     this.eventService.getEvents().then((events: Event[]) => {
        this.events = events.map((event) => {
          if (!event.test) {
            event.test = new Test();
          }
          return event;
        });
      });
  }

  private getIndexOfEvent = (eventId: String) => {
    return this.events.findIndex((event) => {
      return event._id === eventId;
    });
  }

  _onRowClick(data: any) {
    console.log(data);
    console.log(JSON.stringify(data));
  }

  selectEvent(event: Event) {
    this.selectedEvent = event;
  }

  createNewEvent() {
    const event = new Event();
    // By default, a newly-created contact will have the selected state.
    this.selectEvent(event);
  }

  deleteEvent = (eventId: String) => {
    const idx = this.getIndexOfEvent(eventId);
    if (idx !== -1) {
      this.events.splice(idx, 1);
      this.selectEvent(null);
    }
    return this.events;
  }

  addEvent = (event: Event) => {
    this.events.push(event);
    this.selectEvent(event);
    return this.events;
  }

  updateEvent = (event: Event) => {
    const idx = this.getIndexOfEvent(event._id);
    if (idx !== -1) {
      this.events[idx] = event;
      this.selectEvent(event);
    }
    return this.events;
  }

  onSelect({ selected }) {
    const idx = this.getIndexOfEvent(selected[0]._id);
    if (idx !== -1) {
      this.selectEvent(this.events[idx]);
    }
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
}
