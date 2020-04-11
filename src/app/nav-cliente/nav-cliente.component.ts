import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-cliente',
  templateUrl: './nav-cliente.component.html',
  styleUrls: ['./nav-cliente.component.scss']
})
export class NavClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){

      //menú vertical
      $(".navbar-toggler").click(function(e) {
          e.preventDefault();
          $("#navbarNav").toggleClass("active");
      });
    
    });
  }

}
