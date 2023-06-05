import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './views/listado/listado.component';

const routes: Routes = [
  {path: 'listado', component: ListadoComponent},

  {path: '', redirectTo: '/listado', pathMatch: 'full'}, //ruta por defecto para la primera vez que accedemos a la web
  //{path: '**', component: PaginaNoEncontradaComponent} //tendriamos que crear dicho componente
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
