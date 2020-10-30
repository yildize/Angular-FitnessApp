import { AuthGuard } from './auth/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }  //training route'unu protect ettik artık yalnızca canActivate methodunun koşulu sağlanırsa ulaşılabilecek.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard] // Guards arka planda service gibi çalışır bu yüzden provide ederiz, app.module yerine burada da provide edebiliriz.
})
export class AppRoutingModule {}
