import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progression',
  templateUrl: './skill-progression.component.html',
  styleUrls: ['./skill-progression.component.scss'],
})
export class SkillProgressionComponent {
  @Input() percent!: number;
}
