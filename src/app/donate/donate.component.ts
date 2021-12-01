import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}
}
