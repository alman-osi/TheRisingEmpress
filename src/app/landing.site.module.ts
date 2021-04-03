import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingSiteComponent } from './landing.site.component';

@NgModule({
  declarations: [
    LandingSiteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingSiteComponent]
})
export class LandingSiteModule { }
