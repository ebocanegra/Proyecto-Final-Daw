import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NovedadesService } from '../services/novedades.service';
import { Novedad } from '../interfaces/novedades';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novedades-monitor',
  templateUrl: './novedades-monitor.component.html',
  styleUrls: ['./novedades-monitor.component.scss']
})
export class NovedadesMonitorComponent implements OnInit {

  signupNovedades: FormGroup;
  API_ENDPOINT = 'http://pi.diiesmurgi.org/~eduardo/public/api/';

  novedad: Novedad = {
    titulo: null,
    contenido: null,
    fecha: null,
    codigo_monitor: null
  };


  novedades: Novedad[];

  novedadesTotales: Novedad[];
  filterNovedad = '';
  pageActual: number = 1;
  tinyMceInit: any;
  recibido: any;
  filasTotalesNovedades: any;

  private fechaPattern: any = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;

  constructor( private _builder: FormBuilder, private novedadesServices: NovedadesService, private httpClient: HttpClient ) {

    this.getNovedades();

    this.signupNovedades = this._builder.group({
      titulo: ['', Validators.compose( [Validators.required] ) ],
      contenido: ['', Validators.compose( [Validators.required] )],
      fecha: ['', Validators.compose( [Validators.required, Validators.pattern(this.fechaPattern)] )],
      codigo_monitor: ['', Validators.compose( [Validators.required] )]
    });

   }

   get f() { return this.signupNovedades.controls; }
   get titulo() { return this.signupNovedades.get('titulo'); }
   get contenido() { return this.signupNovedades.get('contenido'); }
   get fecha() { return this.signupNovedades.get('fecha'); }
   get codigo_monitor() { return this.signupNovedades.get('codigo_monitor'); }

  getNovedades(){
    this.httpClient.get(this.API_ENDPOINT + 'novedades').subscribe((data: Novedad[]) => {
      this.recibido = data;
      this.novedades=this.recibido.data;
    });

    this.httpClient.get(this.API_ENDPOINT + 'novedades').subscribe((filasTotales: Novedad[]) => {
      this.filasTotalesNovedades = filasTotales;
      this.novedadesTotales=this.filasTotalesNovedades.filasTotales;
    });
  }
 

  ngOnInit(): void {
    
    this.tinyMceInit = {
      toolbar: 'undo redo | link image | code',
      // enable title field in the Image dialog
      image_title: true,
      // enable automatic uploads of images represented by blob or data URIs
      automatic_uploads: true,
      selector: "#contenido",
      paste_data_images: true,

      plugins: [
      "advlist autolink lists link image code charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
      ],

      toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
      toolbar2: "print preview media | forecolor backcolor emoticons",
      images_upload_url: 'http://pi.diiesmurgi.org/~eduardo/images/postAcceptor.php',
      images_upload_base_path: '/~eduardo/images',
      images_upload_credentials: false,
      file_picker_types: 'image',
      file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input') as HTMLInputElement;
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = function () {
          var res = <HTMLInputElement>this;
          var file: File = res.files[0];
          var reader = new FileReader();

          reader.onload = function () {
            var base64 = (reader.result as string).split(',')[1];
            // call the callback and populate the Title field with the file name
            cb('data:image/png;base64,' + base64, { title: file.name });
          };
          
          reader.readAsDataURL(file);
        };

        input.click();

      }
    }
  }

      onSubmit(){
       
         this.novedadesServices.save(this.novedad).subscribe((data)=>{
            alert('Novedad publicada con exito');
            location.reload(true);
            console.log(this.novedad);
          }, (error)=>{
            console.log(error);
            alert('Ocurrio un error al publicar la novedad. Ten en cuenta que tu codigo de monitor esta bien.')
         });
         //console.log(this.novedad);
      }
    
      

}//fin del final
