import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private fechaPattern: any = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
  private dniPattern: any = /^[XYZ]?([0-9]{7,8})([A-Za-z])$/;

  signupForm: FormGroup;

  constructor( private _builder: FormBuilder ) {
    this.signupForm = this._builder.group({
      nombre: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] ) ],
      dni: ['', Validators.compose( [Validators.required, Validators.pattern(this.dniPattern) ] ) ],
      direccion: ['', Validators.compose( [Validators.required] ) ],
      email: ['', Validators.compose( [Validators.required, Validators.pattern(this.emailPattern) ] ) ],
      telefono: ['', Validators.compose( [Validators.minLength(9) ] ) ],
      fechaNacimiento: ['', Validators.compose( [Validators.required, Validators.pattern(this.fechaPattern)  ] ) ],
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
  get dni() { return this.signupForm.get('dni'); }
  get telefono() { return this.signupForm.get('telefono'); }
  get fechaNacimiento() { return this.signupForm.get('fechaNacimiento'); }
  get direccion() { return this.signupForm.get('direccion'); }

}
