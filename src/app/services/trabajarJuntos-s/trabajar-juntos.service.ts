import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrabajarJuntos } from '../../entitys/trabajarJuntos';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajarJuntosService {

//URL que obtiene el listado de los empleados desde el backend
private baseUrl ="http://localhost:8080/api/v1/trabajar-juntos";
private baseUrlPro ="https://softax-app.herokuapp.com/api/v1/trabajar-juntos";


  constructor(private httpClient: HttpClient,
    private generalService: GeneralService) {  }

  //Este método registra un trabajo junto
  registrarTrabajoJunto(trabajoJunto:TrabajarJuntos): Observable<Object>{  
    const headers = this.generalService.getHeaders()
    return this.httpClient.post(`${this.baseUrlPro}`,trabajoJunto, {headers});
  }

  }
