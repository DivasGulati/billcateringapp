import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {MatCheckboxModule} from '@angular/material/checkbox';

import { userformComponent } from './components/userform/userform.component'
import { userprofileComponent } from './components/userProfile/userprofile.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatCheckboxModule ],
  declarations: [ AppComponent,userformComponent,userprofileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
