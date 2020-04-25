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
  API_ENDPOINT = 'htto://pi.diiesmurgi.org/~eduardo/api';
  actividades: Actividad[];
  constructor(private actividadesService: ActividadesService, private httpClient: HttpClient) {
    httpClient.get(this.API_ENDPOINT + '/actividades').subscribe((data: Actividad[]) => {
      this.actividades = data;
    });  
  }

  ngOnInit(): void {
  }

}
