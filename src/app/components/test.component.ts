import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event, Test } from '../models/event';
import { EventDetailComponent } from './event-detail.component';
import { Subscription } from 'rxjs/Subscription';
import { Color, colors } from '../shared/colors';

import * as _ from 'lodash';

declare var $: any;

@Component({
  templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit, OnDestroy {
  events: Event[];
  selected = [];
  dataArray: Event[];
  demodata = [
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
    },
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
    }
  ];

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
        this.demodata[0].data = undefined;
        this.demodata[1].data = undefined;
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
    const phData = [];
    const khData = [];
    const ghData = [];
    const no2Data = [];
    const no3Data = [];
    const feData = [];
    const foData = [];
    const dataArray = this.dataArray;
    for (let i = 0; i < dataArray.length; i++) {
      if (!_.isEmpty(dataArray[i].test)) {
        // setto elichette
        const data = dataArray[i].dataMisura;
        dataLabels.push(data);

        // ph
        if (dataArray[i].test.phmin || dataArray[i].test.phmax) {
          const min = +dataArray[i].test.phmin;
          const max = +dataArray[i].test.phmax;
          if (min > 0 && max > 0) {
            phData.push((min + max) / 2);
          } else if (min > 0) {
            phData.push(min);
          } else if (max > 0) {
            phData.push(max);
          } else {
            phData.push(undefined);
          }
        } else {
          phData.push(undefined);
        }

        // kh
        if (dataArray[i].test.khmin || dataArray[i].test.khmax) {
          const min = +dataArray[i].test.khmin;
          const max = +dataArray[i].test.khmax;
          if (min > 0 && max > 0) {
            khData.push((min + max) / 2);
          } else if (min > 0) {
            khData.push(min);
          } else if (max > 0) {
            khData.push(max);
          } else {
            khData.push(undefined);
          }
        } else {
          khData.push(undefined);
        }

        // gh
        if (dataArray[i].test.ghmin || dataArray[i].test.ghmax) {
          const min = +dataArray[i].test.ghmin;
          const max = +dataArray[i].test.ghmax;
          if (min > 0 && max > 0) {
            ghData.push((min + max) / 2);
          } else if (min > 0) {
            ghData.push(min);
          } else if (max > 0) {
            ghData.push(max);
          } else {
            ghData.push(undefined);
          }
        } else {
          ghData.push(undefined);
        }

        // no2
        if (dataArray[i].test.no2min || dataArray[i].test.no2max) {
          const min = +dataArray[i].test.no2min;
          const max = +dataArray[i].test.no2max;
          if (min > 0 && max > 0) {
            no2Data.push((min + max) / 2);
          } else if (min > 0) {
            no2Data.push(min);
          } else if (max > 0) {
            no2Data.push(max);
          } else {
            no2Data.push(undefined);
          }
        } else {
          no2Data.push(undefined);
        }

        // no3
        if (dataArray[i].test.no3min || dataArray[i].test.no3max) {
          const min = +dataArray[i].test.no3min;
          const max = +dataArray[i].test.no3max;
          if (min > 0 && max > 0) {
            no3Data.push((min + max) / 2);
          } else if (min > 0) {
            no3Data.push(min);
          } else if (max > 0) {
            no3Data.push(max);
          } else {
            no3Data.push(undefined);
          }
        } else {
          no3Data.push(undefined);
        }

        // fe
        if (dataArray[i].test.femin || dataArray[i].test.femax) {
          const min = +dataArray[i].test.femin;
          const max = +dataArray[i].test.femax;
          if (min > 0 && max > 0) {
            feData.push((min + max) / 2);
          } else if (min > 0) {
            feData.push(min);
          } else if (max > 0) {
            feData.push(max);
          } else {
            feData.push(undefined);
          }
        } else {
          feData.push(undefined);
        }

        // fo
        if (dataArray[i].test.fomin || dataArray[i].test.fomax) {
          const min = +dataArray[i].test.fomin;
          const max = +dataArray[i].test.fomax;
          if (min > 0 && max > 0) {
            foData.push((min + max) / 2);
          } else if (min > 0) {
            foData.push(min);
          } else if (max > 0) {
            foData.push(max);
          } else {
            foData.push(undefined);
          }
        } else {
          foData.push(undefined);
        }
      }
    }

    this.demodata[0].data = {
      labels: dataLabels,
      datasets: [
        {
          label: 'Ph',
          data: phData,
          lineTension: 0,
          backgroundColor: colors['teal'].alpha(0.2).toString(),
          borderColor: colors['teal'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Kh',
          data: khData,
          lineTension: 0,
          backgroundColor: colors['blue'].alpha(0.2).toString(),
          borderColor: colors['blue'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Gh',
          data: ghData,
          lineTension: 0,
          backgroundColor: colors['purple'].alpha(0.2).toString(),
          borderColor: colors['purple'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        }
      ]
    };
    this.demodata[1].data = {
      labels: dataLabels,
      datasets: [
        {
          label: 'NO2',
          data: no2Data,
          lineTension: 0,
          backgroundColor: colors['indigo'].alpha(0.2).toString(),
          borderColor: colors['indigo'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'NO3',
          data: no3Data,
          lineTension: 0,
          backgroundColor: colors['yellow'].alpha(0.2).toString(),
          borderColor: colors['yellow'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Ferro',
          data: feData,
          lineTension: 0,
          backgroundColor: colors['pink'].alpha(0.2).toString(),
          borderColor: colors['pink'].toString(),
          borderWidth: 2,
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Fosfati',
          data: foData,
          lineTension: 0,
          backgroundColor: colors['red'].alpha(0.2).toString(),
          borderColor: colors['red'].toString(),
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
