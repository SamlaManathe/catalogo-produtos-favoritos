import { Routes } from '@angular/router';
import { ProdutoLista } from './components/produto-lista/produto-lista';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';

export const routes: Routes = [
    {path: '', component: ListaProdutos},
    {path: 'item/:id', component: ProdutoDetalhe}
];
