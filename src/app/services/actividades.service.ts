import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Actividad } from '../interfaces/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';
  actividades: Actividad[];
  constructor(private httpClient: HttpClient) {}

  save(actividad: Actividad ) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'actividades', actividad, {headers: headers});
  }
   
}
