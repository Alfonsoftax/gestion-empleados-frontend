import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboraciones',
  templateUrl: './colaboraciones.component.html',
  styleUrls: ['./colaboraciones.component.css']
})
export class ColaboracionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

}
