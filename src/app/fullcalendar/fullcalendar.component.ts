import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { element } from 'protractor';
import * as _ from 'lodash';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html'
})
export class FullcalendarComponent implements OnInit {
  dataEvents: Event[];
  demodata;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().then((events: Event[]) => {
      this.dataEvents = events;
      this.attachEvents();
    });
  }

  attachEvents() {
    this.demodata = {
      header: {
        left: 'title',
        right: 'today prev,next month'
      },
      editable: true,
      droppable: true,
      events: []
    };
    for (let i = 0; i < this.dataEvents.length; i++) {
      const data = this.dataEvents[i].dataMisura;
      if (!_.isEmpty(this.dataEvents[i].ferti)) {
        this.demodata.events.push({
          title: 'Fertilizzazione',
          start: '' + data,
          color: '#28a745'
        });
      }
      if (!_.isEmpty(this.dataEvents[i].test)) {
        this.demodata.events.push({
          title: 'Test',
          start: '' + data,
          color: '#17a2b8'
        });
      }
      if (!_.isEmpty(this.dataEvents[i].manutenzione)) {
        this.demodata.events.push({
          title: 'Manutenzione',
          start: '' + data,
          color: '#ffc107'
        });
      }
    }
  }
}
