import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PlanesPagoComponent } from './planes-pago/planes-pago.component';
import { ProyectoMedidaComponent } from './proyecto-medida/proyecto-medida.component';
import { TrabajarJuntosComponent } from './trabajar-juntos/trabajar-juntos.component';

const routes: Routes = [
{  path : 'inicio', component: InicioComponent},
{  path : 'contacto', component: ContactoComponent},
{  path : 'planes-pago', component: PlanesPagoComponent},
{  path : 'inicio/planes-pago', component: PlanesPagoComponent},
{  path : 'planes-pago/proyecto-medida', component: ProyectoMedidaComponent},
{  path : 'inicio/proyecto-medida', component: ProyectoMedidaComponent},
{  path : 'planes-pago/trabajar-juntos', component: TrabajarJuntosComponent},
{  path : 'inicio/trabajar-juntos', component: TrabajarJuntosComponent},


// {  path : 'contacto', component: RegistrarEmpleadoComponent},
// {  path : 'actualizar/:id', component: ActualizarEmpleadoComponent},
// {  path : 'detalles/:id', component: EmpleadoDetallesComponent},
{  path : '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
