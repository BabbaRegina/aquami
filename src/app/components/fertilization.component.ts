import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-fertilization',
  templateUrl: './fertilization.component.html',
  providers: [EventService]
})
export class FertilizationComponent implements OnInit {

  events: Event[]
  selectedEvent: Event

  constructor(private eventService: EventService) { }

  ngOnInit() {
     this.eventService
      .getEvents()
      .then((events: Event[]) => {
        this.events = events.map((event) => {
          if (!event.ferti) {
            event.ferti = [];
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
    var event: Event = {
      tipoEvento: '',
      _id: '',
      dataMisura: new Date(),
      dataRegistrazione: new Date(),
      ferti:[],
      note:'',
      test: []
    };

    // By default, a newly-created contact will have the selected state.
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
}
