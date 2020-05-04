import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../interfaces/clientes';
@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.scss']
})
export class UsuarioAdminComponent implements OnInit {
  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';

  clientes: Cliente[];
  clientesTotales: Cliente[];
  recibidoClientes: any;
  filasTotalesClientes: any;
  recibidoTotales: any;
  constructor(private clientesService:ClientesService, private httpClient: HttpClient) {
    this.getClientes();
   }

  ngOnInit(): void {
  }

  getClientes(){
    this.httpClient.get(this.API_ENDPOINT + 'clientes').subscribe((data: Cliente[]) => {
      this.recibidoClientes = data;
      this.clientes=this.recibidoClientes.data;
    });

    this.httpClient.get(this.API_ENDPOINT + 'clientes').subscribe((filasTotales: Cliente[]) => {
      this.filasTotalesClientes = filasTotales;
      this.clientesTotales=this.filasTotalesClientes.filasTotales;
    });
  }

  delete(codigo){

    if(confirm("Seguro que deseas eliminar el cliente?")){
      this.clientesService.delete(codigo).subscribe((data)=>{
        alert('Cliente eliminado con exito');
        console.log(data);
        this.getClientes();
      }, (error)=>{
        console.log(error);
        alert('Ocurrio un error al eliminar.');
      });
    }//Fin del if

    
  }

}
