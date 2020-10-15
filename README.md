# sapathanos-sales-backend

## ⚠ Requisitos projeto
-  Docker
-  Yarn

## 👩🏻‍💻 Como rodar o projeto: desenvolvimento (backend)?

   -  Digite `yarn` na raiz para instalar as dependências do projeto.
   -  Digite `docker-compose -f docker-compose.dev.yml up --build` na raiz para a criação do banco de dados.
   -  No `.env` dentro de `packages/server` copie e cole o que está em `.env.example` e altere para os dados do seu banco de dados e senha do e-mail.
   -  Digite `yarn sequelize db:migrate` dentro de `packages/server` para criação das tabelas no banco.
   -  Digite `yarn server:start` se estiver fora de `packages/server`.
   -  Digite `yarn start` se dentro de `packages/server`.

## ⛔ Como rodar o projeto: produção?
   
   -  Não rode em produção, ainda não está funcionando totalmente.
   -  Digite `yarn` para instalar as dependências do projeto.
   -  No `.env` dentro de `packages/server` copie e cole o que está em `.env.production`
   -  Digite `docker-compose -f docker-compose.yml up --build` para a criação do banco de dados e build do servidor.
	
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
-Quando você tiver acabado de testar a sua branch e estiver 100% ok que ela tá pronta, vc entra no github e cria um pull request da sua branch para a master<br>
-Caso surja qualquer dúvida de como fazer alguma coisa, é só me procurar (Tábata)<br>

## ⚠ NOMES DAS BRANCHES:
A nomenclatura deve seguir o padrão:<br>
-master<br>
-feature/nome-da-funcionalidade (Ex: cadastro-guia)<br>
-fix/nome-do-que-estiver-sendo-consertado (Ex: cadastro-guia-salvando)<br>

## Autores:

<table>
    <tr>
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
