import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, Fertilizzazione } from '../models/event';
import { EventDetailComponent } from './event-detail.component';
import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';
import { colors } from '../shared/colors';
declare var $: any;

@Component({
  selector: 'app-fertilization',
  templateUrl: './fertilization.component.html'
})
export class FertilizationComponent implements OnInit, OnDestroy {
  events: Event[];
  selected = [];
  dataArray: Event[];
  datak2so4: Date;
  datak2no3: Date;
  datamagnesio: Date;
  datagenerico: Date;
  datafosfati: Date;
  dataferro: Date;
  demodata = {
    type: 'line',
    data: undefined,
    options: {
      responsive: true,
      spanGaps: true,
      scales: {
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            display: true,
            distribution: 'linear',
            type: 'time',
            time: {
              displayFormats: {
                quarter: 'MMM YYYY'
              }
            }
          }
        ]
      },
      legend: {
        display: true
      }
    }
  };

  private subscription: Subscription;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().then((events: Event[]) => {
      this.events = events;
      this.parseEvents();
      this.dataArray = events;
      this.loadChartDataset();
    });

    this.subscription = this.eventService.eventsChanged.subscribe(
      (changed: boolean) => {
        this.demodata.data = undefined;
        this.eventService.getEvents().then((events: Event[]) => {
          this.events = events;
          this.parseEvents();
          this.dataArray = events;
          this.loadChartDataset();
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
    this.datak2so4 = undefined;
    this.datak2no3 = undefined;
    this.datamagnesio = undefined;
    this.datagenerico = undefined;
    this.datafosfati = undefined;
    this.dataferro = undefined;
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].ferti.k2so4 != null  && !this.datak2so4) {
        this.datak2so4 = this.events[i].dataMisura;
      }
      if (this.events[i].ferti.k2no3 != null  && !this.datak2no3) {
        this.datak2no3 = this.events[i].dataMisura;
      }
      if (this.events[i].ferti.magnesio != null && !this.datamagnesio) {
        this.datamagnesio = this.events[i].dataMisura;
      }
      if (this.events[i].ferti.generico != null && !this.datagenerico) {
        this.datagenerico = this.events[i].dataMisura;
      }
      if (this.events[i].ferti.fosfati != null  && !this.datafosfati) {
        this.datafosfati = this.events[i].dataMisura;
      }
      if (this.events[i].ferti.ferro != null  && !this.dataferro) {
        this.dataferro = this.events[i].dataMisura;
      }
      if (this.datak2so4 && this.datak2no3 && this.datamagnesio && this.datagenerico
        && this.datafosfati && this.dataferro) {
        break;
      }
    }
  }

  loadChartDataset() {
    const dataLabels = [];
    const k2so4Data = [];
    const k2no3Data = [];
    const magnesioData = [];
    const genericoData = [];
    const fosfatiData = [];
    const ferroData = [];
    const dataArray = this.dataArray;
    for (let i = 0; i < dataArray.length; i++) {
      if (!_.isEmpty(dataArray[i].ferti)) {
        // setto elichette
        const data = dataArray[i].dataMisura;
        dataLabels.push(data);

        // k2so4
        if (dataArray[i].ferti.k2so4) {
          k2so4Data.push(dataArray[i].ferti.k2so4);
        } else {
          k2so4Data.push(undefined);
        }
        // k2no3
        if (dataArray[i].ferti.k2no3) {
          k2no3Data.push(dataArray[i].ferti.k2no3);
        } else {
          k2no3Data.push(undefined);
        }
        // magnesio
        if (dataArray[i].ferti.magnesio) {
          magnesioData.push(dataArray[i].ferti.magnesio);
        } else {
          magnesioData.push(undefined);
        }
        // generico
        if (dataArray[i].ferti.generico) {
          genericoData.push(dataArray[i].ferti.generico);
        } else {
          genericoData.push(undefined);
        }
        // fosfati
        if (dataArray[i].ferti.fosfati) {
          fosfatiData.push(dataArray[i].ferti.fosfati);
        } else {
          fosfatiData.push(undefined);
        }
        // ferro
        if (dataArray[i].ferti.ferro) {
          ferroData.push(dataArray[i].ferti.ferro);
        } else {
          ferroData.push(undefined);
        }
      }
    }

    this.demodata.data = {
      labels: dataLabels,
      datasets: [
        {
          label: 'k2so4',
          data: k2so4Data,
          lineTension: 0,
          backgroundColor: colors['teal'].alpha(0.2).toString(),
          borderColor: colors['teal'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'k2no3',
          data: k2no3Data,
          lineTension: 0,
          backgroundColor: colors['blue'].alpha(0.2).toString(),
          borderColor: colors['blue'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Magnesio',
          data: magnesioData,
          lineTension: 0,
          backgroundColor: colors['indigo'].alpha(0.2).toString(),
          borderColor: colors['indigo'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Generico',
          data: genericoData,
          lineTension: 0,
          backgroundColor: colors['green'].alpha(0.2).toString(),
          borderColor: colors['green'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Fosfati',
          data: fosfatiData,
          lineTension: 0,
          backgroundColor: colors['red'].alpha(0.2).toString(),
          borderColor: colors['red'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Ferro',
          data: ferroData,
          lineTension: 0,
          backgroundColor: colors['purple'].alpha(0.2).toString(),
          borderColor: colors['purple'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        }
      ]
    };
  }

  goTop() {
    window.scrollTo(0, 0);
  }
}
