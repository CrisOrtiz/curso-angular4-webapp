import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from './../models/producto';

@Component({
  selector: 'productos_list',
  templateUrl: '../views/productos-list.component.html',
  providers: [ProductoService]
})
export class ProductosListComponent implements OnInit {

  public titulo: string;
  public productos: Producto[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = 'Listado de Productos';
  }

  ngOnInit() {
    console.log("se ha cargado el componente productos-list.component.ts");

    this._productoService.getProductos().subscribe(
      result => {
        this.productos = result.data;

        if(result.code !=200){
          console.log(result);
        }else{
          this.productos = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
