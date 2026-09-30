import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produto } from '../../models/produto';
import { FavoritosService } from '../../services/favoritos.service';
import { ProdutoService } from '../../services/produto';


@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos implements OnInit {
  produtos: Produto[] = [];
  categorias: { nome: string; produtos: Produto[] }[] = [];
  carregando = true;
  erro = false;

  constructor(private produtoService: ProdutoService) {}
  private favoritosService = inject(FavoritosService);

  ngOnInit(): void {
    this.produtoService.buscarProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.categorias = this.agruparPorCategoria(dados);
        this.carregando = false;
      },
      error: () => {
        this.erro = true;
        this.carregando = false;
      }
    });
  }
//Aqui eu Decidi Separar por categoria apenas pra fica mais bonito
  private agruparPorCategoria(produtos: Produto[]): { nome: string; produtos: Produto[] }[] {
    const mapa = new Map<string, Produto[]>();

    for (const produto of produtos) {
      const categoria = (produto as any).category ?? 'Outros';
      if (!mapa.has(categoria)) {
        mapa.set(categoria, []);
      }
      mapa.get(categoria)!.push(produto);
    }

    return Array.from(mapa.entries())
      .map(([nome, produtos]) => ({ nome, produtos }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

  toggleFavorito(produto: Produto): void {
    if (this.isFavorito(produto)) {
      this.favoritosService.removerFavorito(produto.id);
    } else {
      this.favoritosService.adicionarFavorito(produto);
    }
  }

  isFavorito(produto: Produto): boolean {
    return this.favoritosService
      .favoritos()
      .some((favorito) => favorito.id === produto.id);
  }
}