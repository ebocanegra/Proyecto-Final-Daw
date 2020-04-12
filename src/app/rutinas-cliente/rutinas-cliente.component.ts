import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutinas-cliente',
  templateUrl: './rutinas-cliente.component.html',
  styleUrls: ['./rutinas-cliente.component.scss']
})
export class RutinasClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 /* mostrarPrincipiante(){
    var etiqueta = document.createElement("app-rutina-principiante");
    var cogerDiv = document.getElementById("mRutinas");
    document.body.insertBefore(etiqueta, cogerDiv);
  }*/

}
