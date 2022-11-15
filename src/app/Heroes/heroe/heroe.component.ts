import { Component } from "@angular/core";


@Component ({
    selector: 'app-heroe',
    templateUrl:  'heroe.component.html'
})

export class HeroeComponent {
 nombre: string = 'ironman';
 edad  : number = 30;

 get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
 }
 obtenerNombre():string{
    return `${this.nombre } - ${this.edad}`;
 }
 cambiarNombre (): void{
    this.nombre = 'spiderman'
    console.log("evento")
 }
 cambiarEdad(): void {
    this.edad = 15;
 }
}