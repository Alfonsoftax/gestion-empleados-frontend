import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.volverListaEmpleados();
    }, error =>console.log(error))
  }

  volverListaEmpleados(){
    this.router.navigate(['/inicio']);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
