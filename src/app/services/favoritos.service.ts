import { Injectable, signal } from '@angular/core';
import { Produto } from '../models/produto';

export interface Favorito extends Produto {
  observacao?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  readonly favoritos = signal<Favorito[]>([]);

  adicionarFavorito(produto: Produto) {
    const jaExiste = this.favoritos().some(
      (favorito) => favorito.id === produto.id
    );

    if (!jaExiste) {
      this.favoritos.update((lista) => [...lista, { ...produto }]);
    }
  }

  removerFavorito(id: number) {
    this.favoritos.update((lista) =>
      lista.filter((favorito) => favorito.id !== id)
    );
  }

  salvarObservacao(id: number, observacao: string) {
    this.favoritos.update((lista) =>
      lista.map((favorito) =>
        favorito.id === id ? { ...favorito, observacao } : favorito
      )
    );
  }
}