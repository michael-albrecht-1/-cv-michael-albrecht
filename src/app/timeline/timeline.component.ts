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
};
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  events!: Event[];

  ngOnInit() {
    this.events = [
      {
        titre1: 'Odéis',
        titre2: 'Vannes',
        titre3: 'Développeur Web',
        date: 'Depuis juin  2021',
        icon: ICON.work.icon,
        color: ICON.work.color,
      },
      {
        titre1: 'École O’Clock',
        titre2: 'remote',
        titre3: 'Développeur Web',
        date: '2020 (6 mois)',
        icon: ICON.school.icon,
        color: ICON.school.color,
      },
      {
        titre1: 'Odéis',
        titre2: 'Vannes',
        titre3: 'Technicien Support',
        date: '2016 - 2021',
        icon: ICON.work.icon,
        color: ICON.work.color,
      },
    ];
  }
}
