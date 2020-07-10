import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordRequestComponent } from './passwordRequest/password-request/password-request.component';




@NgModule({
  declarations: [
    AppComponent,
    PasswordRequestComponent,



  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
