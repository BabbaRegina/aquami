import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, Manutenzione } from '../models/event';
import { EventDetailComponent } from './event-detail.component';
import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';
import { colors } from '../shared/colors';

declare var $: any;

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html'
})
export class MaintenanceComponent implements OnInit, OnDestroy {
  events: Event[];
  selected = [];
  dataCambio: Date;
  dataPotatura: Date;
  dataPuliziaSpugna: Date;
  dataPuliziaLana: Date;
  dataPuliziaPompa: Date;
  dataBatteri: Date;
  dataVetro: Date;
  private subscription: Subscription;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().then((events: Event[]) => {
      this.events = events;
      this.parseEvents();
    });

    this.subscription = this.eventService.eventsChanged.subscribe(
      (changed: boolean) => {
        this.eventService.getEvents().then((events: Event[]) => {
          this.events = events;
          this.parseEvents();
        });
      }
    );
  }

  private getIndexOfEvent = (eventId: String) => {
    return this.events.findIndex(event => {
      return event._id === eventId;
    });
  }

  onSelect({ selected }) {
    const idx = this.getIndexOfEvent(selected[0]._id);
    this.eventService.eventEdit.next(idx);
    $('#detail-modal').modal('toggle');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  parseEvents() {
    for (let i = 0; i < this.events.length; i++) {
      console.log(i, this.events[i].manutenzione);
      if (this.events[i].manutenzione.acqua > 0  && !this.dataCambio) {
        this.dataCambio = this.events[i].dataMisura;
      }
      if (this.events[i].manutenzione.potatura.valueOf()  && !this.dataPotatura) {
        console.log('entra');
        this.dataPotatura = this.events[i].dataMisura;
      } else {
        console.log(this.events[i].manutenzione.potatura);
      }
      if (this.events[i].manutenzione.filtroSpugna === true  && !this.dataPuliziaSpugna) {
        this.dataPuliziaSpugna = this.events[i].dataMisura;
      }
      if (this.events[i].manutenzione.filtroLana === true && !this.dataPuliziaLana) {
        this.dataPuliziaLana = this.events[i].dataMisura;
      }
      if (this.events[i].manutenzione.filtroPompa === true  && !this.dataPuliziaPompa) {
        this.dataPuliziaPompa = this.events[i].dataMisura;
      }
      if (this.events[i].manutenzione.batteri > 0  && !this.dataBatteri) {
        this.dataBatteri = this.events[i].dataMisura;
      }
      if (this.events[i].manutenzione.vetro === true && !this.dataVetro) {
        this.dataVetro = this.events[i].dataMisura;
      }
      if (this.dataCambio && this.dataPotatura && this.dataPuliziaSpugna && this.dataPuliziaLana
        && this.dataPuliziaPompa && this.dataBatteri && this.dataVetro) {
        break;
      }
    }
  }

  goTop() {
    window.scrollTo(0, 0);
  }
}
