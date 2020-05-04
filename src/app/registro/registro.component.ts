import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Monitor } from '../interfaces/monitores';
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

  monitor: Monitor = {
    nombre: null,
    nif: null,
    direccion: null,
    correo: null,
    telefono: null,
    contrasena: null
  };

  signupForm: FormGroup;
 /* codigo: any;
  modificar: boolean=false;
  monitores: Monitor[];*/
  constructor( private _builder: FormBuilder, private monitoresServices: MonitoresService, private activatedRoute: ActivatedRoute ) {

    /*this.codigo= this.activatedRoute.snapshot.params['codigo'];

    if(this.codigo){
      this.modificar=true;
      this.monitoresServices.get().subscribe((data: Monitor[])=>{
        this.monitores=data;
        this.monitor=this.monitores.find((m)=>{return m.codigo==this.codigo});
      }, (error)=>{
        console.log(error)
      });
    }else{
      this.modificar=false
    }*/

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
  
    this.monitoresServices.save(this.monitor).subscribe((data)=>{
      alert('Cliente guardado con exito');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error.')
    })

  }

  get nombre() { return this.signupForm.get('nombre'); }
  get email() { return this.signupForm.get('email'); }
  get contrasena() { return this.signupForm.get('contrasena'); }
  get nif() { return this.signupForm.get('nif'); }
  get telefono() { return this.signupForm.get('telefono'); }
  get direccion() { return this.signupForm.get('direccion'); }

}
