import { Routes } from '@angular/router';
import { ProdutoLista } from './components/produto-lista/produto-lista';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';

export const routes: Routes = [
    {path: '', component: ProdutoLista},
    {path: 'item/:id', component: ProdutoDetalhe}
];
