import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: '../views/inicio.component.html'
})
export class InicioComponent implements OnInit {

  public titulo:string;

  constructor() { 
    this.titulo = 'Webapp de productos con angular 4';
  }

  ngOnInit() {
    console.log("se ha cargado el componente inicio.component.ts");
  }

}
