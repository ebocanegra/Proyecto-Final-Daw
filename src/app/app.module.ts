import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

//Import de las rutas del sevidor
import {HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {NgxSpinnerModule} from 'ngx-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { RutinaPrincipianteComponent } from './rutina-principiante/rutina-principiante.component';
import { RutinaAvanzadaComponent } from './rutina-avanzada/rutina-avanzada.component';
import { RutinaCasaComponent } from './rutina-casa/rutina-casa.component';
import { RegistroActividadComponent } from './registro-actividad/registro-actividad.component';
import { MonitoresAdminComponent } from './monitores-admin/monitores-admin.component';
import { RegistroErrorComponent } from './registro-error/registro-error.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { FilterPipe } from './pipes/filter.pipe';
import { InicioMonitorComponent } from './inicio-monitor/inicio-monitor.component';
import { NavMonitorComponent } from './nav-monitor/nav-monitor.component';
import { ActividadesMonitorComponent } from './actividades-monitor/actividades-monitor.component';
import { from } from 'rxjs';

const appRoutes:Routes = [
  
  
  {
    path:'', component: NavComponent,
    children: [
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
    ]
  },

  {
    path:'', component: NavClienteComponent,
    children: [
      {
        path:'inicioCliente',
        component: InicioClienteComponent
      },
      {
        path:'rutinasCliente', component: RutinasClienteComponent
      },
      {
        path:'rutinaPrincipiante',
        component: RutinaPrincipianteComponent
      },
      {
        path:'rutinaAvanzada',
        component: RutinaAvanzadaComponent
      },
      {
        path:'rutinaCasa',
        component: RutinaCasaComponent
      },
      {
        path:'calculadoraCliente',
        component: CalculadoraClienteComponent
      },
      
    ]
  },
 

  {
    path:'', component: NavAdminComponent,
    children: [
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
        path:'monitoresAdmin',
        component: MonitoresAdminComponent
      },
      
    ]
  },

  {
    path:'', component: NavMonitorComponent,
    children: [
      {
        path:'inicioMonitor',
        component: InicioMonitorComponent
      }, 
      {
        path:'actividadesMonitor',
        component: ActividadesMonitorComponent
      },      
    ]
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
    path:'registroError',
    component: RegistroErrorComponent
  },
  
  {
    path:'registroCliente',
    component: RegistroClienteComponent
  },
  
  {
    path:'crearActividad',
    component: RegistroActividadComponent
  },
  {
    path:'crearActividad/:codigo',
    component: RegistroActividadComponent
  },
  {
    path:'**', pathMatch: 'full', redirectTo: '/'
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
    RutinaPrincipianteComponent,
    RutinaAvanzadaComponent,
    RutinaCasaComponent,
    RegistroActividadComponent,
    MonitoresAdminComponent,
    RegistroErrorComponent,
    RegistroClienteComponent,
    FilterPipe,
    InicioMonitorComponent,
    NavMonitorComponent,
    ActividadesMonitorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
