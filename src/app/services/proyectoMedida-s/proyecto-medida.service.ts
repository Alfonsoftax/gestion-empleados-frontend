import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoMedida } from '../../entitys/proyectoMedida';

@Injectable({
  providedIn: 'root'
})
export class ProyectoMedidaService {

//URL que obtiene el listado de los empleados desde el backend
private baseUrl ="http://localhost:8080/api/v1/proyecto-medida";


  constructor(private httpClient: HttpClient) {  }

  obtenerListaDeContactos(): Observable<ProyectoMedida[]>{
    return this.httpClient.get<ProyectoMedida[]>(`${this.baseUrl}`);
  }

  //Este método registra un proyecto medida
  registrarProyectoMedida(proyectoMedida:ProyectoMedida): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,proyectoMedida);
  }

    //este metodo sirve para obtener o buscar un proyecto medida
    obtenerContactoPorId(id:number):Observable<ProyectoMedida>{
      return this.httpClient.get<ProyectoMedida>(`${this.baseUrl}/${id}`);
    }

    //este metodo sirve para actualizar el proyecto medida
    actualizarContacto(id:number,proyectoMedida:ProyectoMedida) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,proyectoMedida);
    }

        //este metodo sirve para eliminar el proyecto medida
    eliminarContacto(id:number) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
}
