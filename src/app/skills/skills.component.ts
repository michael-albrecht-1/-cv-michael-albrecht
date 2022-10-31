import { Component } from '@angular/core';
type Skill = {
  label: string;
  percent: number;
};
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      label: 'JS',
      percent: 75,
    },
    {
      label: 'HTML/CSS',
      percent: 75,
    },
    {
      label: 'Angular',
      percent: 75,
    },
    {
      label: 'React',
      percent: 50,
    },
    {
      label: 'RXJS',
      percent: 75,
    },
    {
      label: 'Redux',
      percent: 50,
    },
    {
      label: 'UI/UX',
      percent: 75,
    },
    {
      label: 'Clean architecture',
      percent: 75,
    },
    {
      label: 'Software craftsmanship',
      percent: 75,
    },
    {
      label: 'DDD',
      percent: 25,
    },
    {
      label: 'Git',
      percent: 70,
    },
  ];
}
