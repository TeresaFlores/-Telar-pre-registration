import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordRequestComponent } from './passwordRequest/password-request/password-request.component';
import { HeaderComponent } from './component/header/header.component';
import { RestorePasswordComponent } from './restorePassword/restore-password/restore-password.component';




@NgModule({
  declarations: [
    AppComponent,
    PasswordRequestComponent,
    HeaderComponent,
    RestorePasswordComponent,



  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
