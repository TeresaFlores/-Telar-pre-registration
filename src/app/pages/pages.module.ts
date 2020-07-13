import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordSuccessfulComponent } from './password-successful/password-successful.component';
import { PasswordRequestComponent } from './password-request/password-request.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { MessageComponent } from './message/message.component';




@NgModule({
  declarations: [
    PasswordSuccessfulComponent,
    PasswordRequestComponent,
    RestorePasswordComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
