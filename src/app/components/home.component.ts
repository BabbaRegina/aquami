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
  showAddButton = true;
  subscription: Subscription;
  events: Event[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.subscription = this.eventService.eventsChanged
    .subscribe(
      (changed: boolean) => {
        this.showAddButton = true;
      }
    );
    this.eventService.getEvents().then((events: Event[]) => {
      this.events = events;
      this.parseEvents();
    });
  }

  parseEvents() {
    for (let i = 0; i < this.events.length; i++) {
      if (!_.isEmpty(this.events[i].ferti) && !this.dataFerti) {
        console.log('ferti ok');
        this.dataFerti = this.events[i].dataMisura;
      }
      if (!_.isEmpty(this.events[i].test) && !this.dataTest) {
        console.log('test ok');
        this.dataTest = this.events[i].dataMisura;
      }
      if (!_.isEmpty(this.events[i].manutenzione) && !this.dataManu) {
        console.log('manu ok');
        this.dataManu = this.events[i].dataMisura;
      }
      if (this.dataFerti && this.dataManu && this.dataTest) {
        break;
      }
    }
  }

  createNewEvent() {
    this.showAddButton = false;
    this.eventService.eventNew.next(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
