import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
  lat = 43.879078;
  lng = -103.4615581;
  markers = [
    { lat: 22.33159, lng: 105.63233 },
    { lat: 7.92658, lng: -12.05228 },
    { lat: 48.75606, lng: -118.859 },
    { lat: 5.19334, lng: -67.03352 },
    { lat: 12.09407, lng: 26.31618 },
    { lat: 47.92393, lng: 78.58339 }
  ];
  volunteers: object[] = [];
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoom: 15,
    disableDefaultUI: true,
  };
  markers: any = [];

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng),
        map: this.map
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
    return JSON.parse(<string>localStorage.getItem('donations'));
  }

  ngOnInit(): void {
    this.volunteers = this.volonteri;
  }
}
