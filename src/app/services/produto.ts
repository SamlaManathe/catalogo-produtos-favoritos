import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  constructor(private http: HttpClient){}

  buscarProdutos() {
    return this.http.get<any>((`https://fakestoreapi.com/products`));
  }

  buscarProdutoPorId(id: number) {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
}
