import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalComponent } from './personal/personal.component';
import { RegistroComponent } from './registro/registro.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';
import { ActividadesAdminComponent } from './actividades-admin/actividades-admin.component';
import { NavClienteComponent } from './nav-cliente/nav-cliente.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { CalculadoraClienteComponent } from './calculadora-cliente/calculadora-cliente.component';
import { RutinasClienteComponent } from './rutinas-cliente/rutinas-cliente.component';

const appRoutes:Routes=[
  {
    path:'',
    component: MainComponent
  },
  {
    path:'actividades',
    component: ActividadesComponent
  },
  {
    path:'personal',
    component: PersonalComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path:'inicioAdmin',
    component: InicioAdminComponent
  },
  {
    path:'actividadesAdmin',
    component: ActividadesAdminComponent
  },
  {
    path:'usuarioAdmin',
    component: UsuarioAdminComponent
  },
  {
    path:'inicioCliente',
    component: InicioClienteComponent
  },
  {
    path:'calculadoraCliente',
    component: CalculadoraClienteComponent
  },
  {
    path:'rutinasCliente',
    component: RutinasClienteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ActividadesComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    PersonalComponent,
    RegistroComponent,
    NavAdminComponent,
    InicioAdminComponent,
    UsuarioAdminComponent,
    ActividadesAdminComponent,
    NavClienteComponent,
    InicioClienteComponent,
    CalculadoraClienteComponent,
    RutinasClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
