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
  filteredTeamMembers: any[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.teamMembers = [
      {
        name: 'Nikola',
        img: '../assets/images/nikola.jpg',
        info: 'Premium member',
        donations: 12,
        linkedInUrl: 'http://linkiedin/nikola'
      },
      {
        name: 'Denica',
        img: '../assets/images/denica.jpeg',
        info: 'Premium member',
        donations: 32,
        linkedInUrl: 'http://linkiedin/denica'
      },
      {
        name: 'Oliver',
        img: '../assets/images/oliver.jpeg',
        info: 'Basic member',
        donations: 10,
        linkedInUrl: 'http://linkiedin/oliver'
      },
      {
        name: 'Simona',
        img: '../assets/images/simona.jpeg',
        info: 'Basic member',
        donations: 1,
        linkedInUrl: 'http://linkiedin/simona'
      },
      {
        name: 'Petar',
        img: '../assets/images/petar.jpeg',
        info: 'Basic member',
        donations: 11,
        linkedInUrl: 'http://linkiedin/petar'
      },
      {
        name: 'Nikola',
        img: '../assets/images/elena.jpeg',
        info: 'Premium member',
        donations: 6,
        linkedInUrl: 'http://linkiedin/nikola'
      }
    ]
    this.filteredTeamMembers = this.teamMembers;
  }

  public applyFilter(value: any): boolean {
    if (!value || value.length === 0) {
      this.filteredTeamMembers = this.teamMembers;
      return false;
    }
    this.filteredTeamMembers = this.teamMembers.filter( (member: any) => {
      return member.name.toLowerCase().includes(value.toLowerCase());
    });

    return true;
  }
}
