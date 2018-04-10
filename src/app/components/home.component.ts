import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  dataTest: Date;
  dataFerti: Date;
  dataManu: Date;
  selectedEvent: Event;

  ngOnInit() {
    this.dataTest = new Date(); // TODO: richiamare mongo
    this.dataFerti = new Date();
    this.dataManu = new Date();
  }

  createNewEvent() {
    const event = new Event();
    // By default, a newly-created contact will have the selected state.
    this.selectedEvent = event;
  }

}
