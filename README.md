## DESCRIÇÃO ##
Aplicação front-end que consiste em uma lista de usuários que nos permite:
 - Alterar um usuário ja pré-existente na lista padrão
 - Excluir qualquer usuário da nossa lista
 - Cadastrar novos usuários

 ## DEPLOY ##
 1. Repositorio =>  https://github.com/claudio-inacio/desafio-cadastro-usuarios
 2. Link de acesso do projeto => https://desafio-cadastro-usuarios-eight.vercel.app/



## EXCUTANDO PROJETO LOCAL ##
1. Baixar o projeto =>
git clone https://github.com/claudio-inacio/desafio-cadastro-usuarios
2. Navegar até a pasta =>
cd desafio-cadastro-usuarios
3. Instalar dependencias =>
npm install
4. Executar projeto desenvolvimento =>
npm run dev

## EXECUTANDO PROJETO COM DOCKER ##
1. Baixar o projeto => 
git clone https://github.com/claudio-inacio/desafio-cadastro-usuarios
2. Navegar até a pasta => 
cd desafio-cadastro-usuarios
3. Instalar dependencias => 
npm install
4. Build e upload da imagem => 
docker compose up --build
6. Acessar Navegador => 
http://localhost:8080

## ARQUITETURA ##
1. Arquitetura inicial baseada de Feature-Driven, acredito ser uma arquitetura limpa, facil de escalar futuramente, alem de nos permitir desenvolver codigos com menos acoplamento

## APLICAÇÃO ##

A aplicação utiliza:

 - Staks principais:
React + TypeScript
Vite
 - React Query -> Utilizado para realizar armazenamento de requisições de forma cacheada
 - zod -> Responsavel pela validação dos formularios que hoje foram desenvolvidos com ReactHookForm
 - Tailwind(UI) -> estilização de telas e componentes
 - React Router -> Controle e navegação entre rotas.


## OBSERVAÇÕES ##
1. Atualmente a API não faz a persistencia real dos dados quando realizamos update/delet/create por esse motivo sempre que o usuário recarrega a pagina, ele é redirecionado para a nossa pagina inicial de listagem, garantindo dessa forma que as informações não fiquem divergentes.
2. As alterações aplicadas nos usuários, inserção ou remoção são realmente enviadas para a api, porem são refletidas apenas em nossa lista local, a api simula a requisição, porem os dados não são persistidos.

## MELHORIAS FUTURAS ##
1. Aplicação de testes, muito interessante aplicarmos os testes com jest e vitest para garantir a qualidade do nosso codigo.
2. Possivel cache da nossa lista no localStorage, dessa maneira, toda e qualquer alteração realizada pelo usuário iria ser mantida até que o usuário removesse as informação do storage.
3. No interceptor do axios, veriricar o token do local storage, e retornar o config com o header de autorização
4. No interceptor do axios error, implementar uma tratavia para erro padrão com redirecionamento para a página correta, ou exibição de uma mensagem de erro para o usuário.