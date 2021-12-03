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
  constructor() {}

  ngOnInit(): void {
    this.teamMembers = [
      {
        name: 'Oliver',
        img: '../assets/images/sliki/oli.jpg',
        info: 'Premium member',
        donations: 12,
        label: 'Create & designin Home page and implemented the map',
        linkedInUrl: 'https://www.linkedin.com/in/oliver-andonovic-5363a0213/',
        description:
          'Oliver informs the reader about what they can expect to learn from him and the value he creates for his audience. He builds trust in several great ways, using photos, information about his professional and personal life, achievements and subscriber numbers.',
      },
      {
        name: 'Denica',
        img: '../assets/images/sliki/denica.jpg',
        info: 'Premium member',
        donations: 32,
        label: 'Create & designedForms',
        linkedInUrl: 'http://linkiedin/denica',
        description:
          "Denica's hunger for knowledge and determination to turn information into action has contributed to her most recent success. Her hunger for knowledge and determination to turn information into action has contributed to her most recent success",
      },
      {
        name: 'Nikola',
        img: '../assets/images/sliki/nikola.jpg',
        info: 'Basic member',
        donations: 10,
        label: 'Create & designed About page',
        linkedInUrl: 'https://www.linkedin.com/in/nikola-ivanchov-243479161/',
        description:
          'Nikola is a fearless seeker of knowledge, and will stop at nothing to reach his goals and help others!',
      },
      {
        name: 'Simona',
        img: '../assets/images/sliki/sims.jpg',
        info: 'Basic member',
        donations: 1,
        linkedInUrl: 'http://linkiedin/simona',
        description:
          'Striving to become great at her job! She wants the bigger things in life, finds passion in creating visual stuff! Her greatest enemy? Not enough time.',
      },
    ];
    this.filteredTeamMembers = this.teamMembers;
  }

  public applyFilter(value: any): boolean {
    if (!value || value.length === 0) {
      this.filteredTeamMembers = this.teamMembers;
      return false;
    }
    this.filteredTeamMembers = this.teamMembers.filter((member: any) => {
      return member.name.toLowerCase().includes(value.toLowerCase());
    });

    return true;
  }
}
