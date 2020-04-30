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
  recibidoMonitor: any;
  //filasTotales: any;
  constructor(private monitoresService:MonitoresService, private httpClient: HttpClient ) {

    this.httpClient.get(this.API_ENDPOINT + 'monitores').subscribe((data: Monitor[]) => {
      //this.filasTotales= filasTotales;
      this.recibidoMonitor = data;
      this.monitores=this.recibidoMonitor.data;
    });
   }

  ngOnInit(): void {
  }

}
