import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../../entitys/contacto';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  //URL que obtiene el listado de los empleados desde el backend
  private baseUrl ="http://localhost:8080/api/v1/contacto";
  private baseUrlPro ="https://softax-app.herokuapp.com/api/v1/contacto";

;
  constructor(private httpClient: HttpClient,
    private generalService: GeneralService) {  }

  obtenerListaDeContactos(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.baseUrl}`);
  }

  //Este método registra un empleado
  registrarContacto(contacto:Contacto): Observable<Object>{
    const headers = this.generalService.getHeaders()
    return this.httpClient.post(`${this.baseUrl}`,contacto, {headers});
  }

    //este metodo sirve para obtener o buscar un empleado
    obtenerContactoPorId(id:number):Observable<Contacto>{
      return this.httpClient.get<Contacto>(`${this.baseUrl}/${id}`);
    }

    //este metodo sirve para actualizar el empleado
    actualizarContacto(id:number,contacto:Contacto) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,contacto);
    }

        //este metodo sirve para eliminar el empleado
    eliminarContacto(id:number) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

}
