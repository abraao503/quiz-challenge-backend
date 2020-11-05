<h1 align="center">
   Quiz App
</h1>

<p align="center">
  <a href="#space_invader-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-rodar-a-aplicação">Como rodar a aplicação</a>&nbsp;&nbsp;&nbsp;
</p>
<br><br>

## :space_invader: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)

## :computer: Sobre o projeto

Backend de um pequeno LMS. para simplificar, estarei chamando ele de quiz. O Frontend da aplicação pode ser encontrado [aqui](https://github.com/abraao503/quiz-challenge-frontend).    
Em resumo esse backend realiza três principais funçoes (uma por tela):  

1. Cadastrar um novo usuário
2. Ao receber uma resposta do usuário, calcular o total de pontos
3. Listar as respostas de todos os usuários

### Esquema do Banco
![Schema](https://user-images.githubusercontent.com/51488383/98297731-3b419100-1f8b-11eb-97c8-6aaffc7dd8cb.png)

## :information_source: Como rodar a aplicação

### Pré-requesitos
Você vai precisar instalar [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.16.1 (ou versão posterior), [Yarn](https://yarnpkg.com/) e [Docker](https://docs.docker.com/get-docker). 

Clone o repositório e entre na pasta do projeto.      
```bash
git clone https://github.com/abraao503/quiz-challenge-backend.git
cd quiz-challenge-backend

```

Crie um arquivo .env seguindo o arquivo de exemplo.      
```bash
cp .env.example .env

```

Subindo o container do postgres com docker.      
```bash
docker run --name database -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

```

Instale as dependências.
```bash
yarn
```

Rode as migrations.      
```bash
yarn sequelize db:migrate

```

Rode as seeds.      
```bash
yarn sequelize db:seed:all

```

Rode os testes (opcional).      
```bash
yarn jest

```

Por fim, rode o projeto.
```bash
yarn dev
```
