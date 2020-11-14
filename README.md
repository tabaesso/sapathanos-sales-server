# ✨ sapathanos-sales-server

![Status][status-badge]
[![Server][server-badge]][server-url]
[![License][license-badge]][license-url]
<br />

## ⚠ Requisitos projeto
-  Docker
-  Yarn
-  Prettier
-  EditorConfig
-  ESLint

- [Veja algumas rotas da api aqui](routes.md)

## 👩🏻‍💻 Como rodar o projeto?

   -  Digite `yarn` na raiz para instalar as dependências do projeto.
   -  Digite `docker-compose -f docker-compose.yml up --build` na raiz para a criação do banco de dados.
   -  Copie os itens do arquivo `.env.example` e crie um arquivo na raiz do projeto chamado `.env` com as suas configurações.
   -  Digite `yarn typeorm migration:run` na pasta raiz para rodar as migrations.
   -  Digite `yarn dev:server` na pasta raiz para executar o servidor.

## 🐘 Caso queira usar o PgAdmin (gerenciador de banco Postgres via container)
  -  Execute primeiro o `docker-compose -f docker-compose.yml up --build`
  -  Acesse `http://localhost:16543/` para ter acesso ao banco postgres com o PgAdmin.
  -  Para acessar o PgAdmin:
      - Email: `admin@admin.com`
      - Senha: `docker`

## 🛑 Padrão de código
   -  Para entender como instalar o EditorConfig, Prettier e ESLint no projeto. Observação: Não é preciso configurá-los novamente, só instalar as extensões e alterar as settings.json do VSCode caso ainda não estejam configuradas. https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7

## 🌐 COMANDOS GIT:

### Básicos:
`git pull` - pega todos os commits do github e atualiza sua branch local<br>
`git add` . - adiciona as alterações que foram feitas, os arquivos alterados, etc<br>
`git add arquivo1.js` - adiciona apenas as alterações do arquivo1.js<br>
`git commit -m "mensagem aqui"` - faz um commit com a mensagem que vc desejar<br>
`git push` - envia o commit que você fez para o repositório no github<br>

### Branch:
`git branch` - ver em qual branch você está<br>
`git checkout branch1` - vai para a branch com o nome: "branch1"<br>
`git branch branch2` - cria uma branch com o nome: "branch2"<br>
`git checkout -b branch3` - cria uma branch com o nome "branch3" e já entra nela (checkout)<br>
`git push -u origin branch1` - para fazer o primeiro push da branch criada, é preciso usar esse comando ou o comando que o github sugerir<br>
`git fetch` - atualiza no seu pc se alguém criou ou alterou alguma outra branch que você não trabalhava, etc<br>

## ⚠ IMPORTANTE:
-Antes de começar a desenvolver sempre deve ser feito um pull na branch em que vc está trabalhando, para garantir que ela está sincronizada com o conteúdo do github<br>
-Sempre quando quiser mandar algo para o git precisa seguir a ordem: add > commit > push<br>
-Quando você tiver acabado de testar a sua branch e estiver 100% ok que ela tá pronta, vc entra no github e cria um pull request da sua branch para a main<br>
-Caso surja qualquer dúvida de como fazer alguma coisa, é só me procurar (Tábata)<br>

## ⚠ NOMES DAS BRANCHES:
A nomenclatura deve seguir o padrão:<br>
-main<br>
-feature/nome-da-funcionalidade (Ex: cadastro-guia)<br>
-fix/nome-do-que-estiver-sendo-consertado (Ex: cadastro-guia-salvando)<br>

## Autores:

<table>
    <tr>
        <td style="text-align:center">
            <a href="https://github.com/yu-gui-oh" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/47790486?s=115&v=4"><br><sub>@yu-gui-oh</sub></a>
        </td>
        <td style="text-align:center">
            <a href="https://github.com/schuansk" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/11741138?s=115&v=4"><br><sub>@schuansk</sub></a>
        </td>
        <td style="text-align:center">
            <a href="https://github.com/tabaesso" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/43206830?s=115&v=4"><br><sub>@tabaesso</sub></a>
        </td>
        <td style="text-align:center">
            <a href="https://github.com/VitoriaVidal" target="blank" rel="noopener"><img src="https://avatars1.githubusercontent.com/u/47597666?s=115&v=4"><br><sub>@VitoriaVidal</sub></a>
        </td>
    </tr>
</table>

### 📓 Licença
Este projeto está sob a licença do MIT. Veja a [licença][license-url] para mais informações.

[status-badge]: https://img.shields.io/badge/status-build-important?logo=tool&color=%2334EB43
[server-badge]: https://img.shields.io/badge/server-build-important?logo=tool&color=%239B51E0
[server-url]: https://sapathanos-sales.herokuapp.com/
[license-badge]: https://img.shields.io/github/license/tabaesso/sapathanos-sales-app?color=%239B51E0
[license-url]: https://github.com/tabaesso/sapathanos-sales-app/blob/main/LICENSE
