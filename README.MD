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

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Dar exemplos
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Diga como essa etapa será:

```
Dar exemplos
```

E repita:

```
Até finalizar
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
- [Maven](https://maven.apache.org/) - Gerente de Dependência
- [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

- **Um desenvolvedor** - _Trabalho Inicial_ - [umdesenvolvedor](https://github.com/linkParaPerfil)
- **Fulano De Tal** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

- Conte a outras pessoas sobre este projeto 📢;
- Convide alguém da equipe para uma cerveja 🍺;
- Um agradecimento publicamente 🫂;
- etc.

---

⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
