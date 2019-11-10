import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup,FormGroupDirective } from '@angular/forms';
import {  } from '../../models/userinfo';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class userformComponent implements OnInit {
 

  ngOnInit() {
    this.userinfoFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', Validators.required],
      displayname: ['', Validators.required],
      team: ['', Validators.required],
      description: ['', Validators.required],
      department: ['', Validators.required],
    });   

  }

  userinfoFormGroup: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  handleSubmit(formDirective) {
    this.userService.saveUserInfo(this.userinfoFormGroup.value)
      .subscribe(
        user => {
          console.log(`Saved successfully. ${JSON.stringify(user)}`);  
          formDirective.resetForm();  
          this.userinfoFormGroup.reset();  
         
        },
        error => { alert(error); }
      );
  }

}