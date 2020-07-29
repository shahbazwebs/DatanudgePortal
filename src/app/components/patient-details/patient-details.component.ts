import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http';
// import { WOW } from 'wowjs/dist/wow.min';
import * as $ from 'jquery';



@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit, AfterViewInit {
  listOfPatients: any = [];
  isLoader: boolean = false;
  patients: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.isLoader = true;
    this.httpClient.get("../../../assets/json/patientDetails.json").subscribe(
      data => {
        this.listOfPatients = data as string[];
        console.log(data);
        this.isLoader = false;
        console.log(this.listOfPatients[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  ngAfterViewInit(){
    // new WOW().init();
  }

}
