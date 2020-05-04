import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Actividad } from '../interfaces/actividad';
import { ActividadesService } from '../services/actividades.service';
import { ActivatedRoute } from '@angular/router';

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

  codigo: any;
  modificar: boolean=false;
  actividades: Actividad[];
  auxiliar: any;
  constructor(private _builder: FormBuilder, private actividadesServices: ActividadesService, private activatedRoute: ActivatedRoute) { 
    this.codigo= this.activatedRoute.snapshot.params['codigo'];

    if (this.codigo){
      this.modificar = true;
      this.actividadesServices.get().subscribe((data: Actividad[])=>{
        this.actividades = data;
        /*
         Aqui me da un error en la consola de que no metemos los datos bien
         */
        console.log(this.codigo);

        for(this.auxiliar in this.actividades){
          if(this.auxiliar.codigo==this.codigo){
            this.actividad=this.actividades[this.codigo];
          }
        }
        console.log(this.actividad);
      }, (error)=>{ console.log(error) });
    }else{
      this.modificar=false;
    }

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
    
    if(this.modificar){
      
      this.actividadesServices.put(this.actividad).subscribe((data)=>{

        alert('Actividadad modificada con exito');
        console.log(data);
      }, (error)=>{
        console.log(error);
        alert('Ocurrio un error al modificar.')
      })

    }else{

      this.actividadesServices.save(this.actividad).subscribe((data)=>{
        alert('Actividadad guardada con exito');
        console.log(data);
      }, (error)=>{
        console.log(error);
        alert('Ocurrio un error al guardar. Ten en cuenta que el codigo de monitor debe existir.')
      })

    }
  }//Fin del metodo saveActividad.

  get nombre() { return this.signupCrearActividad.get('nombre'); }
  get monitor() { return this.signupCrearActividad.get('monitor'); }
  get informacion() { return this.signupCrearActividad.get('informacion'); }

}
