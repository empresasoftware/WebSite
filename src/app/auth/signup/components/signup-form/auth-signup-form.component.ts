import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';

//------WS para el registro de cliente
import { ClienteService } from '../../../../service/cliente.service';
import { Cliente } from '../../../../model/cliente';
import { User } from '../../../../model/user';
import { AuthService2 } from '../../../../service/auth2.service';

@Component({
  selector: 'app-auth-signup-form',
  templateUrl: './auth-signup-form.component.html',
  styleUrls: [
    './styles/auth-signup-form.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})

export class AuthSignupFormComponent {
  signupForm: FormGroup;
  // Where to redirect the user after successful login
  @Input() redirectUrl: string;
  @Output() success = new EventEmitter();
  
  //Del David
  formStacked: FormGroup;
  formHorizontal: FormGroup;
  formRegister: FormGroup;
  formLogin: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  public user: User = new User();
    
  public cliente: Cliente = new Cliente();

  public name: AbstractControl
  public pass: AbstractControl
  public pais: AbstractControl
  public estado: AbstractControl
  public fecha: AbstractControl
  public username: AbstractControl

  constructor(
    fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
    public authService2: AuthService2,
    public serviceCliente: ClienteService)
    {
    this.formStacked = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      newsletter: new FormControl(true),
      
    });
    this.formHorizontal = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(true)
    });
    this.formRegister = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)
    });
    this.formLogin = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

   
  this.email = this.formLogin.controls['email'];
  this.password = this.formLogin.controls['password'];
  this.name = this.formRegister.controls['name']
  this.username = this.formRegister.controls['username']
  this.pais = this.formRegister.controls['pais']
  this.fecha= this.formRegister.controls['fecha']
  this.estado=this.formRegister.controls['estado']
  }

  public onSubmit(values: Object): void {
    if (this.formLogin.valid) {
        
        this.user = new User(this.email.value, '', this.password.value, '')
        this.authService2.loginUser(this.user).then((data) => {
            localStorage.setItem('currentUser', JSON.stringify(data))
            
            alert('Login OK')
        }).catch(() => {
           
           
        })
    }
}

createCliente(values: Object) {
  this.cliente.name = this.name.value
  this.cliente.username=this.username.value
  this.cliente.password=this.pass.value
  this.cliente.pais= this.pais.value
  this.cliente.estado='Activo'
  this.cliente.fechaNacimiento=this.fecha.value
  var date:Date = this.fecha.value
  this.cliente.fechaNacimiento = (date.getDay()+'-'+date.getMonth()+'-'+date.getFullYear())
  this.cliente.fechaNacimiento ='12-05-1993'
  console.log(this.cliente)
  this.serviceCliente.createCliente(this.cliente
    
    ).then(data => {
      
      console.log(data)
      
    })
}
}

export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
      return { invalidEmail: true };
  }
}
