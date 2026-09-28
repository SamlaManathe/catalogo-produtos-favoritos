import { Routes } from '@angular/router';
import { ProdutoLista } from './components/produto-lista/produto-lista';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';
import { FormularioFavorito } from './components/formulario-favorito/formulario-favorito';
import { Favoritos } from './components/favoritos/favoritos';

export const routes: Routes = [
  { path: '', component: ProdutoLista },
  { path: 'item/:id', component: ProdutoDetalhe },
  { path: 'favoritos', component: Favoritos },
];