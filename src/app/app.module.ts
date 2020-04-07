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
