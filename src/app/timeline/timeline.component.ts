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
  tasks?: string[];
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
        titre1: 'Odéis',
        titre2: 'Vannes',
        titre3: 'Développeur Front End',
        date: 'Depuis juin  2021',
        icon: ICON.work.icon,
        color: ICON.work.color,
        description: "Conception d'un ERP pour les bijoutiers et horlogers.",
        tasks: [
          'participation aux réflexions techniques et métier',
          "développement de l'application angular",
          '',
        ],
      },
      {
        titre1: 'Odéis',
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
      {
        titre1: 'IBM',
        titre2: 'Montpellier',
        titre3: 'Technicien',
        date: '2008 (3 mois)',
        icon: ICON.work.icon,
        color: ICON.work.color,
      },
    ];

    this.formations = [
      {
        titre1: 'École O’Clock',
        titre2: 'remote',
        titre3: 'Développeur Web',
        date: '2020 (6 mois)',
        icon: ICON.school.icon,
        color: ICON.school.color,
        description:
          'Formation en téléprésentiel portant sur le développement front-end et back-end. Spécialité React.',
      },

      {
        titre1: 'Lycée Dhuoda',
        titre2: 'Nîmes',
        titre3: 'BTS IRIS',
        date: '2006 -2008',
        icon: ICON.school.icon,
        color: ICON.school.color,
        description:
          'Informatique et réseaux pour l’industrie et les services techniques',
      },
      {
        titre1: 'Lycée Champollion',
        titre2: 'Montpellier',
        titre3: 'Bac STI',
        date: '2004 - 2006',
        icon: ICON.school.icon,
        color: ICON.school.color,
        description: 'Génie électronique',
      },
    ];
  }
}
