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
      -> validators

**-> src**

- Pasta onde ficará código criado por nós, sendo ele dividido da seguinte forma:
  **-> config**

  - Pasta em que ficarão os arquivos e pastas de configurações gerais do sistema, referente á bibliotecas e afins.
    **-> controllers**
  - Pasta em que ficarão os controllers definidos para a aplicação. Cada entidade de dados definida deve ter um controller próprio, capaz de realizar a sua função. Não somente as entidades possuem controllers, mas também as tabelas relacionais destas próprias entidades. Um controller é responsável por organizar as informações recebidas da rota e se comunicar com os diferentes models e tabelas necessárias para realizar aquela ação (ex.: uma função de getAll em um ProfessorController precisa se comunicar com o ProfessorModel, para obter as informações do professor, mas precisa também pegar também através do RelationsModel informações de outras entidades que estejam vinculadas a este professor), para então organizar a resposta a ser dada.
  - Cada controller consiste em um conjunto de funções a ser realizadas para aquela entidade.

  **-> errors**

  - Pasta onde será configurado o tratamento de erros de todo o sistema, inclusive de instâncias e bibliotecas específicas. Nesses casos em que o tratamento só é utilizado em instâncias particulares, o tratamento de erros será configurado na subdivisão handlers.

    **-> mail**

  - Pasta onde fica componentizada toda a configuração de envio de emails que porventura venhamos precisar enviar para os usuários da aplicação, assim como os seus respectivos conteúdos.

  **-> middlewares**

  - Pasta onde ficam os arquivos de autenticação dos usuários, para autorizar ou não a execução de determinadas funções a depender do usuário que esteja realizando estas.

  **-> models**

  - Pasta em que definiremos os models da aplicação. Os models são aqueles que interagem em mais baixo nível com as entidades de dados que temos na aplicação. São eles os responsáveis por buscar dados em uma tabela, inserir dados em uma tabela, etc. No caso, precisamos de um model para cada entidade do banco de dados (administrador, estudante, professor, qualificação ...), fora o Model de relacionamento que foi criado para conseguir atender a todas as tabelas relacionais do projeto.

  **-> routes**

  - Pasta em que onde fica toda a parte de rotas do sistema, onde cada uma dessas realiza uma função específica quando "disparada", caso consiga ser "aprovada" por todos os middlewares. Esta parte também está dividida por entidades por motivos de organização, sendo que dentro destas pastas internas há o arquivo principal com o código executável, como também um arquivo doc que contém toda a parte da documentação específica de cada entidade que foi criada a partir do Swagger.

  **-> services**

  - Pasta em que colocaremos os arquivos auxiliares e que podem precisar ser acessados por diversos outros. Por exemplo, é onde armazenamos todas as funções do firebase de autenticação que usamos dentro da aplicação e também do firestore, ferramenta usada para armazenamento de arquivos.

  **-> utils**

  - Pasta em que colocaremos os arquivos auxiliares e que podem precisar ser acessados por diversos outros. Por exemplo, é onde armazenamos todas as funções do firebase de autenticação que usamos dentro da aplicação e também do firestore, ferramenta usada para armazenamento de arquivos.

  **-> validators**

  - Pasta onde fica toda a parte de validação dos dados passados nas rotas, servindo de controle destes afim de fazer com que o usuário consiga enviar informações que não correspondam com a que de fato está sendo esperada. A ferramenta de criação desses 'validators' foi o celebrate e esses são chamados como middleware nas rotas do sistema.

  ### Ferramentas utilizadas

* [Firebase](https://firebase.google.com/docs/ 'Firebase') -> Usado para a autenticação e para armazenamento de arquivos.
* [Mongoose](https://mongoosejs.com/ 'Mongoose') -> NoSQL Schema builder utilizado no projeto, tanto para modelar o banco de dados quanto para rodar queries de adição, busca, etc.
* [ESLint](https://eslint.org/docs/user-guide/getting-started 'ESLint') -> Ferramenta utilizada para padronização do código e do estilo aplicados.
* [Prettier](https://prettier.io/docs/en/index.html 'Prettier') -> Ferramenta utilizada para a formatação e estilização do código.
* [DotEnv](https://www.npmjs.com/package/dotenv 'DotEnv') -> Ferramenta de armazenamento de variáveis sensíveis, fazendo estas não irem para o git.
* [Nodemailer](https://nodemailer.com/about/ 'Nodemailer') -> Ferramenta utilizada para envio de emails.

[Diagrama UML]()
