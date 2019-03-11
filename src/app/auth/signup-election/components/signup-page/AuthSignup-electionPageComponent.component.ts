import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-auth-signup-page',
  templateUrl: './AuthSignup-electionPageComponent.component.html',
  styleUrls: [
    './styles/auth-signup-page.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthSignup-electionPageComponent {
  constructor() { }
  redirectAccount(): void {
    console.log('Do facebook signup');
  }
}
