import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup,NgForm } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.loginFrom=this.fb.group({
      username:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }

  ngOnInit() {
  }

doLogin(){
  
}
}
