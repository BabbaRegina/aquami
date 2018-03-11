import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, Manutenzione } from '../models/event';
import { EventDetailComponent } from './event-detail.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  providers: [EventService]
})
export class MaintenanceComponent implements OnInit {

  events: Event[];
  selected = [];
  selectedEvent: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
     this.eventService.getEvents().then((events: Event[]) => {
        this.events = events.map((event) => {
          if (!event.manutenzione) {
            event.manutenzione = new Manutenzione();
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

  selectEvent(event: Event) {
    this.selectedEvent = event;
  }

  createNewEvent() {
    var event = new Event('Manutenzione');
    this.selectEvent(event);
  }

  deleteEvent= (eventId: String) => {
    var idx = this.getIndexOfEvent(eventId);
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
    var idx = this.getIndexOfEvent(event._id);
    if (idx !== -1) {
      this.events[idx] = event;
      this.selectEvent(event);
    }
    return this.events;
  }

  onSelect({ selected }) {
    var idx = this.getIndexOfEvent(selected[0]._id);
    if (idx !== -1) {
      this.selectEvent(this.events[idx]);
    }
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
}
