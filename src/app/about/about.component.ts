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
        img: '../assets/images/sliki/nikola.jpg',
        info: 'Premium member',
        donations: 12,
        label:'Create & designin About page',

        linkedInUrl: 'https://www.linkedin.com/in/nikola-ivanchov-243479161/'
      },
      {
        name: 'Denica',
        img: '../assets/images/sliki/denica.jpg',
        info: 'Premium member',
        donations: 32,
        label:'Create & designin Forms',
        linkedInUrl: 'http://linkiedin/denica'
      },
      {
        name: 'Oliver',
        img: '../assets/images/sliki/oli.jpg',
        info: 'Basic member',
        donations: 10,
        label:'Create & designin Home page and implement map',
        linkedInUrl: 'https://www.linkedin.com/in/oliver-andonovic-5363a0213/'
      },
      {
        name: 'Simona',
        img: '../assets/images/sliki/sims.jpg',
        info: 'Basic member',
        donations: 1,
        linkedInUrl: 'http://linkiedin/simona'
      },{
        name: 'Jovana',
        img: '../assets/images/sliki/sims.jpg',
        info: 'Basic member',
        donations: 1,
        linkedInUrl: 'http://linkiedin/jovana'
      },{
        name: 'Ivan',
        img: '../assets/images/sliki/sims.jpg',
        info: 'Basic member',
        donations: 1,
        linkedInUrl: 'http://linkiedin/ivan'
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
