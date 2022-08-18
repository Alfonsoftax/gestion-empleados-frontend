import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../entitys/contacto';
import { ContactoService } from '../services/contacto-s/contacto.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();
  constructor(private contactoServicio:ContactoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.contactoServicio.registrarContacto(this.contacto).subscribe(dato =>{
      this.mostrarMensajeExito();
    }, error =>console.log(error))
  }

  mostrarMensajeExito(){
    this.router.navigate(['/inicio']);
    swal('Mensaje enviado',`Muchas gracias por su confianza <b>${this.contacto.nombre}</b> nos pondremos en contacto lo antes posible.`,`success`);
    this.scrollTop();
  }

  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
