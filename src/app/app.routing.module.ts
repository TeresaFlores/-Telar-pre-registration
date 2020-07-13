import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PasswordRequestComponent } from './pages/password-request/password-request.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';
import { PasswordSuccessfulComponent} from './pages/password-successful/password-successful.component';
import { MessageComponent } from './pages/message/message.component';

const routes: Routes = [
  { path: '',  component: PasswordRequestComponent },
  { path: 'mensaje', component: MessageComponent },
  { path: 'restablecer', component: RestorePasswordComponent },
  { path: 'exitoso', component: PasswordSuccessfulComponent },

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}

