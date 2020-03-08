import { GLOBAL } from '../services/global';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';


@Component({
    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.component.html',
    providers:[ProductoService]
  })
  export class ProductoDetailComponent implements OnInit {
  
    public producto:Producto;
  
    constructor(
        private _productoService: ProductoService,
        private _route:ActivatedRoute,
        private _router:Router
    ) { 
     
    }
  
    ngOnInit() {
      console.log("se ha cargado el componente producto-detail.component.ts");

      this.getProducto();
    }

    getProducto(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._productoService.getProducto(id).subscribe(
                response => {
                  
          
                  if((<any>response).code == 200){
                    this.producto = (<any>response).data;
                  }else{
                    this._router.navigate(['/prodcutos']);
                  }
                },
                error => {
                  console.log(<any>error);
                }
              );
        });
        
    }
  
  }
  
