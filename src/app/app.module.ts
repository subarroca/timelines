import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarModule } from './bar/bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
