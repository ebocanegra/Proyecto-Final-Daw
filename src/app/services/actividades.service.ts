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

  get(){
    return this.httpClient.get(this.API_ENDPOINT+"actividades");
  }

  save(actividad: Actividad ) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'actividades', actividad, {headers: headers});
  }

  put(actividad){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'actividades/' + actividad.codigo, actividad, {headers: headers});
  }

  delete(codigo){
    return this.httpClient.delete(this.API_ENDPOINT+"actividades/" + codigo);
  }
   
}
