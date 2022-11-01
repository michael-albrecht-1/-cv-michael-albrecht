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
  bullets?: string[];
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
        titre1: 'Odeis',
        titre2: 'Vannes',
        titre3: 'Développeur Front End',
        date: 'Depuis juin  2021',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description:
          "Conception en agilité d'une application from scratch de gestion de point de vente.",
        bullets: [
          "co-animation d'ateliers avec un panel de clients pour recueillir leur besoins et faire tester la solution",
          "développement de l'application Angular",
          'mise en place de bonnes pratiques : code review, sprint review',
          "mise en place d'une stratégie de tests",
          "animation d'atelier sur la Clean Architecture et implémentation",
          'formations de collègues sur rxjs, tests/tdd',
        ],
      },
      {
        titre1: 'Odeis',
        titre2: 'Vannes',
        titre3: 'Technicien Support',
        date: '2016 - 2021',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: "Prise d'appels, testing, installations, formations",
      },
      {
        titre1: 'Auto-entrepreneur',
        titre2: 'Vannes',
        titre3: 'Technicien',
        date: '2014 - 2016',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: 'Formation, installations, dépannages',
      },
      {
        titre1: 'GlobalSOFT',
        titre2: 'Montpellier',
        titre3: 'Technicien',
        date: '2009 - 2014',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description:
          'Formation, installations, dépannages, sav, gestion commerciale',
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
        titre1: 'École O’Clock',
        titre2: 'remote',
        titre3: 'Formation développeur Web',
        date: '2020 (6 mois)',
        icon: ICON.school.icon,
        color: ICON.school.color,
        description:
          'Formation en télé-présentiel portant sur le développement Front End et Back End',
        bullets: [
          'spécialité React, le 5e mois',
          'projet de fin de formation, le 6e mois : https://www.youtube.com/watch?v=mQki_QvYDJ0&t=7679s',
        ],
      },

      {
        titre1: 'Lycée Dhuoda',
        titre2: 'Nîmes',
        titre3:
          'BTS Informatique et réseaux pour l’industrie et les services techniques',
        date: '2006 -2008',
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
