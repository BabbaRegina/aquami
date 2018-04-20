import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Directive({
  selector: '[appChartjs]'
})
export class ChartjsDirective implements OnInit {

  @Input() appChartjs;
  ele: ElementRef;
  chart: Chart;
  native: any;
  constructor(ele: ElementRef) {
    this.ele = ele;
    this.native = ele.nativeElement;
  }
  ngOnInit() {
    this.renderChart(this.appChartjs);
  }
  renderChart(data) {
    this.chart = new Chart(this.native, data);
  }

}
