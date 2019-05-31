import { Component, OnInit } from '@angular/core';
import {NgForm,Validators,FormBuilder,FormGroup}from '@angular/forms'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createUserFrom:FormGroup
  constructor(private fb:FormBuilder) {
    this.createUserFrom=this.fb.group({
      name:["",[Validators.required,Validators.pattern("^[A-Za-z]*$")]],
      dob:["",Validators.required],
      address:["",Validators.required],
      phone:["",Validators.required],
      photo:["",Validators.required]
    })
   }

  ngOnInit() {
  }

  onCreate(){

  }

}
