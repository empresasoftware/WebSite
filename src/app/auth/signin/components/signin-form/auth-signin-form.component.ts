import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

import { User } from '../../../../model/user';
import { AuthService2 } from '../../../../service/auth2.service';
import { Cliente } from '../../../../model/cliente';
import { ClienteService } from '../../../../service/cliente.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-auth-signin-form',
  templateUrl: './auth-signin-form.component.html',
  styleUrls: [
    './styles/auth-signin-form.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthSigninFormComponent {
  signinForm: FormGroup;
  // Where to redirect the user after successful login
  @Input() redirectUrl: string;
  @Output() success = new EventEmitter();

  public user: User = new User();
  public cliente: Cliente = new Cliente();

  public email: AbstractControl
  public password: AbstractControl

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService2
  ) {
    this.signinForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.required)
    });
  }

  public onSubmit(values: Object): void {
    if (this.signinForm.valid) {
        
        this.user = new User(this.email.value, '', this.password.value, '')
        this.authService.loginUser(this.user).then((data) => {
            localStorage.setItem('currentUser', JSON.stringify(data))
            
            alert('Login OK')
        }).catch(() => {
           
           
        })
    }
  }

  loginCliente(values:Object){
    this.user.email=this.signinForm.value.email
    this.user.password=this.signinForm.value.password
    
    console.log(this.user)
    
    this.authService.loginUser(this.user
      
      ).then(data => {
        
        console.log(data)
        
      })


  }


  // onSubmit(): void {
  //   this.doSignin(this.signinForm.value.email, this.signinForm.value.password, true);
  // }

  // doSignin(email: string, password: string, rememberMe: boolean): void {
  //   this.authService.signin(email, password, rememberMe)
  //   .subscribe(
  //     res => {
  //       this.success.emit(true);
  //       this.signinForm.reset();

  //       if (this.redirectUrl) {
  //         setTimeout(() => {
  //           return this.router.navigate([this.redirectUrl]);
  //         }, 500);
  //       }
  //     },
  //     err => {
  //       this.success.emit(false);
  //     }
  //   );
  // }
}
