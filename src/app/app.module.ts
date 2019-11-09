import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { userformComponent } from './components/userform/userform.component'
import { userprofileComponent } from './components/userProfile/userprofile.component'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule,MatCardModule,
    MatInputModule, MatCheckboxModule, MatSelectModule, ReactiveFormsModule,CdkTableModule,MatTableModule,MatPaginatorModule],
  declarations: [AppComponent, userformComponent, userprofileComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
