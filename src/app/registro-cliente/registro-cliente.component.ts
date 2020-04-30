import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private dniPattern: any = /^[XYZ]?([0-9]{7,8})([A-Za-z])$/;
  private fechaPattern: any = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;

  signupCliente: FormGroup;

  constructor( private _builder: FormBuilder ) {
    this.signupCliente = this._builder.group({
      nombre: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] ) ],
      nif: ['', Validators.compose( [Validators.required, Validators.pattern(this.dniPattern) ] ) ],
      direccion: ['', Validators.compose( [Validators.required] ) ],
      email: ['', Validators.compose( [Validators.required, Validators.pattern(this.emailPattern) ] ) ],
      fechaInscripcion: ['', Validators.compose( [Validators.required, Validators.pattern(this.fechaPattern) ] ) ],
      contrasena: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] )]
    });
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.signupCliente.reset();
  }

  onSaveForm(){
  
    if(this.signupCliente.valid){
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not valid');
    }

  }

  get nombre() { return this.signupCliente.get('nombre'); }
  get email() { return this.signupCliente.get('email'); }
  get contrasena() { return this.signupCliente.get('contrasena'); }
  get nif() { return this.signupCliente.get('nif'); }
  get fechaInscripcion() { return this.signupCliente.get('fechaInscripcion'); }
  get direccion() { return this.signupCliente.get('direccion'); }

}
