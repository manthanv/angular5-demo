import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [CreateUserComponent]
})
export class UserModule { }
