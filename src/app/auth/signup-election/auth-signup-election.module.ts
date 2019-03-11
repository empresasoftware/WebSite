import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthSignup-electionPageComponent } from "./components/signup-page/AuthSignup-electionPageComponent.component";
import { AuthSignup-electionPageResolver } from './resolvers/auth-signup-page.resolver';

import { AuthSharedModule } from '..';

export const authSignupRoutes = [
  {
    path: '',
    component: AuthSignup-electionPageComponent,
    resolve: {
      data: AuthSignup-electionPageResolver
    }
  }
];

@NgModule({
  declarations: [
    AuthSignup-electionPageComponent
  ],
  imports: [
    RouterModule.forChild(authSignupRoutes),
    AuthSharedModule
  ],
  providers: [
    AuthSignup-electionPageResolver
  ]
})
export class AuthSignup-electionModule { }
