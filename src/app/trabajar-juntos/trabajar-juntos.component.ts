import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../entitys/empleado';
import { EmpleadoService } from '../services/empleados-s/empleado.service';
@Component({
  selector: 'app-trabajar-juntos',
  templateUrl: './trabajar-juntos.component.html',
  styleUrls: ['./trabajar-juntos.component.css']
})
export class TrabajarJuntosComponent implements OnInit {

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
