import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      //menú vertical
      $(".navbar-toggler").click(function(e) {
          e.preventDefault();
          $("#navbarNav").toggleClass("active");
      });
    
    });

    $(document).ready(function(){ //Hacia arriba
      irArriba();
    });
    
    function irArriba(){
      $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
      $(window).scroll(function(){
        if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
      });
      $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
    }

  }

  

}
