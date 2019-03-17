import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { Cliente } from '../../../../model/cliente';
import { ClienteService } from '../../../../service/cliente.service';

@Component({
  selector: 'app-auth-signup2-form',
  templateUrl: './auth-signup-form.component.html',
  styleUrls: [
    './styles/auth-signup-form.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthSignup2FormComponent {
  signupForm: FormGroup;
  public cliente: Cliente = new Cliente();
  
  // Where to redirect the user after successful login
  @Input() redirectUrl: string;
  @Output() success = new EventEmitter();

  constructor(
    public serviceCliente: ClienteService,
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {
    this.signupForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      username: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      estatura: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      newsletter: new FormControl(false),
      terms: new FormControl(false, Validators.pattern('true'))
    });
  }
  onSubmit(): void {
    this.doSignup2(
      this.signupForm.value.name,
      this.signupForm.value.username,
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.country,
      this.signupForm.value.estatura,
      this.signupForm.value.peso,
      this.signupForm.value.newsletter
    );
  }

  doSignup2(name: string, username:string,email: string, password: string,country:string,estatura:string,peso:string, newsletter: boolean): void {
    this.authService.signup2(name,username, email, password,country,estatura,peso, newsletter)
    .subscribe(
      res => {
        this.success.emit(true);
        this.signupForm.reset();

        if (this.redirectUrl) {
          setTimeout(() => {
            return this.router.navigate([this.redirectUrl]);
          }, 500);
        }
      },
      err => {
        console.log('Ha habido un error durante la creación de la cuenta');
      }
    );
  }

  createCliente(values: Object) {
    this.cliente.name = this.signupForm.value.name
    this.cliente.username=this.signupForm.value.username
    this.cliente.password=this.signupForm.value.password
    this.cliente.pais= this.signupForm.value.pais
    this.cliente.estado='Activo'
    this.cliente.fechaNacimiento=this.signupForm.value.fechaNacimiento
    //var date:Date = this.signupForm.value.fechaNacimiento
    //this.cliente.fechaNacimiento = (date.getDay()+'-'+date.getMonth()+'-'+date.getFullYear())
    this.cliente.fechaNacimiento ='12-05-1993'
    console.log(this.cliente)
    
    this.serviceCliente.createCliente(this.cliente
      
      ).then(data => {
        
        console.log(data)
        
      })
  }

  // onSubmit(): void {
  //   this.doSignup(this.signupForm.value.name, this.signupForm.value.email,
  //     this.signupForm.value.password, this.signupForm.value.newsletter);
  // }

  // doSignup(name: string, email: string, password: string, newsletter: boolean): void {
  //   this.authService.signup(name, email, password, newsletter)
  //   .subscribe(
  //     res => {
  //       this.success.emit(true);
  //       this.signupForm.reset();

  //       if (this.redirectUrl) {
  //         setTimeout(() => {
  //           return this.router.navigate([this.redirectUrl]);
  //         }, 500);
  //       }
  //     },
  //     err => {
  //       console.log('There was an ERROR while creating the account');
  //     }
  //   );
  // }
}
