import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HomeService } from './home.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  map: any;
  @ViewChild('map') mapElement: any;
  lat = 41.996505;
  lng = 21.4359786;
  markers = [
    { lat: 41.9892813, lng: 21.467238 },
    { lat: 41.9774968, lng: 21.475185 },
    { lat: 41.9863011, lng: 21.402898 },
    { lat: 42.0034074, lng: 21.3988385 },
    { lat: 42.004239, lng: 21.4030181 },
    { lat: 42.004239, lng: 21.4030181 },
  ];
  volunteers: object[] = [];
  apiLoaded: Observable<boolean>;

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 13.25,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
    this.markers.forEach((location) => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map,
      });
    });
  }

  click(event: google.maps.MapMouseEvent) {
    console.log(event);
  }

  constructor(httpClient: HttpClient, public homeService: HomeService) {
    this.apiLoaded = httpClient.jsonp(environment.apiUrl, 'callback').pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  get volonteri() {
    return JSON.parse(<string>localStorage.getItem('volunteers'));
  }

  ngOnInit(): void {
    this.volunteers = this.volonteri;
  }
}
