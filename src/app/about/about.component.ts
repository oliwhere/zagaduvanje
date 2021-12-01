import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  teamMembers: any[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.teamMembers = [
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Basic member info',
        linkedInUrl: 'http://linkiedin/nikola'
      },
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Basic member info',
        linkedInUrl: 'http://linkiedin/nikola'
      },
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Basic member info',
        linkedInUrl: 'http://linkiedin/nikola'
      },
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Basic member info',
        linkedInUrl: 'http://linkiedin/nikola'
      },
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Basic member info',
        linkedInUrl: 'http://linkiedin/nikola'
      },
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Basic member info',
        linkedInUrl: 'http://linkiedin/nikola'
      }
    ]
  }
}
