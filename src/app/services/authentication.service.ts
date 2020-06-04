import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';

  constructor(private http: HttpClient) { }

    login(username: string, password: string) {


        //Ruta no generica
        return this.http.post<any>(this.API_ENDPOINT+'clientes', { username, password })
            .pipe(map(user => {
                // Inicio de sesión exitoso si hay un usuario en la respuesta
                if (user) {

                    /* almacenar detalles de usuario y credenciales de autenticación básicas en el almacenamiento local
                     para mantener al usuario conectado entre actualizaciones de página */
                    
                    user.authdata = window.btoa(username + ':' + password);
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    //Faltaria el header para que te redirija a la pagina correspondiente aqui o en el ts del login
                    /*if (segun sea administrador, cliente, o monitor){
                        se redirija ah su pagina

                        this.router.navigate(['/inicioCliente'], {
                            queryParams: { returnUrl: state.url }  
                            });

                    }*/
                }

                return user;
            }));
            
    }

    logout() {
        // eliminar usuario del almacenamiento local para cerrar sesión
        localStorage.removeItem('currentUser');
    }

}
