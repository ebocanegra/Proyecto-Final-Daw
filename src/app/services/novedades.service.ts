import { Injectable } from '@angular/core';
import { Novedad } from '../interfaces/novedades';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';
  novedades: Novedad[];

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+"novedades");
  }

  save(novedad: Novedad ) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'novedades', novedad, {headers: headers});
  }

  put(novedad){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'novedades/'+novedad.codigo, novedad, {headers: headers});
  }

  delete(codigo){
    return this.httpClient.delete(this.API_ENDPOINT+"novedades/" + codigo);
  }

}
