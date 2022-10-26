import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [AppComponent, TimelineComponent],
  imports: [BrowserModule, TimelineModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
