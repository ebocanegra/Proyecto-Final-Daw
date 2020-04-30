import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../interfaces/actividad';

@Component({
  selector: 'app-actividades-admin',
  templateUrl: './actividades-admin.component.html',
  styleUrls: ['./actividades-admin.component.scss']
})
export class ActividadesAdminComponent implements OnInit {
  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';
  actividades: Actividad[];
  actividadesTotales: Actividad[];
  recibido: any;
  filasTotalesActividades: any;

  constructor(private actividadesService: ActividadesService, private httpClient: HttpClient) {
    this.httpClient.get(this.API_ENDPOINT + 'actividades').subscribe((data: Actividad[]) => {
      this.recibido = data;
      this.actividades=this.recibido.data;
    }); 
    
    this.httpClient.get(this.API_ENDPOINT + 'actividades').subscribe((filasTotales: Actividad[]) => {
      this.filasTotalesActividades = filasTotales;
      this.actividadesTotales=this.filasTotalesActividades.filasTotales;
    });

  }
  

  ngOnInit(): void {
  }

}
