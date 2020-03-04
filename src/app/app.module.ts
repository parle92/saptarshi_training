import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyDetailsComponent } from './welcome/my-details/my-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WelcomeComponent, MyDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
