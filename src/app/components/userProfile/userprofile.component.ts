import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class userprofileComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email','description','meal','department'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  description: string;
  meal: string;
  department: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  //{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {firstname: 'aa', lastname: 'Hydrogen',username: 'Hydrogen', email: 'Hydrogen', description: 'Hydrogen', meal: 'H',department: 'ss'},
  {firstname: 'aa', lastname: 'Hydrogen',username: 'Hydrogen', email: 'Hydrogen', description: 'Hydrogen', meal: 'H',department: 'ss'},
  {firstname: 'aa', lastname: 'Hydrogen',username: 'Hydrogen', email: 'Hydrogen', description: 'Hydrogen', meal: 'H',department: 'ss'},
  {firstname: 'aa', lastname: 'Hydrogen',username: 'Hydrogen', email: 'Hydrogen', description: 'Hydrogen', meal: 'H',department: 'ss'},
  {firstname: 'aa', lastname: 'Hydrogen',username: 'Hydrogen', email: 'Hydrogen', description: 'Hydrogen', meal: 'H',department: 'ss'},
  {firstname: 'aa', lastname: 'Hydrogen',username: 'Hydrogen', email: 'Hydrogen', description: 'Hydrogen', meal: 'H',department: 'ss'}
];


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */