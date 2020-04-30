import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interfaces/clientes';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';
  clientes: Cliente[];
  constructor(private httpClient: HttpClient) {}

  save(clientes: Cliente ) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'clientes', clientes, {headers: headers});
  }
  
}
