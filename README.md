# Desafio Abmex backend

<div align="center"></br>
  <img alt="Typescript badge" src="https://img.shields.io/badge/Typescript-00B1EA?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="ExpressJS badge" src="https://img.shields.io/badge/Express.js-333331?style=for-the-badge" />
  <img alt="Sequelize badge" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
  <img alt="Postgres badge" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
</div></br>

# Iniciando
### Váriaveis de ambiente
Primeiro crie um arquivo **`.env`** na pasta raiz do projeto, e preencha todos os dados de acordo com o arquivo **`.example.env`**, para criar as váriaveis de ambiente.

### Rodando as migrations
Para criar as tabelas necessárias para a aplicação funcionar execute o comando abaixo:

    npx sequelize-cli db:migrate

Desfazer a migration:

    npx sequelize-cli db:migrate:undo:all

### Iniciando a aplicação 
O comando abaixo irá rodar a aplicação, em modo desenvolvedor.

    npm start
---
# Rotas
[Arquivos de rotas (Insomnia)](./abmex-desafio-routes-file-insominia.json)
### Criar campeonato

| Rota                | Método     |
|---------------------|------------|
| **`/championship`** | **`POST`** |


**Parâmetros obrigatórios**

| Campo             | Tipo          | Local | Descrição                                              |
|-------------------|---------------|-------|--------------------------------------------------------|
| **`name`**        | **`string`**  | body  | Nome do campeonato                                     |
| **`description`** | **`string`**  | body  | Descrição do campeonato                                |
| **`levels`**      | **`integer`** | body  | Quantidade de níveis que o campeonato irá ter (Chaves) |
| **`award`**       | **`double`**   | body  | Prêmio                                                 |

**Exemplo de requisição**

**`POST`** **`/signup`**

```json
{
    "name": "Olimpíada Brasileira de Informática",
    "description": "As provas são feitas no computador, com tarefas de programação que podem ser resolvidas com uma linguagem de programação entre Python, C, C++, Java, Javascript e Pascal. ",
    "levels": 3,
    "award": 2504.43,
}
```

**Resposta de sucesso**

**Código**: **`201 CREATED`**

```json
{
    "id": "bf43d8a7-3f78-4bb9-b233-534333d68647",
    "name": "Olimpíada Brasileira de Informática",
    "description": "As provas são feitas no computador, com tarefas de programação que podem ser resolvidas com uma linguagem de programação entre Python, C, C++, Java, Javascript e Pascal. ",
    "levels": 3,
    "award": 2504.43,
    "closed": false,
    "createdAt": "2022-06-26T18:59:57.674Z",
    "teamWinnerId": null
}
```
---

### Atualizar campeonato

| Rota                | Método     |
|---------------------|------------|
| **`/championship`** | **`POST`** |


**Parâmetros opcionais**

| Campo             | Tipo         | Local | Descrição               |
|-------------------|--------------|-------|-------------------------|
| **`name`**        | **`string`** | body  | Nome do campeonato      |
| **`description`** | **`string`** | body  | Descrição do campeonato |
| **`award`**       | **`double`**  | body  | Prêmio                  |

Os 3 campos do campeonato são opcionais na requisição, porem é necessário que seja enviado pelo menos um parâmetro.

**Exemplo de requisição**

**`PATCH`** **`/team/303d9b84-82be-4d7a-9284-7a4a9134a35f`**

```json
{
    "name": "Nome comp atualizado",
    "award": 10000
}
```

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "message": "Championship successfully updated"
}
```

---
### Criar time

| Rota        | Método     |
|-------------|------------|
| **`/team`** | **`POST`** |


**Parâmetros obrigatórios**

| Campo                 | Tipo         | Local | Descrição                          |
|-----------------------|--------------|-------|------------------------------------|
| **`name`**            | **`string`** | body  | Nome do time                       |
| **`playersInitials`** | **`string`** | body  | Iniciais dos 3 jogadores da equipe |

**Exemplo de requisição**

**`POST`** **`/signup`**

```json
{
    "name": "Team 1",
    "playersInitials": "abc"
}
```

**Resposta de sucesso**

**Código**: **`201 CREATED`**

```json
{
    "id": "d78f3b3c-dff7-478e-87b7-9f8149849c0e",
    "name": "Team 1",
    "playersInitials": "ABC",
    "createdAt": "2022-06-26T19:00:29.752Z",
    "deletedAt": null
}
```
---

### Cadastrar um time em um campeonato

| Rota                          | Método     |
|-------------------------------|------------|
| **`/championship/subscribe`** | **`POST`** |


**Parâmetros obrigatórios**

| Campo                | Tipo       | Local | Descrição        |
|----------------------|------------|-------|------------------|
| **`championshipId`** | **`uuid`** | body  | Id do campeonato |
| **`teamId`**         | **`uuid`** | body  | Id do time       |

**Exemplo de requisição**

**`POST`** **`/signup`**

Body:
```json
{
    "championshipId": "046f5432-5a31-4e54-8c6f-762b1e80055a",
    "teamId": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6"
}
```

**Resposta de sucesso**

**Código**: **`201 CREATED`**

```json
{ 
    "message": "Team registered successfully" 
}
```

---

### Atualizar time

| Rota            | Método      |
|-----------------|-------------|
| **`/team/:id`** | **`PATCH`** |


**Parâmetros opcionais**

| Campo                 | Tipo         | Local | Descrição                          |
|-----------------------|--------------|-------|------------------------------------|
| **`name`**            | **`string`** | body  | Nome do time                       |
| **`playersInitials`** | **`string`** | body  | Iniciais dos 3 jogadores da equipe |

Os 2 campos do time são opcionais na requisição, porem é necessário que seja enviado pelo menos um parâmetro.

**Exemplo de requisição**

**`PATCH`** **`/team/303d9b84-82be-4d7a-9284-7a4a9134a35f`**

```json
{
    "playersInitials": "FEL"
}
```

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "message": "Team successfully updated"
}
```

---

### Deletar time

| Rota            | Método       |
|-----------------|--------------|
| **`/team/:id`** | **`DELETE`** |

**Exemplo de requisição**

**`DELETE`** **`/team/3630ffd0-ef95-47b9-880d-3b11e185f911`**

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "message": "Team successfully deleted"
}
```

---

### Pegar um time específico

| Rota            | Método    |
|-----------------|-----------|
| **`/team/:id`** | **`GET`** |


**Parâmetros obrigatórios**

| Campo     | Tipo       | Local  | Descrição  |
|-----------|------------|--------|------------|
| **`:id`** | **`uuid`** | params | Id do time |

**Exemplo de requisição**

**`GET`** **`/team/d78f3b3c-dff7-478e-87b7-9f8149849c0e`**

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "id": "d78f3b3c-dff7-478e-87b7-9f8149849c0e",
    "name": "Team 1",
    "playersInitials": "ABC",
    "createdAt": "2022-06-26T19:00:29.752Z",
    "deletedAt": null
}
```
---

### Pegar todos os times cadastados

| Rota         | Método    |
|--------------|-----------|
| **`/teams`** | **`GET`** |

**Parâmetros opcionais**

| Campo       | Tipo          | Local | Requirido | Default | Descrição                    |
|-------------|---------------|-------|-----------|---------|------------------------------|
| **`page`**  | **`integer`** | query | **`NÃO`** | 0       | Pagina dos dados             |
| **`limit`** | **`integer`** | query | **`NÃO`** | 50      | Quantidade limite por página |
| **`name`**  | **`string`**  | query | **`NÃO`** |         | Busca pelo nome do time      |

**Exemplo de requisição**

**`GET`** **`/teams?page=0&limit=50`**

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "count": 8,
    "teams": [
        {
            "id": "ace647d8-fee1-45f0-b862-e81179f64244",
            "name": "Team 11",
            "playersInitials": "ABC",
            "createdAt": "2022-06-27T02:59:19.777Z",
            "deletedAt": null
        },
        {
            "id": "303d9b84-82be-4d7a-9284-7a4a9134a35f",
            "name": "Team 10",
            "playersInitials": "FEL",
            "createdAt": "2022-06-27T02:31:14.190Z",
            "deletedAt": null
        },
        {
            "id": "f0ab075f-a2ff-4d50-aedf-f1cd2bd6e443",
            "name": "Team 7",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:43.123Z",
            "deletedAt": null
        },
        {
            "id": "ff6d1692-b340-43f7-a856-f7099cd29d28",
            "name": "Team 6",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:41.843Z",
            "deletedAt": null
        },
        {
            "id": "6b05286d-292c-47b5-82f8-928c38755477",
            "name": "Team 5",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:40.274Z",
            "deletedAt": null
        },
        {
            "id": "bb40c8ca-8240-4bac-9824-a314d14b4101",
            "name": "Team 4",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:38.695Z",
            "deletedAt": null
        },
        {
            "id": "51a80bab-ee12-48e0-9e39-7079a7c8308a",
            "name": "Team 3",
            "playersInitials": "ABC","createdAt": "2022-06-26T19:00:37.036Z",
            "deletedAt": null
        },
        {
            "id": "d78f3b3c-dff7-478e-87b7-9f8149849c0e",
            "name": "Team 1",
            "playersInitials": "ABC","createdAt": "2022-06-26T19:00:29.752Z",
            "deletedAt": null
        }
    ]
}
```
---
### Pegar times de um campeonato

| Rota                          | Método    |
|-------------------------------|-----------|
| **`/teams/championship/:id`** | **`GET`** |


**Parâmetros obrigatórios**

| Campo     | Tipo       | Local  | Descrição        |
|-----------|------------|--------|------------------|
| **`:id`** | **`uuid`** | params | Id do campeonato |

**Exemplo de requisição**

**`GET`** **`/teams/championship/1d8c5f9e-4be5-4d45-bab7-c38b98050cb9`**

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "count": 2,
    "teams": [
        {
            "id": "d78f3b3c-dff7-478e-87b7-9f8149849c0e",
            "name": "Team 1",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:29.752Z",
            "deletedAt": null
        },
        {
            "id": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6",
            "name": "Team 2",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:34.797Z",
            "deletedAt": "2022-06-27T01:21:41.528Z"
        }
    ]
}
```

---

### Pegar um campeonato específico

| Rota                 | Método    |
|----------------------|-----------|
| **`/championships`** | **`GET`** |

**Parâmetros obrigatórios**

| Campo     | Tipo       | Local  | Descrição  |
|-----------|------------|--------|------------|
| **`:id`** | **`uuid`** | params | Id do campeonato |

**Exemplo de requisição**

**`GET`** **`/championship/bf43d8a7-3f78-4bb9-b233-534333d68647`**

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "id": "bf43d8a7-3f78-4bb9-b233-534333d68647",
    "name": "Olimpíada Brasileira de Informática",
    "description": "As provas são feitas no computador, com tarefas de programação que podem ser resolvidas com uma linguagem de programação entre Python, C, C++, Java, Javascript e Pascal. ",
    "levels": 3,
    "award": 2504.43,
    "closed": true,
    "createdAt": "2022-06-26T18:59:57.674Z",
    "teamWinnerId": "3630ffd0-ef95-47b9-880d-3b11e185f911"
}
```

---

### Pegar todos os campeonatos cadastrados

| Rota                 | Método    |
|----------------------|-----------|
| **`/championships`** | **`GET`** |

**Parâmetros opcionais**

| Campo       | Tipo          | Local | Requirido | Default | Descrição                     |
|-------------|---------------|-------|-----------|---------|-------------------------------|
| **`page`**  | **`integer`** | query | **`NÃO`** | 0       | Pagina dos dados              |
| **`limit`** | **`integer`** | query | **`NÃO`** | 50      | Quantidade limite por página  |
| **`name`**  | **`string`**  | query | **`NÃO`** |         | Busca pelo nome do campeonato |

**Exemplo de requisição**

**`GET`** **`/championships?limit=50&page=0`**

**Resposta de sucesso**

**Código**: **`200 OK`**

```json
{
    "count": 4,
    "championships": [
        {
            "id": "046f5432-5a31-4e54-8c6f-762b1e80055a",
            "name": "Nome comp atualizado",
            "description": "Descrição do campeonato 2",
            "levels": 1,
            "award": 2504.43,
            "closed": false,
            "createdAt": "2022-06-27T01:04:03.147Z",
            "teamWinnerId": null
        },
        {
	    "id": "4a2fa4f5-e929-4908-8ad9-a90228bffbeb",
	    "name": "Campeonato 2",
	    "description": "Descrição do campeonato 2",
	    "levels": 1,
	    "award": 2504.43,
	    "closed": false,
	    "createdAt": "2022-06-27T00:41:53.583Z",
	    "teamWinnerId": null
        },
        {
	    "id": "1d8c5f9e-4be5-4d45-bab7-c38b98050cb9",
	    "name": "Campeonato 1",
	    "description": "Descrição do campeonato 1",
	    "levels": 1,
	    "award": 2504.43,
	    "closed": true,
	    "createdAt": "2022-06-26T22:44:37.596Z",
	    "teamWinnerId": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6"
        },
        {
            "id": "bf43d8a7-3f78-4bb9-b233-534333d68647",
            "name": "Olimpíada Brasileira de Informática",
            "description": "As provas são feitas no computador, com tarefas de programação que podem ser resolvidas com uma linguagem de programação entre Python, C, C++, Java, Javascript e Pascal. ",
            "levels": 3,
            "award": 2504.43,
            "closed": true,
            "createdAt": "2022-06-26T18:59:57.674Z",
            "teamWinnerId": "3630ffd0-ef95-47b9-880d-3b11e185f911"
        }      
    ]
}
```
---

### Pegar histórico de um campeonato

| Rota                            | Método    |
|---------------------------------|-----------|
| **`/championship/history/:id`** | **`GET`** |

**Exemplo de requisição**

**`GET`** **`/championship/history/bf43d8a7-3f78-4bb9-b233-534333d68647`**

**Exemplo de resposta**

**Código**: **`200 OK`**

```json
{
    "id": "bf43d8a7-3f78-4bb9-b233-534333d68647",
    "name": "Olimpíada Brasileira de Informática",
    "description": "As provas são feitas no computador, com tarefas de programação que podem ser resolvidas com uma linguagem de programação entre Python, C, C++, Java, Javascript e Pascal. ",
    "levels": 3,
    "award": 2504.43,
    "teamWinnerId": "3630ffd0-ef95-47b9-880d-3b11e185f911",
    "closed": true,
    "createdAt": "2022-06-26T18:59:57.674Z",
    "matches": {
        "phase-1": [
            {
                "level": 1,
                "team1Id": "bb40c8ca-8240-4bac-9824-a314d14b4101",
                "team1Score": 677,
                "team2Id": "ff6d1692-b340-43f7-a856-f7099cd29d28",
                "team2Score": 636,
                "teamWinnerId": "bb40c8ca-8240-4bac-9824-a314d14b4101"
            },
            {
                "level": 1,
                "team1Id": "d78f3b3c-dff7-478e-87b7-9f8149849c0e",
                "team1Score": 86,
                "team2Id": "3630ffd0-ef95-47b9-880d-3b11e185f911",
                "team2Score": 910,
                "teamWinnerId": "3630ffd0-ef95-47b9-880d-3b11e185f911"
            },
            {
                "level": 1,
                "team1Id": "f0ab075f-a2ff-4d50-aedf-f1cd2bd6e443",
                "team1Score": 73,
                "team2Id": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6",
                "team2Score": 552,
                "teamWinnerId": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6"
            },
            {
                "level": 1,
                "team1Id": "51a80bab-ee12-48e0-9e39-7079a7c8308a",
                "team1Score": 888,
                "team2Id": "6b05286d-292c-47b5-82f8-928c38755477",
                "team2Score": 463,
                "teamWinnerId": "51a80bab-ee12-48e0-9e39-7079a7c8308a"
            }
        ],
        "phase-2": [{
                "level": 2,
                "team1Id": "bb40c8ca-8240-4bac-9824-a314d14b4101",
                "team1Score": 25,
                "team2Id": "3630ffd0-ef95-47b9-880d-3b11e185f911",
                "team2Score": 717,
                "teamWinnerId": "3630ffd0-ef95-47b9-880d-3b11e185f911"
            },
            {
                "level": 2,
                "team1Id": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6",
                "team1Score": 907,
                "team2Id": "51a80bab-ee12-48e0-9e39-7079a7c8308a",
                "team2Score": 408,
                "teamWinnerId": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6"
            }
        ],
        "phase-3": [{
            "level": 3,
            "team1Id": "3630ffd0-ef95-47b9-880d-3b11e185f911",
            "team1Score": 494,
            "team2Id": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6",
            "team2Score": 247,
            "teamWinnerId": "3630ffd0-ef95-47b9-880d-3b11e185f911"
        }]
    },
    "teams": [{
            "id": "3630ffd0-ef95-47b9-880d-3b11e185f911",
            "name": "Team 8",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:45.403Z",
            "deletedAt": "2022-06-27T01:39:00.764Z"
        },
        {
            "id": "51a80bab-ee12-48e0-9e39-7079a7c8308a",
            "name": "Team 3",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:37.036Z",
            "deletedAt": null
        },
        {
            "id": "6b05286d-292c-47b5-82f8-928c38755477",
            "name": "Team 5",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:40.274Z",
            "deletedAt": null
        },
        {
            "id": "bb40c8ca-8240-4bac-9824-a314d14b4101",
            "name": "Team 4",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:38.695Z",
            "deletedAt": null
        },
        {
            "id": "c1b8ad4b-0516-4aca-97af-6988f5dc9ad6",
            "name": "Team 2",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:34.797Z",
            "deletedAt": "2022-06-27T01:21:41.528Z"
        },
        {
            "id": "d78f3b3c-dff7-478e-87b7-9f8149849c0e",
            "name": "Team 1",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:29.752Z",
            "deletedAt": null
        },
        {
            "id": "f0ab075f-a2ff-4d50-aedf-f1cd2bd6e443",
            "name": "Team 7",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:43.123Z",
            "deletedAt": null
        },
        {
            "id": "ff6d1692-b340-43f7-a856-f7099cd29d28",
            "name": "Team 6",
            "playersInitials": "ABC",
            "createdAt": "2022-06-26T19:00:41.843Z",
            "deletedAt": null
        }
    ]
}
```