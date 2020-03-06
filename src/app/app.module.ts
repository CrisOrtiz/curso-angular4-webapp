import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';


//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio.component';
import { ErrorComponent } from './components/error.component';
import {ProductosListComponent} from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';

//rutas
import { routing,appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
