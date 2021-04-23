import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormControl, FormGroup, NgForm, NgModel, FormGroupName } from '@angular/forms';

@Component({
  selector: "app-user-creation",
  templateUrl: "./user-creation.component.html",
  styleUrls: ["./user-creation.component.css"]
})
export class UserCreationComponent  {
  userForm=new FormGroup({
    firstname:new FormControl(""),
    lastname:new FormControl(""),
    number:new FormControl(""),
      age:new FormControl(""),
  })
  onSubmit(){
    console.log(this.userForm.value);
  }
  usercreation:any = [
    {value: 'firstname',viewValue:'firstname'}
  ];

};
