import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './views/listado/listado.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';

const routes: Routes = [
  {path: 'listado', component: ListadoComponent},
  {path: 'nosotros', component: AcercaDeNosotrosComponent},

  {path: '', redirectTo: '/listado', pathMatch: 'full'}, //ruta por defecto para la primera vez que accedemos a la web
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
