import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Userinfo } from '../../models/userinfo';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class userprofileComponent implements OnInit {

  userinfo: Userinfo[];
  dataSource: MatTableDataSource<Userinfo>;
  constructor(private userService: UserService) { }
  displayedColumns: string[] = ['firstName', 'lastName', 'displayName', 'description', 'email', 'department', 'team'];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {

    this.userService.refreshNeeded$
      .subscribe(
        () => this.getProfileData()
      );

    this.getProfileData();
    this.dataSource.paginator = this.paginator;
  }

  private getProfileData() {
    this.userService.getAllProfiles().subscribe(

      (userinfo: Userinfo[]) => {
        this.userinfo = userinfo;
        this.dataSource = new MatTableDataSource<Userinfo>(this.userinfo);
        this.dataSource.paginator = this.paginator;
        console.log(this.userinfo);
      }

    );
  }
}