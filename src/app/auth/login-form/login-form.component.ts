import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: ``
})
export class LoginFormComponent {

  public formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router
  ) {

  }

  public iniciarSesion(): void {

    let username = this.formLogin.value.username
    let password = this.formLogin.value.password
    
    if ( username === 'admin' && password === 'admin' ) {
      
      this.router.navigate(['dashboard'])
      
    }


  }

}
