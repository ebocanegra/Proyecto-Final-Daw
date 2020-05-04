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

  get(){
    return this.httpClient.get(this.API_ENDPOINT+"clientes");
  }

  save(clientes: Cliente ) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'clientes', clientes, {headers: headers});
  }

  put(cliente){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'clientes/'+cliente.codigo, cliente, {headers: headers});
  }

  delete(codigo){
    return this.httpClient.delete(this.API_ENDPOINT+"clientes/" + codigo);
  }
  
}
