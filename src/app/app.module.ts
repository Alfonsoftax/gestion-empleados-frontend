import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
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
import { PlanesPagoComponent } from './planes-pago/planes-pago.component';
import { ProyectoMedidaComponent } from './proyecto-medida/proyecto-medida.component';
import { TrabajarJuntosComponent } from './trabajar-juntos/trabajar-juntos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreMiComponent,
    MisTrabajosComponent,
    ColaboracionesComponent,
    TestimoniosComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    PlanesPagoComponent,
    ProyectoMedidaComponent,
    TrabajarJuntosComponent,
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
