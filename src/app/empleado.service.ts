import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //URL que obtiene el listado de los empleados desde el backend
  private baseUrl ="http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) {  }

  obtenerListaDeEmpleados(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }

  //Este método registra un empleado
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,empleado);
  }

    //este metodo sirve para obtener o buscar un empleado
    obtenerEmpleadoPorId(id:number):Observable<Empleado>{
      return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`);
    }

    //este metodo sirve para actualizar el empleado
    actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,empleado);
    }

        //este metodo sirve para eliminar el empleado
    eliminarEmpleado(id:number) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}
