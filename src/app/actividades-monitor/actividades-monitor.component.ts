import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../interfaces/actividad';

@Component({
  selector: 'app-actividades-monitor',
  templateUrl: './actividades-monitor.component.html',
  styleUrls: ['./actividades-monitor.component.scss']
})
export class ActividadesMonitorComponent implements OnInit {

  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';

  actividades: Actividad[];
  actividadesTotales: Actividad[];
  recibido: any;
  filasTotalesActividades: any;

  filterActividad = '';
  pageActual: number = 1;

  constructor(private actividadesService: ActividadesService, private httpClient: HttpClient) { 

    this.getActividades();

  }

  ngOnInit(): void {
  }

  getActividades(){
    this.httpClient.get(this.API_ENDPOINT + 'actividades').subscribe((data: Actividad[]) => {
      this.recibido = data;
      this.actividades=this.recibido.data;
    });

    this.httpClient.get(this.API_ENDPOINT + 'actividades').subscribe((filasTotales: Actividad[]) => {
      this.filasTotalesActividades = filasTotales;
      this.actividadesTotales=this.filasTotalesActividades.filasTotales;
    });
  }


}
