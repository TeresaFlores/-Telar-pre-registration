import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PasswordRequestComponent } from './pages/password-request/password-request.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';
import { PasswordSuccessfulComponent} from './pages/password-successful/password-successful.component';

const routes: Routes = [
  // { path: '**', pathMatch: 'full', redirectTo: 'Solicitud'},
  { path: 'Solicitud', component: PasswordRequestComponent },
  { path: 'Restablecer', component: RestorePasswordComponent },
  { path: 'exitoso', component: PasswordSuccessfulComponent },

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}

