import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajarJuntos } from '../entitys/trabajarJuntos';
import { TrabajarJuntosService } from '../services/trabajarJuntos-s/trabajar-juntos.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-trabajar-juntos',
  templateUrl: './trabajar-juntos.component.html',
  styleUrls: ['./trabajar-juntos.component.css']
})
export class TrabajarJuntosComponent implements OnInit {

  trabajoJunto: TrabajarJuntos = new TrabajarJuntos();
  constructor(private trabajoJuntoServicio:TrabajarJuntosService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarTrabajoJunto(){
    console.log(this.trabajoJunto.presupuesto)
    this.trabajoJuntoServicio.registrarTrabajoJunto(this.trabajoJunto).subscribe(dato =>{
      console.log(dato);
      this.mostrarMensajeExito();
    }, error =>console.log(error))
  }

  mostrarMensajeExito(){
    this.router.navigate(['/inicio']);
    swal('Mensaje enviado',`Muchas gracias por su confianza <b>${this.trabajoJunto.nombre}</b> nos pondremos en contacto lo antes posible.`,`success`);
    this.scrollTop();
  }

  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  onSubmit(){
    this.guardarTrabajoJunto();
  }

}
