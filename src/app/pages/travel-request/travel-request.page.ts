import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.page.html',
  styleUrls: ['./travel-request.page.scss'],
})


export class TravelRequestPage implements OnInit {
  name:any;
  vessel:any;
  vesselIdentifier:any;
  type:any;
  TypeOfReport: any;
  details: any;
  Destination: any;
  NumberOfPeopleOnBoard: any;
  post () { 
    console.log('name', this.name);
    console.log('vessel', this.vessel);
  }

  constructor() { }

  ngOnInit() {
  }
}
