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
      label: 'Typescript',
      percent: 90,
    },
    {
      label: 'NestJS',
      percent: 75,
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
      label: 'RXJS',
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
      label: 'Flutter',
      percent: 50,
    },
    {
      label: 'Angular',
      percent: 50,
    },
    {
      label: 'React',
      percent: 50,
    },
    {
      label: 'UI/UX',
      percent: 50,
    },
    {
      label: 'Spring Boot',
      percent: 25,
    },
    {
      label: 'Python',
      percent: 25,
    },
  ];
}
