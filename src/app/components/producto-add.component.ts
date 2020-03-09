import { GLOBAL } from '../services/global';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from './../models/producto';


@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.component.html',
  providers:[ProductoService]
})

export class ProductoAddComponent implements OnInit {

  public titulo:string;
  public producto:Producto;
  
  public filesToUpload;
  public resultUpload;

  public is_edit=false;


  constructor(
      private _productoService:ProductoService,
      private _route:ActivatedRoute,
      private _router:Router
  ) { 
    this.titulo = 'Crear Nuevo Producto';
    this.producto = new Producto(0,'','',0,'');
  }

  ngOnInit() {
    console.log("se ha cargado el componente producto-add.component.ts");
  }

  onSubmit(){
    console.log(this.producto);

    if(this.filesToUpload && this.filesToUpload.length >= 1){
        this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) => {
            console.log(result);
            this.resultUpload = result;
            this.producto.imagen = this.resultUpload.filename;
            this.saveProducto();
        }, (error) =>{
            console.log(error);
        });
    }else{
        this.saveProducto();
    }

    
  }

  saveProducto(){
    this._productoService.addProducto(this.producto).subscribe(
        response=>{
            if(response.code == 200){
                this._router.navigate(["/productos"]);
            }else{
                console.log(response);
            }
        },
        error => {
            console.log(<any>error);
        }
    );
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array <File>> fileInput.target.files;
    console.log(this.filesToUpload);
  }
}
