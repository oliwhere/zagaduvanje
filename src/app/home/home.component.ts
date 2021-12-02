import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  volunteers: object[] = [];
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(environment.apiUrl, 'callback').pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  get test() {
    return JSON.parse(<string>localStorage.getItem('donations'));
  }

  ngOnInit(): void {
    this.volunteers = this.test;
  }
}
