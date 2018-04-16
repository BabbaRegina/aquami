import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../models/event';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../services/event.service';

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

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.subscription = this.eventService.eventsChanged
    .subscribe(
      (changed: boolean) => {
        this.showAddButton = true;
      }
    );
    this.dataTest = new Date(); // TODO: richiamare mongo
    this.dataFerti = new Date();
    this.dataManu = new Date();
  }

  createNewEvent() {
    // this.showCreateEvent = true;
    this.showAddButton = false;
    this.eventService.eventNew.next(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
