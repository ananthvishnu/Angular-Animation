import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css'],
})
export class GooglemapComponent implements OnInit {
  @ViewChild('googleMap', { static: true })
  googleMapRef!: ElementRef;

  map!: google.maps.Map;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      // Centered to Hyderabad, India
      center: new google.maps.LatLng(17.412127, 78.474921),
      zoom: 15,
    };

    this.map = new google.maps.Map(this.googleMapRef.nativeElement, mapOptions);
  }
}
