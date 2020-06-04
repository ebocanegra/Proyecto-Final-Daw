import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupLogin: FormGroup;

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private _builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {

    this.signupLogin = this._builder.group({
      nombre: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] ) ],
      contrasena: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] )]
    });
    

   }

  ngOnInit(): void {

     //restablecer estado de inicio de sesión
     this.authenticationService.logout();

     //Obtener URL de retorno de los parámetros de ruta o por defecto a '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onResetForm(){
    this.signupLogin.reset();
  }

  onSaveForm(){
  
    if(this.signupLogin.valid){
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not valid');
    }

  }


  get f() { return this.signupLogin.controls; }
  get nombre() { return this.signupLogin.get('nombre'); }
  get contrasena() { return this.signupLogin.get('contrasena'); }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupLogin.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.nombre.value, this.f.contrasena.value)
        .pipe(first())
        .subscribe(
            data => {
              /*if (segun sea administrador, cliente, o monitor){
                se redirija ah su pagina*/
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

  

}
