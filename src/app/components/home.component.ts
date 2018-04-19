import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../models/event';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../services/event.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  dataTest: Date;
  dataFerti: Date;
  dataManu: Date;
  subscription: Subscription;
  events: Event[];
  calendarData;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.subscription = this.eventService.eventsChanged
    .subscribe(
      (changed: boolean) => {
        console.log('Home: events changed!');
      }
    );
    this.eventService.getEvents().then((events: Event[]) => {
      this.events = events;
      this.parseEvents();
      this.attachEvents();
    });
  }

  parseEvents() {
    for (let i = 0; i < this.events.length; i++) {
      if (!_.isEmpty(this.events[i].ferti) && !this.dataFerti) {
        this.dataFerti = this.events[i].dataMisura;
      }
      if (!_.isEmpty(this.events[i].test) && !this.dataTest) {
        this.dataTest = this.events[i].dataMisura;
      }
      if (!_.isEmpty(this.events[i].manutenzione) && !this.dataManu) {
        this.dataManu = this.events[i].dataMisura;
      }
      if (this.dataFerti && this.dataManu && this.dataTest) {
        break;
      }
    }
  }

  attachEvents() {
    this.calendarData = {
      header: {
        left: 'title',
        right: 'today prev,next month'
      },
      editable: true,
      droppable: true,
      events: []
    };
    for (let i = 0; i < this.events.length; i++) {
      const data = this.events[i].dataMisura;
      if (!_.isEmpty(this.events[i].ferti)) {
        this.calendarData.events.push({
          title: 'Fertilizzazione',
          start: '' + data,
          color: '#28a745',
          id: this.events[i]._id
        });
      }
      if (!_.isEmpty(this.events[i].test)) {
        this.calendarData.events.push({
          title: 'Test',
          start: '' + data,
          color: '#17a2b8',
          id: this.events[i]._id
        });
      }
      if (!_.isEmpty(this.events[i].manutenzione)) {
        this.calendarData.events.push({
          title: 'Manutenzione',
          start: '' + data,
          color: '#ffc107',
          id: this.events[i]._id
        });
      }
    }
  }

  createNewEvent() {
    this.eventService.eventNew.next(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
