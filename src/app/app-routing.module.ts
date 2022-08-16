import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { AppComponent } from './app.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PlanesPagoComponent } from './planes-pago/planes-pago.component';

const routes: Routes = [
{  path : 'inicio', component: InicioComponent},
{  path : 'contacto', component: ContactoComponent},
{  path : 'planes-pago', component: PlanesPagoComponent},
{  path : 'inicio/planes-pago', component: PlanesPagoComponent},

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
