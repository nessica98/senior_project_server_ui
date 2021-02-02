import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  marker2: google.maps.Marker;
  markers: google.maps.Marker[];
  name:string;
  constructor() { }

  ngOnInit(): void {
    
    
  
  //   //console.log(this.marker)
  }

}
