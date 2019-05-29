import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup,NgForm } from '@angular/forms'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private routes:Router) { 
    this.loginFrom=this.fb.group({
      username:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }

  ngOnInit() {
  }

doLogin(forms:NgForm){
  if(forms.valid){
    this.auth.doLogin(this.loginFrom.value).subscribe((res)=>{
      if(res.status==200){
        this.routes.navigate(['/'])
      }
    })
  }  
}
}
