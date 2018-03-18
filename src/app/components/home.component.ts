import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  dataTest: Date;
  dataFerti: Date;
  dataManu: Date;

  ngOnInit() {
    this.dataTest = new Date(); // TODO: richiamare mongo
    this.dataFerti= new Date();
    this.dataManu = new Date();
  }

}
