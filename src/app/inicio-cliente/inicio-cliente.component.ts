import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../interfaces/clientes';
@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.scss']
})
export class InicioClienteComponent implements OnInit {

  /*modificar: boolean=false;

  cliente: Cliente = {
    nombre: null,
    nif: null,
    direccion: null,
    correo: null,
    fechaInscripcion: null,
    contrasena: null
  };*/


  constructor(/*private clientesService: ClientesService*/) { }

  ngOnInit(): void {
  }

  /*onModificar(){
    this.clientesService.put(this.cliente).subscribe((data)=>{

      alert('clientes modificado con exito');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error al modificar.')
    })
  }*/

}
