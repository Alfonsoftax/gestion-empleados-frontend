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
  private baseUrlPro ="http://softax-app.herokuapp.com/api/v1/contacto";

;
  constructor(private httpClient: HttpClient,
    private generalService: GeneralService) {  }

  //Este método registra un empleado
  registrarContacto(contacto:Contacto): Observable<Object>{
    const headers = this.generalService.getHeaders()
    return this.httpClient.post(`${this.baseUrlPro}`,contacto, {headers});
  }

}
