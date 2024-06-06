import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: ``
})
export class LoginFormComponent {

  constructor(
    private router: Router
  ) {

  }

  public iniciarSesion(): void {

    this.router.navigate(['dashboard'])

  }

}
