import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-auth-signup-page',
  templateUrl: './auth-signup-page.component.html',
  styleUrls: [
    './styles/auth-signup-page.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthSignup2PageComponent {
  constructor() { }

  redirectAccount(): void {
    console.log('Do facebook signup');
  }
}
