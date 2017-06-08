import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarGroupComponent } from './bar-group/bar-group.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarGroupComponent,
    BarComponent
  ],
  exports: [
    BarGroupComponent
  ]
})
export class BarModule { }
