<div align="center">

# ⭐ Catálogo de Produtos Favoritos

> Aplicação web desenvolvida em **Angular** com consumo da **Fake Store API**, gerenciamento de favoritos e anotações personalizadas.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![FakeStore API](https://img.shields.io/badge/FakeStore_API-0A84FF?style=for-the-badge&logo=fastapi&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=for-the-badge)

</div>

---

## 📌 Sobre o Projeto

O **Catálogo de Produtos Favoritos** é o resultado do **Desafio em Squad** do módulo de Angular da **WoMakersCode**. 

A proposta do projeto foi construir uma aplicação integrada dividida estrategicamente entre cinco pessoas desenvolvedoras, simulando um fluxo real de desenvolvimento colaborativo ágil com branches, code reviews e pull requests no GitHub.

---

## ✨ Funcionalidades Principais

- 🛍️ **Vitrine de Produtos:** Listagem dinâmica dos produtos vindos da Fake Store API com imagem, título e preço.
- 🔍 **Tela de Detalhes:** Navegação dinâmica por ID (`/item/:id`) exibindo a descrição completa, categoria e imagem ampliada do produto.
- ❤️ **Gestão de Favoritos:** Possibilidade de favoritar e desfavoritar produtos, com estado compartilhado via serviços.
- 📝 **Anotações de Motivo:** Formulário com validações para registrar por que determinado item virou favorito.

---

## 👥 Divisão de Tarefas do Squad

O fluxo de desenvolvimento foi dividido em 5 frentes interdependentes:

| Integrante | Papel / Responsabilidade | Tecnologias / Conceitos Praticados |
| :--- | :--- | :--- |
| **Pessoa 1** | **Estrutura Base:** Configuração de rotas, interface/model, `ProdutoService`, `HttpClient` e setup inicial. | `HttpClient`, `provideHttpClient`, `Routes`, Interfaces |
| **Pessoa 2** | **Lista de Produtos:** Componente de vitrine, repetição dos cards e botão de favoritar. | `*ngFor`, Event Binding, Componentes |
| **Pessoa 3** | **Tela de Detalhes:** Rota dinâmica com ID, busca de produto por ID e exibição detalhada com retorno. | `ActivatedRoute`, `RouterLink`, Ciclo de Vida |
| **Pessoa 4** | **Sistema de Favoritos:** Serviço compartilhado de favoritos, inclusão/remoção e status. | Serviços Compartilhados, Lógica de Negócio |
| **Pessoa 5** | **Formulário de Observação:** Formulário com validação para registrar o motivo do favorito. | `ReactiveForms` / `FormsModule`, `Validators` |

---

## 🌐 Integração com a API

A aplicação consome a [Fake Store API](https://fakestoreapi.com/docs) através dos seguintes endpoints:

- `GET /products`: Retorna a lista completa de produtos para a vitrine.
- `GET /products/:id`: Retorna as informações detalhadas de um produto específico.

---

## 🛠️ Tecnologias Utilizadas

- **Angular (Standalone Components):** Arquitetura moderna sem a necessidade de `NgModule`.
- **TypeScript:** Tipagem estática para os contratos de dados dos produtos.
- **HTML5 & CSS3:** Interface responsiva em formato de cards flexíveis.
- **Git & GitHub:** Fluxo colaborativo baseado em branches (`feature/*`), Pull Requests e revisões de código.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+)
- [Angular CLI](https://angular.dev/):
  ```bash
  npm install -g @angular/cli
  ```

  ---

 ## Instalação

1. Clone o repositório da equipe

```
git clone https://github.com/SamlaManathe/catalogo-produtos-favoritos.git

```
2. Entre no diretório do projeto:

```
cd catalogo-produtos-favoritos
```

3. Instale todas as dependências:

```
npm install
```

4. Execute o servidor de desenvolvimento:

```
npm start
```

5. Abra o navegador em: http://localhost:4200

---


## 👩‍💻 Integrantes da Squad


