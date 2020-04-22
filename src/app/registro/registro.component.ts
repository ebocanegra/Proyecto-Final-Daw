import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  signupForm: FormGroup;

  constructor( private _builder: FormBuilder ) {
    this.signupForm = this._builder.group({
      nombre: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] ) ],
      email: ['', Validators.compose( [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern) ] ) ],
      contrasena: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] )]
    });
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.signupForm.reset();
  }

  onSaveForm(){
  
    if(this.signupForm.valid){
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not valid');
    }

  }

  get nombre() { return this.signupForm.get('nombre'); }
  get email() { return this.signupForm.get('email'); }
  get contrasena() { return this.signupForm.get('contrasena'); }


}
