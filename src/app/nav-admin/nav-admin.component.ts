import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

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
