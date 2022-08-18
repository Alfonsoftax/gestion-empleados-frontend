import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoMedida } from '../entitys/proyectoMedida';
import { ProyectoMedidaService } from '../services/proyectoMedida-s/proyecto-medida.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-proyecto-medida',
  templateUrl: './proyecto-medida.component.html',
  styleUrls: ['./proyecto-medida.component.css']
})
export class ProyectoMedidaComponent implements OnInit {

  proyectoMedida: ProyectoMedida = new ProyectoMedida();
  constructor(private proyectoMedidaServicio:ProyectoMedidaService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarProyectoMedida(){
    this.proyectoMedidaServicio.registrarProyectoMedida(this.proyectoMedida).subscribe(dato =>{
      console.log(dato);
      this.mostrarMensajeExito();
    }, error =>console.log(error))
  }

  mostrarMensajeExito(){
    this.router.navigate(['/inicio']);
    swal('Mensaje enviado',`Muchas gracias por su confianza <b>${this.proyectoMedida.nombre}</b> nos pondremos en contacto lo antes posible.`,`success`);
    this.scrollTop();
  }

  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  onSubmit(){
    this.guardarProyectoMedida();
  }

}
