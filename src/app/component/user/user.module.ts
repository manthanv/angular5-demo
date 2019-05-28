import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  entryComponents: [CreateUserComponent]
})
export class UserModule { }
