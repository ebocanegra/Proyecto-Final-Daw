import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Actividad } from '../interfaces/actividad';
import { ActividadesService } from '../services/actividades.service';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.scss']
})
export class RegistroActividadComponent implements OnInit {

  signupCrearActividad: FormGroup;
  
  actividad: Actividad = {
    nombre: null,
    codigo_monitor: null,
    informacion: null
  };

  constructor(private _builder: FormBuilder, private actividadesServices: ActividadesService) { 

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
  
    this.actividadesServices.save(this.actividad).subscribe((data)=>{
      alert('Actividadad guardada con exito');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error. Ten en cuenta que el codigo de monitor debe existir.')
    })

  }

  get nombre() { return this.signupCrearActividad.get('nombre'); }
  get monitor() { return this.signupCrearActividad.get('monitor'); }
  get informacion() { return this.signupCrearActividad.get('informacion'); }

}
