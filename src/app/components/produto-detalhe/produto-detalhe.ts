import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule, RouterLink],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe implements OnInit {
  produto: any = null;
  carregando: boolean = true;
  erro: string = '';

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // 1. Obtém o parâmetro 'id' da rota (ex: /item/1)
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // 2. Busca os dados do produto na API pelo ID
      this.produtoService.buscarProdutoPorId(Number(id)).subscribe({
        next: (dados) => {
          this.produto = dados;
          this.carregando = false;
          this.cdr.detectChanges(); // Garante atualização imediata na tela
        },
        error: (err) => {
          console.error('Erro ao buscar detalhes do produto:', err);
          this.erro = 'Não foi possível carregar os detalhes do produto.';
          this.carregando = false;
          this.cdr.detectChanges();
        },
      });
    }
  }
}