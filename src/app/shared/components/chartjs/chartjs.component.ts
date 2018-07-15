import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  demodata;

  constructor() {
    this.demodata = demodata;
  }

  ngOnInit() {
  }

}
