import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Monitor, RootObject } from '../interfaces/monitores';
import { MonitoresService } from '../services/monitores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private dniPattern: any = /^[XYZ]?([0-9]{7,8})([A-Za-z])$/;

  modificar: boolean=false;
  codigo: any;
  monitores: Monitor[];

  monitor: Monitor = {
    nombre: null,
    nif: null,
    direccion: null,
    correo: null,
    telefono: null,
    contrasena: null
  }

  signupForm: FormGroup;

  constructor( private _builder: FormBuilder, private monitoresServices: MonitoresService, private activatedRoute: ActivatedRoute ) {

    this.codigo= this.activatedRoute.snapshot.params['codigo'];

    if (this.codigo){
      
      this.modificar = true;

      this.monitoresServices.get().subscribe((response)=>{
        console.log(response);
        this.monitores=(response as RootObject).data

        this.monitor = this.monitores.find(
          (elemento) => elemento.codigo==this.codigo
        );

      });
  
    }else{
      this.modificar=false;
    }

    this.signupForm = this._builder.group({
      nombre: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] ) ],
      nif: ['', Validators.compose( [Validators.required, Validators.pattern(this.dniPattern) ] ) ],
      direccion: ['', Validators.compose( [Validators.required] ) ],
      email: ['', Validators.compose( [Validators.required, Validators.pattern(this.emailPattern) ] ) ],
      telefono: ['', Validators.compose( [Validators.required, Validators.minLength(9) ] ) ],
      contrasena: ['', Validators.compose( [Validators.required, Validators.minLength(5) ] )]
    });
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.signupForm.reset();
  }

  saveMonitor(){
  
    if(this.modificar){
      
      this.monitoresServices.put(this.monitor).subscribe((data)=>{

        alert('Monito modificado con exito');
        console.log(data);
      }, (error)=>{
        console.log(error);
        alert('Ocurrio un error al modificar.')
      })

    }else{

      this.monitoresServices.save(this.monitor).subscribe((data)=>{
        alert('Monitor guardado con exito');
        console.log(data);
      }, (error)=>{
        console.log(error);
        alert('Ocurrio un error.')
      });

    }

  }

  get nombre() { return this.signupForm.get('nombre'); }
  get email() { return this.signupForm.get('email'); }
  get contrasena() { return this.signupForm.get('contrasena'); }
  get nif() { return this.signupForm.get('nif'); }
  get telefono() { return this.signupForm.get('telefono'); }
  get direccion() { return this.signupForm.get('direccion'); }

}
