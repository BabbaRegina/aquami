import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { Event, Fertilizzazione } from '../../models/event';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit, OnDestroy {
  subscriptionEdit: Subscription;
  subscriptionNew: Subscription;
  editMode = false;
  indexItem: number;
  event: Event;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.subscriptionEdit = this.eventService.eventEdit.subscribe(
      (index: number) => {
        console.log('new event selected, id: ', index);
        this.indexItem = index;
        this.editMode = true;
        this.event = this.eventService.getEvent(index);
      }
    );
    this.subscriptionNew = this.eventService.eventNew.subscribe(
      (newevent: boolean) => {
        this.event = new Event();
      }
    );
  }

  createEvent() {
    this.eventService.createEvent(this.event).then((newEvent: Event) => {
      this.eventService.eventsChanged.next(true);
      this.event = undefined;
    });
  }

  updateEvent(): void {
    this.eventService.updateEvent(this.event).then((updatedEvent: Event) => {
      this.eventService.eventsChanged.next(true);
      this.event = undefined;
    });
  }

  deleteEvent(): void {
    this.eventService
      .deleteEvent(this.event._id)
      .then((deletedEventId: String) => {
        this.eventService.eventsChanged.next(true);
        this.event = undefined;
      });
  }

  ngOnDestroy() {
    this.subscriptionNew.unsubscribe();
    this.subscriptionEdit.unsubscribe();
  }
}
