import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  subtitulo:String = "Compañía especializada en el desarrollo de proyectos personales web y móviles. ¡Estamos encantados de tenerte por nuestra web! Échale un vistazo a nuestras tarifas y ofertas."
  titulo: String= "¡Hola, nos encantaría conocerte!"
  constructor() { }

  ngOnInit(): void {
  }

}
