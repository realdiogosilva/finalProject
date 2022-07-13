import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map') mapView: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createMap();
  }


  createMap() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
 
    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5
    });
 
    CapacitorGoogleMaps.addListener('onMapReady', async () => {
      CapacitorGoogleMaps.setMapType({
        type: "hybrid" // hybrid, satellite, terrain
      });
      
      this.showCurrentPosition();
    });
  }

  async post() { 
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Latitude:', coordinates.coords.latitude);
    console.log('Longitude:', coordinates.coords.longitude);
  }

  async showCurrentPosition() {
    Geolocation.requestPermissions().then(async premission => {
      const coordinates = await Geolocation.getCurrentPosition();
    
      // Create our current location marker
      CapacitorGoogleMaps.addMarker({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        title: 'Current User Location',
      });
    
      // Focus the camera
      CapacitorGoogleMaps.setCamera({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        zoom: 12,
        bearing: 0
      });
    });
  }
}
