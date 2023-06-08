import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  public listadoEntradas: any;

  constructor(private entradaService: EntradaService){

  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void{
    this.entradaService.recuperarEntradas().subscribe(
      //cuando la respuesta es correcta
      (data) => {
        this.listadoEntradas = data;
      },
      //cuando hay un error en el servidor
      (error) => {

      },
      //cuando la petición ha finalizado
      () =>{

      }
    )
  }

  public mostrarTitulo(title: string){
    alert(`Entrada seleccionada: ${ title }.`);
  }

}
