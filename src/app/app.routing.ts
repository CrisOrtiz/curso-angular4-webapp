import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './components/inicio.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';

const appRoutes: Routes = [
    {path:'',component: InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'productos',component:ProductosListComponent},
    {path:'crear-producto',component:ProductoAddComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

