import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HomeService } from './home.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  volunteers: object[] = [];
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoom: 15,
    disableDefaultUI: true,
  };
  markers: any = [];

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
