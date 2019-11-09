import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { userformComponent } from './components/userform/userform.component'
import { userprofileComponent } from './components/userProfile/userprofile.component'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule,
    MatInputModule, MatCheckboxModule, MatSelectModule, ReactiveFormsModule],
  declarations: [AppComponent, userformComponent, userprofileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
