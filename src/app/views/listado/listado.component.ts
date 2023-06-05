import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  public listadoEntradas: Entrada[];

  constructor(){
    this.listadoEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen: 'En esta lección realizaremos una pequeña introducción al mundo del desarrollo con Angular'
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: 'Breve recorrido por el lenguaje de Typescript como base para desarrollar con Angular'
      },
      {
        titulo: 'Componenentes en Angular',
        resumen: 'Aprenderemos a usar los componentes en Angular y el porqué de su importancia'
      }
    ];
  }

  ngOnInit(): void {

  }

  public mostrarTitulo(titulo: string){
    alert(`Entrada seleccionada: ${ titulo }.`);
  }

}
