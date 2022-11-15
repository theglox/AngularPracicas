import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
 //no me funciona el git
    declarations: [
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],

})

export class ContadorModule{

}