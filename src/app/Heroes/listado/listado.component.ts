import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit {

  constructor() { } // se ejecuta antes de la render del component

  ngOnInit(): void { // se utiliza para inicializar cosas , peticiones , serviios etc
  }

  heroes : string[] = ['spiderman', 'hulk','thor','ironman','superman']
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borando heroe...');
    let heroeBorradoL  = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorradoL;
  }

}
