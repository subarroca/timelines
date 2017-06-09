import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';
import { BarService } from './../bar/shared/bar.service';
import { BarGroupComponent } from './../bar-group/bar-group.component';
import { BarComponent } from './../bar/bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarComponent,
    BarGroupComponent,
    TimelineComponent
  ],
  exports: [
    TimelineComponent
  ],
  providers: [
    BarService
  ]
})
export class TimelineModule { }
