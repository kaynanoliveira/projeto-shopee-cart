# 🛒 Carrinho de Compras - Node.js

Este projeto implementa um carrinho de compras inspirado na Shopee, desenvolvido em Node.js. O carrinho é capaz de armazenar itens e calcular automaticamente o subtotal dos produtos.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript (ES6+)
- JSON para armazenamento temporário

## 📌 Funcionalidades

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Atualizar a quantidade de um item
- Cálculo automático do subtotal
- Listagem dos itens no carrinho

## 📦 Instalação e Execução

1. Clone este repositório:
   ```sh
   git clone https://github.com/kaynanoliveira/projeto-shopee-cart.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd projeto-shopee-cart
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

## 🔗 Rotas da API

- **GET /cart** → Lista todos os itens no carrinho
- **POST /cart** → Adiciona um item ao carrinho
- **PUT /cart/:id** → Atualiza a quantidade de um item no carrinho
- **DELETE /cart/:id** → Remove um item do carrinho

