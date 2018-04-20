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
  dataArray: Event[];
  demodata =
    {
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
      this.dataArray = events;
      this.loadChartDataset();
    });

    this.subscription = this.eventService.eventsChanged.subscribe(
      (changed: boolean) => {
        this.demodata.data = undefined;
        this.eventService.getEvents().then((events: Event[]) => {
          this.events = events;
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

  loadChartDataset() {
    const dataLabels = [];
    const litriData = [];
    const cambioAcqua = [];
    const potatura = [];
    const lana = [];
    const dataArray = this.dataArray;
    for (let i = 0; i < dataArray.length; i++) {
      if (!_.isEmpty(dataArray[i].manutenzione)) {
        // setto elichette
        const data = dataArray[i].dataMisura;
        dataLabels.push(data);

        // litri
        litriData.push(dataArray[i].manutenzione.acqua);
        if (dataArray[i].manutenzione.acqua) {
          cambioAcqua.push({
            x: data,
            y: 5
          });
        }

        if (dataArray[i].manutenzione.potatura === true) {
          potatura.push({
            x: data,
            y: 10
          });
        }

        if (dataArray[i].manutenzione.filtroLana === true) {
          lana.push({
            x: data,
            y: 1
          });
        }

      }
    }

    this.demodata.data = {
      labels: dataLabels,
      datasets: [
        {
          type: 'scatter',
          label: 'Cambi acqua',
          data: cambioAcqua,
          backgroundColor: colors['red'].alpha(1).toString(),
          borderColor: colors['red'].toString(),
          borderWidth: 2,
          pointRadius: 4,
          fill: false
        },
        {
          type: 'scatter',
          label: 'Potatura',
          data: potatura,
          backgroundColor: colors['green'].alpha(1).toString(),
          borderColor: colors['green'].toString(),
          borderWidth: 2,
          pointRadius: 4,
          fill: false
        },
        {
          type: 'scatter',
          label: 'Cambio lana',
          data: lana,
          backgroundColor: colors['yellow'].alpha(1).toString(),
          borderColor: colors['yellow'].toString(),
          borderWidth: 2,
          pointRadius: 4,
          fill: false
        },
        {
          type: 'line',
          label: 'Litri cambio acqua',
          data: litriData,
          lineTension: 0,
          backgroundColor: colors['teal'].alpha(0.2).toString(),
          borderColor: colors['teal'].toString(),
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
