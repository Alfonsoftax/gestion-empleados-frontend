import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrabajarJuntos } from '../../entitys/trabajarJuntos';

@Injectable({
  providedIn: 'root'
})
export class TrabajarJuntosService {

//URL que obtiene el listado de los empleados desde el backend
private baseUrl ="http://localhost:8080/api/v1/trabajar-juntos";


  constructor(private httpClient: HttpClient) {  }

  obtenerListaDeTrabajoJunto(): Observable<TrabajarJuntos[]>{
    return this.httpClient.get<TrabajarJuntos[]>(`${this.baseUrl}`);
  }

  //Este método registra un trabajo junto
  registrarTrabajoJunto(trabajoJunto:TrabajarJuntos): Observable<Object>{  
      
    return this.httpClient.post(`${this.baseUrl}`,trabajoJunto);
  }

    //este metodo sirve para obtener o buscar un trabajo junto
    obtenerTrabajoJuntoPorId(id:number):Observable<TrabajarJuntos>{
      return this.httpClient.get<TrabajarJuntos>(`${this.baseUrl}/${id}`);
    }

    //este metodo sirve para actualizar el trabajo junto
    actualizarTrabajoJunto(id:number, proyectoMedida:TrabajarJuntos) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,proyectoMedida);
    }

        //este metodo sirve para eliminar el trabajo junto
    eliminarTrabajoJuntos(id:number) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }}
