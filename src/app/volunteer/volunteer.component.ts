import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}
}
