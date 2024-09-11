# Aplicação de Agenda

Esta é uma aplicação simples de agenda onde é possível cadastrar pessoas e cada pessoa pode ter nenhum ou vários contatos. A aplicação foi desenvolvida utilizando TypeScript, React, Node.js e Sequelize, com o banco de dados MySQL.

## Tecnologias Utilizadas

- **Frontend**: React, TypeScript
- **Backend**: Node.js, TypeScript, Sequelize
- **Banco de Dados**: MySQL
- **Containerização**: Docker, Docker Compose

## Pré-requisitos

- Docker instalado na máquina

## Como Rodar a Aplicação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/sua-aplicacao.git
    cd sua-aplicacao
    ```

2. **Entre na pasta `app`**:
    ```bash
    cd app
    ```

3. **Suba os containers com Docker Compose**:
    ```bash
    docker-compose up -d --build
    ```

4. **Aguarde todos os containers subirem**.

## Acesso à Aplicação

- **Backend**: Disponível na porta `3001`
- **Frontend**: Disponível na porta `3000`

## Para rodar a funcao auxiliar de colchetes

## Pré-requisitos

- Node instalado na máquina

1. **Entrar na pasta `funcColchetes`**:
    ```bash
    cd funcColchetes
    ```

2. **Rodar a aplicacao ou os testes**:
    ```bash
    npm run check-colchetes "string_que_deseja_testar"
    ```
    ```bash
    npm test
    ```
