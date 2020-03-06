import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: '../views/error.component.html'
})
export class ErrorComponent implements OnInit {

  public titulo:string;

  constructor() {
    this.titulo = "Error!! Pagina no encontrada";
   }

  ngOnInit() {
    console.log("componente error.component.ts cargado");
  }

}
