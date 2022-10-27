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
      percent: 70,
    },
    {
      label: 'HTML/CSS',
      percent: 80,
    },
    {
      label: 'Angular',
      percent: 80,
    },
    {
      label: 'RXJS',
      percent: 90,
    },
    {
      label: 'React',
      percent: 50,
    },
    {
      label: 'Redux',
      percent: 50,
    },
    {
      label: 'Clean archi',
      percent: 60,
    },
    {
      label: 'DDD',
      percent: 30,
    },
    {
      label: 'Git',
      percent: 70,
    },
  ];
}
