import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }            from '../../auth.guard.service';
import { AuthService }          from '../../auth.service';

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}