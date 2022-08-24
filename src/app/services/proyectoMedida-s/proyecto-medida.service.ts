import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoMedida } from '../../entitys/proyectoMedida';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoMedidaService {

//URL que obtiene el listado de los empleados desde el backend
private baseUrl ="http://localhost:8080/api/v1/proyecto-medida";
private baseUrlPro ="http://softax-app.herokuapp.com/api/v1/proyecto-medida";


  constructor(private httpClient: HttpClient,
    private generalService: GeneralService) {  }

  //Este método registra un proyecto medida
  registrarProyectoMedida(proyectoMedida:ProyectoMedida): Observable<Object>{
    const headers = this.generalService.getHeaders()
    return this.httpClient.post(`${this.baseUrlPro}`,proyectoMedida, {headers});
  }
}
