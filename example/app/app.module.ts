import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatbotModule } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ChatbotModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
