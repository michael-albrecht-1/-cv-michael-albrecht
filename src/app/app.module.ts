import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillProgressionComponent } from './skill-progression/skill-progression.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    ContactComponent,
    SkillsComponent,
    SkillProgressionComponent,
  ],
  imports: [BrowserModule, TimelineModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
