import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports:      [ BrowserModule, FormsModule , MatCheckboxModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
