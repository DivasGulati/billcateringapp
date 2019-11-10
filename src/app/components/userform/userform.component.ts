import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators,FormGroup} from '@angular/forms';
import {Userinfo} from '../../models/userinfo';
import {UserService} from '../../services/user.service';

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
      team:['', Validators.required],
      description: ['', Validators.required],
      meal: ['', Validators.required],
      department: ['', Validators.required],
    });

    console.log(this.userinfoFormGroup.get('firstname').hasError('required'));
    console.log(this.userinfoFormGroup);
    console.log(this.userinfoFormGroup.value);
    
    console.log(this.userinfoFormGroup.status);

  }

 userinfoFormGroup : FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder) { }


  handleSubmit(ownerFormValue) {
    this.userService.saveUserInfo(this.userinfoFormGroup.value)
      .subscribe(
        user => {
          console.log(`Saved successfully. ${JSON.stringify(user)}`);
          this.userinfoFormGroup.reset({ name: '', description: '', price: 0, quantityOnHand: 0 });
        },
        error => { alert(error); }
      );
  }

}