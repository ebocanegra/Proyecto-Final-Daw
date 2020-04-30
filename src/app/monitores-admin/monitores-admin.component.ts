import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monitor } from '../interfaces/monitores';
import { MonitoresService } from '../services/monitores.service';

@Component({
  selector: 'app-monitores-admin',
  templateUrl: './monitores-admin.component.html',
  styleUrls: ['./monitores-admin.component.scss']
})
export class MonitoresAdminComponent implements OnInit {
  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';
  monitores: Monitor[];
  monitoresTotales: Monitor[];
  recibidoMonitor: any;
  filasTotalesMonitores:any;

  constructor(private monitoresService:MonitoresService, private httpClient: HttpClient ) {

    this.httpClient.get(this.API_ENDPOINT + 'monitores').subscribe((data: Monitor[]) => {
      this.recibidoMonitor = data;
      this.monitores=this.recibidoMonitor.data;
    });

    this.httpClient.get(this.API_ENDPOINT + 'monitores').subscribe((filasTotales: Monitor[]) => {
      this.filasTotalesMonitores = filasTotales;
      this.monitoresTotales=this.filasTotalesMonitores.filasTotales;
    });

   }

  ngOnInit(): void {
  }

}
