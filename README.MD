# Desafio Técnico - Processo Seletivo Backend Mercafácil

O objetivo deste backe-end, é resolver o desafio técnico enviado pela empresa Mercafácil, a fim de simular uma possível integração entre sistemas na importação de contatos.

### Sobre o desafio

O objetivo deste teste é avaliar seu desempenho em desenvolver uma solução de integração entre sistemas.

O problema consiste em receber 1 ou mais contatos de celulares através de uma API Rest e adicioná-los ao banco de dados do cliente Macapá ou do cliente VareJão.

#### Fluxo de Ações

- A API receberá um JSON via POST contendo o nome e celular;
- O cliente deverá estar autenticado para inserir o contato na base
- O contato deverá ser inserido no banco de dados do cliente seguindo as regras de cada cliente

#### Especificações da API:

- A autenticação será através de um token JWT no Authorization Header
- Cada cliente tem 1 uma chave única
- A lista de contatos que será inserido em cada cliente está no arquivo contato.json

#### Especificações do Cliente Macapá:

- Banco de dados Mysql
- Formato do Nome é somente maiúsculas
- O formato de telefone segue o padrão +55 (41) 93030-6905
- Em anexo está o sql de criação da tabela

#### Especificações do Cliente VareJão:

- Banco de dados Postgresql
- Formato do Nome é livre
- O formato de telefone segue o padrão 554130306905
- Em anexo está o sql de criação da tabela

A criação de um ambiente de testes usando Docker para simular o banco de dados do cliente é altamente recomendada. A solução poderá ser desenvolvida em Golang ou Node.js. Fique livre para desenhar a solução da maneira que achar mais conveniente e supor qualquer cenário que não foi abordado nas especificações acima. Se, por qualquer motivo, você não consiga completar este teste, recomendamos que nos encaminhe o que foi desenvolvido de qualquer maneira. A falta de cumprimento de alguns dos requisitos aqui descritos não implica necessariamente na desconsideração do candidato.

## Motivação de uso das tecnologias e padrões de projetos

### Porque Node.JS ?

O principal fator da minha escolha em relação a tecnologia, é a experiência com ela.
O uso do Node.JS, me abriu possibilidades de ter controle sobre as minhas
implementações, afim de ter feature mais sólidas, menos suscetíveis a falhas e com melhores
prátricas de escrita e execução de código, diferente
de Go, onde minha expriência é mais limitada, por ter trabalhado em menos projetos, e não
ter ainda, passado por diferentes desafios como em Node.

### Porque TypeScript ?

"Se você ainda programa em JavaScript Puro, é porque nunca teve que refatorar seu próprio código"

Tirando o fator sarcástico da minhas frase, o uso do TypeScript, mantém a minha escríta e a facilidade
de entendimento em dias, me permitindo ter menos falhas de execução, capturar e resolver mais rápidamente os erros
apresentados na hora do desenvlvimento, além de facilitar para os futuros desenvolvedores que venham á fazer
manutenções ou novas implementações. Isso implica diretamente na economia de tempo e esforço.I

### S.O.L.I.D ?

A escolha da utilização de alguns princípios do S.O.L.I.D, é uma forma que me permite ter o controle e facilidade na implementação
de algorítimos, utilizando técnicas que possam fazer muito sentido, no caso da utilização de um ou mais banco de dados pela mesma aplicção,
com o S.O.L.I.D, consegui realizar a manipulação de interfaces através da injeção de depencdências, e ter regra de negócio bem separadas e bem definidas,
seguindo o principio da responsabilidade únicas. Um grande exemplo dentro desta aplicação são as interfaces dos repositórios, onde e possível substituir
rapidamente, um banco de dado pelo outro, sem sérias modificações na aplicação inteira.

## 🚀 Começando

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos obrigatórios

- **[Node.js](https://nodejs.org/en)**
- **[Docker](https://docs.docker.com/desktop/)** e **[Docker Compose](https://docs.docker.com/compose/)**
- **[Git](https://git-scm.com/)**
- **[Yarn](https://yarnpkg.com/)**

### 🔧 Instalação

- Realize a instação do **[Node.js](https://nodejs.org/en)**
- Realize a instação do **[Docker](https://docs.docker.com/desktop/)** e **[Docker Compose](https://docs.docker.com/compose/)**

- Após a instalação dos itens a cima, realize o download da aplicação nas sua máquina
- OBS: O exemplo a seguir, aborda somente o donwload da plicação via HTTP.

```
git clone https://github.com/pedrohigor-life/challenge-mercafacil-backend-integration.git

```

Navegue até a pasta onde você fez o download do código, e rode o seguinte comando, para a instalação das dependências:

```
yarn
```

## ⚙️ Executando o projeto

Execute o comando abaixo, para subir á aplicação junstamente com os bancos de dados:

```
docker-compose up
```

### Migrations

Um passo extremamente importante é você executar as migrations, para que seja possível realizar a operações com as Entidades da aplicação.

Execute os comandos a baixo:

- OBS: Não derrube os containers, abra um novo terminal.

```
- docker exec -it mercafacil-backend-integration sh -c "yarn typeorm migration:run -- -d ./src/database/datasources/PostgresDataSource.ts"

- docker exec -it mercafacil-backend-integration sh -c "yarn typeorm migration:run -- -d ./src/database/datasources/MySQLDataSource.ts"
```

Por padrão, o servidor será criado no endereço: http://localhost:4444
mas caso, seja da sua vontade alterar, é só alterar a variável de ambiente (SERVER_PORT) no arquivo .env

### Caso você prefira realizar os testes via Insomnia, é só realizar a importação do arquivo:

- **[Insomnia](https://github.com/pedrohigor-life/challenge-mercafacil-backend-integration/blob/dev/tmp)**

## ✒️ Autores

- **Pedro Sousa** - _Desenvolvedor_ - [GitHub](https://github.com/pedrohigor-life)

⌨️ Desenvolviedor por [Pedro Sousa](https://www.linkedin.com/feed/)
