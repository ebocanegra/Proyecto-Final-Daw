import { Injectable } from '@angular/core';
import { Monitor } from '../interfaces/monitores';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitoresService {
  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';
  monitores: Monitor[];
  constructor(private httpClient: HttpClient) { }

  save(monitores: Monitor ) {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'monitores', monitores, {headers: headers});
  }

}
