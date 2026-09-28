import { Component, inject } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { FormularioFavorito } from '../formulario-favorito/formulario-favorito';

@Component({
  selector: 'app-favoritos',
  imports: [FormularioFavorito],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  private favoritosService = inject(FavoritosService);

  favoritos = this.favoritosService.favoritos;

  salvarObservacao(id: number, observacao: string) {
    this.favoritosService.salvarObservacao(id, observacao);
  }

  removerFavorito(id: number) {
    this.favoritosService.removerFavorito(id);
  }
}