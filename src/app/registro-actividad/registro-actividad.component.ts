import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Actividad } from '../interfaces/actividad';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.scss']
})
export class RegistroActividadComponent implements OnInit {

  signupCrearActividad: FormGroup;
  actividad: Actividad = {
    nombre: null,
    informacion: null
  };

  constructor(private _builder: FormBuilder) { 
    this.signupCrearActividad = this._builder.group({
      nombre: ['', Validators.compose( [Validators.required, Validators.minLength(4) ] ) ],
      monitor: ['', Validators.compose( [Validators.required] )],
      informacion: ['']
    });
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.signupCrearActividad.reset();
  }

  saveActividad(){
  
    if(this.signupCrearActividad.valid){
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not valid');
    }

  }

  get nombre() { return this.signupCrearActividad.get('nombre'); }
  get monitor() { return this.signupCrearActividad.get('monitor'); }
  get informacion() { return this.signupCrearActividad.get('informacion'); }

}
