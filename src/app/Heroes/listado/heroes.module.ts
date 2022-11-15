import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';
import { ListadoComponent } from './listado.component';

@NgModule({ //decorador necesario

    declarations:[ //Que componentes contiene este modulo 
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // que cosas van a ser visibles fuera de este modulo 
        ListadoComponent
    ],
    imports: [ // aqui van modulos 
        CommonModule // esto incluye las directivas de ng gnffo ngif etc
    ]
})
export class HeroesModule{

}