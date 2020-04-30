import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monitor } from '../interfaces/monitores';
import { MonitoresService } from '../services/monitores.service';
import { Cliente } from '../interfaces/clientes';
import { Actividad } from '../interfaces/actividad';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.scss']
})
export class InicioAdminComponent implements OnInit {

  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';

  monitoresTotales: Monitor[];
  filasTotalesMonitores:any;
  actividadesTotales: Actividad[];
  clientesTotales: Cliente[];
  filasTotalesClientes: any;
  recibidoTotales: any;
  filasTotalesActividades: any;

  constructor(private monitoresService:MonitoresService, private httpClient: HttpClient ) {

    this.httpClient.get(this.API_ENDPOINT + 'clientes').subscribe((filasTotales: Cliente[]) => {
      this.filasTotalesClientes = filasTotales;
      this.clientesTotales=this.filasTotalesClientes.filasTotales;
    });

    this.httpClient.get(this.API_ENDPOINT + 'monitores').subscribe((filasTotales: Monitor[]) => {
      this.filasTotalesMonitores = filasTotales;
      this.monitoresTotales=this.filasTotalesMonitores.filasTotales;
    });

    this.httpClient.get(this.API_ENDPOINT + 'actividades').subscribe((filasTotales: Actividad[]) => {
      this.filasTotalesActividades = filasTotales;
      this.actividadesTotales=this.filasTotalesActividades.filasTotales;
    });

   }

  ngOnInit(): void {

    

  }

  

}

