# Verificador de Números Pares ou Ímpares

Este projeto consiste em uma API que verifica se um número fornecido é **par** ou **ímpar**. A API foi desenvolvida utilizando **Node.js** para o backend, com **Express.js**. O frontend foi desenvolvido com **HTML**, **CSS**, e **JavaScript**.

## Tecnologias Usadas

- **Node.js** (com o framework **Express**) para o backend.
- **HTML** para a estrutura da página web.
- **CSS** para o design da interface.
- **JavaScript** para manipulação do DOM e comunicação com o backend via AJAX.

## Funcionalidade

A aplicação permite ao usuário inserir um número e verificar se ele é par ou ímpar. O número é enviado para a API via requisição POST, que processa o dado e retorna o resultado. O frontend exibe a resposta ao usuário.

## Como Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone https://github.com/IcaroSenaDev/verificador-par-impar.git
cd verificador-par-impar
```

### 2. Instale as Dependências

Antes de rodar o projeto, é necessário instalar as dependências do Node.js. No terminal, execute o seguinte comando:

```bash
npm install
```

### 3. Rodando o servidor

Para iniciar o servidor, execute:

```bash
node server.js
```

### 4. Acessando a Página Web

Abra o navegador e acesse http://localhost:3000. Você verá a interface do verificador de números pares ou ímpares.

### 5. Usando a Aplicação

- **Digite um número no campo de entrada.**
- **Clique no botão "Verificar".**
- **O sistema verificará se o número é par ou ímpar e exibirá o resultado abaixo.**

### 6. Testando via Postman ou outra ferramenta de API
Você pode também testar a API diretamente utilizando o Postman ou qualquer outra ferramenta de requisição HTTP. Para isso, faça o seguinte:

- **Método: POST**
- **URL: http://localhost:3000/verificar**
- **Cabeçalhos: **
    **Content-Type: application/json**
- **Corpo (Body) da requisição:**

```json
{
  "numero": 4
}
```

**A resposta da API será um JSON com o resultado:**

```json
{
  "resultado": "O número é PAR."
}
```
