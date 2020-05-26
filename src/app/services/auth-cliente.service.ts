import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { Cliente } from '../interfaces/clientes';


@Injectable({
  providedIn: 'root'
})
export class AuthClienteService {

  constructor(private htttp: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });


  registerCliente(correo: string, contrasena: string) {
    const url_api = "http://pi.diiesmurgi.org/~eduardo/public/api/clientes";
    return this.htttp
      .post<Cliente>(
        url_api,
        {
          correo: correo,
          contrasena: contrasena
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

  /*loginCliente(correo: string, contrasena: string): Observable<any> {
    const url_api = "http://pi.diiesmurgi.org/~eduardo/public/api/login?include=cliente";

    //Tengo que arreglar esta ruta antes de seguir ya que no esta creada en laravel 

    return this.htttp
      .post<Cliente>(
        url_api,
        { correo, contrasena },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }*/

  setCliente(user: Cliente): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): Cliente {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: Cliente = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  /*logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://pi.diiesmurgi.org/~eduardo/public/api/logout?access_token=${accessToken}`;

    //Tengo que arreglar esta ruta antes de seguir ya que no esta creada en laravel 

    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.htttp.post<Cliente>(url_api, { headers: this.headers });
  }*/


}
