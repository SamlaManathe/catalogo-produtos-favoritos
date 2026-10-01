import { Routes } from '@angular/router';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
import { FormularioFavorito } from './components/formulario-favorito/formulario-favorito';
import { Favoritos } from './components/favoritos/favoritos';

export const routes: Routes = [
  { path: 'produtos', component: ListaProdutos },
  { path: 'item/:id', component: ProdutoDetalhe },
  { path: 'favoritos', component: Favoritos },
];

