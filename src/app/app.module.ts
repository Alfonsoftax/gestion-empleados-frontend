import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { MisTrabajosComponent } from './mis-trabajos/mis-trabajos.component';
import { ColaboracionesComponent } from './colaboraciones/colaboraciones.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    MenuComponent,
    SobreMiComponent,
    MisTrabajosComponent,
    ColaboracionesComponent,
    TestimoniosComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdbCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
