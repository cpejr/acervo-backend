# acervo-backend

### Estrutura de Diretórios

    -> src
      -> config
      -> controllers
      -> errors
      -> mail
      -> middlewares
      -> models
      -> routes
      -> services
      -> utils
        -> general
        -> libs
      -> validators

**-> src**

- Pasta onde ficará código criado por nós, sendo ele dividido da seguinte forma:
  **-> config**

  - Pasta em que ficarão os arquivos e pastas de configurações gerais do sistema, referente á bibliotecas e afins.

  **-> controllers**

  - Pasta em que ficarão os controllers definidos para a aplicação. Cada entidade de dados definida deve ter um controller próprio, capaz de realizar a sua função. Não somente as entidades possuem controllers, mas também as coleções não relacionais destas próprias entidades. Um controller é responsável por organizar as informações recebidas da rota e se comunicar com os diferentes models e coleções necessárias para realizar aquela ação (ex.: uma função de getAll em um ProfessorController precisa se comunicar com o ProfessorModel, para obter as informações do professor, mas precisa também pegar também através do RelationsModel informações de outras entidades que estejam vinculadas a este professor), para então organizar a resposta a ser dada.
  - Cada controller consiste em um conjunto de funções a ser realizadas para aquela entidade.

  **-> errors**

  - Pasta onde será configurado o tratamento de erros de todo o sistema, inclusive de instâncias e bibliotecas específicas. Nesses casos em que o tratamento só é utilizado em instâncias particulares, o tratamento de erros será configurado na subdivisão handlers.
    **-> handlers**
    - Pasta onde o tratamento de erros de intâncias específicas e bibliotecas particulares é configurado.

  **-> mail**

  - Pasta onde fica componentizada toda a configuração de envio de emails que porventura venhamos precisar enviar para os usuários da aplicação, assim como os seus respectivos conteúdos.

  **-> middlewares**

  - Pasta onde ficam arquivos que permitem a comunicação de diferentes partes do sistema, e realizam funções de segurança e tratamento de erro. São arquivos que verificam se cada requisição está de acordo com o determinado, e impede esta de ser realizada, caso o contrário.

  **-> models**

  - Pasta em que definiremos os models da aplicação. Os models são aqueles que interagem em mais baixo nível com as entidades de dados que temos na aplicação. São eles os responsáveis por buscar dados em uma coleção, inserir dados em uma coleção, etc. No caso, precisamos de um model para cada entidade do banco de dados (administrador, estudante, professor, qualificação ...), fora o Model de relacionamento que foi criado para conseguir atender a todas as coleções não relacionais do projeto.

  **-> routes**

  - Pasta em que onde fica toda a parte de rotas do sistema, onde cada uma dessas realiza uma função específica quando "disparada", caso consiga ser "aprovada" por todos os middlewares.

  **-> services**

  - Pasta em que colocaremos os arquivos em que serão implementadas um conjunto de funções a serem realizadas e controladas pelos respectivos controllers.
  - Para cada entidade em que se avalia necessário realizar requisições de cenários CRUD, é criado um arquivo na pasta services.

  **-> utils**

  - Pasta em que colocaremos os arquivos auxiliares e que podem precisar ser acessados por diversos outros.
    **-> general**
    Arquivos auxiliares que podem ser utilizados em circunstâncias diversas.
    **-> libs**
    Arquivos auxiliares que são utilizados em circunstâncias específicas, como na implementação de um processo através de uma biblioteca particular.

  **-> validators**

  - Pasta onde fica toda a parte de validação dos dados passados nas rotas, servindo de controle destes afim de fazer com que o usuário consiga enviar informações que não correspondam com a que de fato está sendo esperada. A ferramenta de criação desses 'validators' foi o zod, biblioteca que facilita o tratamento de erros.

  ### Ferramentas utilizadas

* [Mongoose](https://mongoosejs.com/ 'Mongoose') -> NoSQL Schema builder utilizado no projeto, tanto para modelar o banco de dados quanto para rodar queries de adição, busca, etc.
* [ESLint](https://eslint.org/docs/user-guide/getting-started 'ESLint') -> Ferramenta utilizada para padronização do código e do estilo aplicados.
* [Prettier](https://prettier.io/docs/en/index.html 'Prettier') -> Ferramenta utilizada para a formatação e estilização do código.
* [DotEnv](https://www.npmjs.com/package/dotenv 'DotEnv') -> Ferramenta de armazenamento de variáveis sensíveis, fazendo estas não irem para o git.
* [Nodemailer](https://nodemailer.com/about/ 'Nodemailer') -> Ferramenta utilizada para envio de emails.
* [Pino](https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/ 'Pino') -> Ferramenta utilizada paraa configuração do logger do projeto, forma mais versátil e eficiente de explicitar as informações no console da máquina.
* [multer-s3](https://www.npmjs.com/package/multer-s3 'multer-s3') -> Ferramenta utilizada para o processamento de arquivos para o banco de dados AWS s3.
* [s3rver](https://www.npmjs.com/package/s3rver/v/2.2.1 's3rver') -> Ferramenta utilizada para simular o banco de dados AWS S3 em desenvolvimento.
* [aws-sdk](https://aws.amazon.com/pt/sdk-for-javascript/ 'aws-sdk') -> Lib de integração com os serviços AWS.
* [maildev](https://www.maildev.com/ 'maildev') -> Ferramenta utilizada para a testagem de envio de emails.
* [Zod](https://zod.dev/ 'Zod') -> Biblioteca utilizada para tratamento de erros.
* [Husky](https://typicode.github.io/husky/#/ 'Husky') -> Ferramenta utilizada para padromizar e melhoras commits.
