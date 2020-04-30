import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculadora-cliente',
  templateUrl: './calculadora-cliente.component.html',
  styleUrls: ['./calculadora-cliente.component.scss']
})
export class CalculadoraClienteComponent implements OnInit {

  val1:number;
  val2:number;
  resultadoIMC:number;
  resultadoTotal:string;
  signupCalculadora: FormGroup;
  private alturaPattern: any = /^[1-2]{1}.[0-99]{1,2}$/;

  constructor(private _builder: FormBuilder) {

    this.signupCalculadora = this._builder.group({
      valor1: ['', Validators.compose( [Validators.required, Validators.maxLength(5)] )],
      valor2: ['', Validators.compose( [Validators.required, Validators.pattern(this.alturaPattern)] )]
    });

   }

  ngOnInit(): void {
  }

  get valor1() { return this.signupCalculadora.get('valor1'); }
  get valor2() { return this.signupCalculadora.get('valor2'); }

  CalcularIMC(){
    this.resultadoIMC = this.val1/(this.val2*this.val2);

    this.resultadoIMC=Number(this.resultadoIMC.toFixed(2));

    this.resultadoTotal="Tu IMC es ";
    if(this.resultadoIMC<18.5){
      this.resultadoTotal+= this.resultadoIMC + " y tu estado es bajo peso." ;
    }else if(this.resultadoIMC>=18.5 && this.resultadoIMC<= 24.9){
        this.resultadoTotal+= this.resultadoIMC + " y tu estado es peso saludable." ;
      } else if (this.resultadoIMC>=25.0 && this.resultadoIMC<= 29.9){
        this.resultadoTotal+= this.resultadoIMC + " y tu estado es sobrepeso." ;
      }else if(this.resultadoIMC>=30.0){
        this.resultadoTotal+= this.resultadoIMC + " y tu estado es obesidad." ;
      }else{
        this.resultadoTotal+= "Error desconocido. :(" ;
      }

    return this.resultadoTotal;
    
  }

}
