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
      label: 'Typescript / NestJS',
      percent: 90,
    },
    {
      label: 'SQL',
      percent: 75,
    },
    {
      label: 'Terraform',
      percent: 75,
    },
    {
      label: 'GCP',
      percent: 75,
    },
    {
      label: 'Git',
      percent: 75,
    },
    {
      label: 'HTML/CSS',
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
      label: 'Angular / React / Flutter',
      percent: 50,
    },
    {
      label: 'Java / Python',
      percent: 25,
    },
  ];
}
