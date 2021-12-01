import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {}
}
