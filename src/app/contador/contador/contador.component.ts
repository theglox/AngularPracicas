import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
     <h1> {{ titulo }}</h1> <!--el {{}} nos muestra la propiedad que queremos mostrar en html por ejemplo 1+1 o cualquier propedad de  js
--> 
     <span > {{numero}} </span>
     <h3> La Base es: <strong>{{base}}</strong></h3>
     <button (click)="acomular(+base)">+{{base}} </button>
     <button (click)="acomular(-base)"> -{{base}} </button> 

    `
})

export class ContadorComponent{
    titulo = 'contador';
    numero : number   = 10
    base : number =5
  
  acomular ( valor : number ){
    this.numero +=valor
  
  }
  
}