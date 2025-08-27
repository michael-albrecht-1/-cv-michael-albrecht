import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

const ICON = {
  school: {
    icon: PrimeIcons.BOOK,
    color: 'var(--primary)',
  },
  work: {
    icon: PrimeIcons.BRIEFCASE,
    color: 'var(--secondary)',
  },
};

type Event = {
  titre1: string;
  titre2?: string;
  titre3?: string;
  date?: string;
  icon?: string;
  color?: string;
  description?: string;
  bullets?: { text: string; skills: string[] }[];
};
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  works!: Event[];
  formations!: Event[];

  ngOnInit() {
    this.works = [
      {
        titre1: 'MOOVANCE.TITLE1',
        titre2: 'MOOVANCE.TITLE2',
        titre3: 'MOOVANCE.TITLE3',
        date: 'MOOVANCE.DATE',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: 'MOOVANCE.DESCRIPTION',
        bullets: [
          {
            text: 'MOOVANCE.MISSION1',
            skills: ['NestJS', 'Spring Boot'],
          },
          {
            text: 'MOOVANCE.MISSION2',
            skills: ['Flutter'],
          },
          {
            text: 'MOOVANCE.MISSION3',
            skills: [],
          },
          // {
          //   text: "développement et monitoring de l'infrastructure",
          //   skills: ['Terraform', 'Google Cloud Platform'],
          // },
          {
            text: 'MOOVANCE.MISSION4',
            skills: ['Terraform'],
          },
          {
            text: 'MOOVANCE.MISSION5',
            skills: ['GCP'],
          },
          {
            text: 'MOOVANCE.MISSION6',
            skills: [],
          },
          {
            text: 'MOOVANCE.MISSION7',
            skills: [],
          },
        ],
      },
      {
        titre1: 'ODEIS.TITLE1',
        titre2: 'ODEIS.TITLE2',
        titre3: 'ODEIS.TITLE3',
        date: 'ODEIS.DATE',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: 'ODEIS.DESCRIPTION',
        bullets: [
          // "co-animation d'ateliers avec un panel de clients pour recueillir leur besoins et faire tester la solution",
          {
            text: 'ODEIS.MISSION1',
            skills: ['Angular'],
          },
          {
            text: 'ODEIS.MISSION2',
            skills: [],
          },
          // "mise en place d'une stratégie de tests",
          { text: 'ODEIS.MISSION3', skills: [] },
          //ateliers sur la Clean Architecture et implémentation (+atelier bdd)",
          //formations de collègues sur rxjs, tests/tdd',
        ],
      },
      {
        titre1: 'ODEIS_TECH.TITLE1',
        titre2: 'ODEIS_TECH.TITLE2',
        titre3: 'ODEIS_TECH.TITLE3',
        date: 'ODEIS_TECH.DATE',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: 'ODEIS_TECH.DESCRIPTION',
      },
      {
        titre1: 'INDEPENDENT.TITLE1',
        titre2: 'INDEPENDENT.TITLE2',
        titre3: 'INDEPENDENT.TITLE3',
        date: 'INDEPENDENT.DATE',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: 'INDEPENDENT.DESCRIPTION',
      },
      {
        titre1: 'GLOBALSOFT.TITLE1',
        titre2: 'GLOBALSOFT.TITLE2',
        titre3: 'GLOBALSOFT.TITLE3',
        date: 'GLOBALSOFT.DATE',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: 'GLOBALSOFT.DESCRIPTION',
      },
      // {
      //   titre1: 'IBM',
      //   titre2: 'Montpellier',
      //   titre3: 'Technicien',
      //   date: '2008 (3 mois)',
      //   icon: ICON.work.icon,
      //   color: ICON.work.color,
      // },
    ];

    this.formations = [
      {
        titre1: 'OCLOCK.TITLE1',
        titre2: 'OCLOCK.TITLE2',
        titre3: 'OCLOCK.TITLE3',
        date: 'OCLOCK.DATE',
        icon: ICON.school.icon,
        color: ICON.school.color,
        description: 'OCLOCK.DESCRIPTION',
        // bullets: [
        //   'spécialité React, le 5e mois',
        //   'projet de fin de formation, le 6e mois : https://www.youtube.com/watch?v=mQki_QvYDJ0&t=7679s',
        // ],
      },

      {
        titre1: 'DHUODA.TITLE1',
        titre2: 'DHUODA.TITLE2',
        titre3: 'DHUODA.TITLE3',
        date: 'DHUODA.DATE',
        icon: ICON.school.icon,
        color: ICON.school.color,
      },
      // {
      //   titre1: 'Lycée Champollion',
      //   titre2: 'Montpellier',
      //   titre3: 'Bac STI',
      //   date: '2004 - 2006',
      //   icon: ICON.school.icon,
      //   color: ICON.school.color,
      //   description: 'Génie électronique',
      // },
    ];
  }
}
