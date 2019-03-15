import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthSignup2PageComponent } from './components/signup-page/auth-signup-page.component';
import { AuthSignup2PageResolver } from './resolvers/auth-signup-page.resolver';

import { AuthSharedModule } from '../';

export const authSignupRoutes = [
  {
    path: '',
    component: AuthSignup2PageComponent,
    resolve: {
      data: AuthSignup2PageResolver
    }
  }
];

@NgModule({
  declarations: [
    AuthSignup2PageComponent
  ],
  imports: [
    RouterModule.forChild(authSignupRoutes),
    AuthSharedModule
  ],
  providers: [
    AuthSignup2PageResolver
  ]
})
export class AuthSignup2Module { }
