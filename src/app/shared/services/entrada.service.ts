import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//con esto vamos a poder utilizarlo en toda la app
@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  //ahora hacemos la peticion, y recuperaremos las entradas que hay en dicha pagina (la cual utilizamos para probar)
  public recuperarEntradas(): Observable<any>{
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
