import { Routes } from '@angular/router';
import { ContactoComponent } from './shared/rutas/contactos/contactos.component';
import { InicioComponent } from './shared/rutas/inicio/inicio.component';
import { NosotrosComponent } from './shared/rutas/nosotros/nosotros.component';
import { ServiciosComponent } from './shared/rutas/servicios/servicios.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contactos', component: ContactoComponent }
];