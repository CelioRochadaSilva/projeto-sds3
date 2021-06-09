# projeto-sds3

## Documentação em elaboração

## Ferramentas e sistema operacional utilizado no projeto (Windows: em breve adicionarei para demais sistemas: Linux e Mac) 
- JDK 11;
- STS;
- Postman;
- Postgresql 12 e pgAdmin;
- Heroku CLI;
- NPM e yarn;
- VS Code;
- Git;

## Playlist do Youtube mostrando a instalação: disponibilização Devsuperior
https://www.youtube.com/playlist?list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox

Obs.: Plugins VScode: deve ser instalados
- JSX HTML v 1.0;
- Makdow preview git;
- Red Hat Commons 0.0.6 ;
- Visual Studio Intellicod ;
- XML 0.016 ;

## Objetivos do projeto
- Criar projetos backend e frontend;
- Salvar os projeto no Github em monorepo;
-	Montar o visual estático do front end;
-	Publicar o front end no Netlify;

## Checklist: sequencia de pastas 
- (inserir imagem)

•	Utilização do Yarn (instalação no prompt ou no )
yarn -v
- npm install --global yarn

# sequência de criação do projeto
## Passo 1: 
•	Criar projeto no ReactJS com create-react-app:
npx create-react-app frontend --template typescript

## Spring Initializr
- link : https://start.spring.io/

•	Criar projeto Spring Boot no Spring Initializr com as seguintes dependências:
o	Web
o	JPA
o	H2
o	Postgres
o	Security

## Obs Caso ocorra erro arquivo pom.xml execute procedimento abaixo:
o	Botão direito no projeto -> Maven -> Update project (force update)
o	Menu Project -> Clean
o	Apagar pasta .m2 e deixar o STS refazer o download

# Dicas configurando git
Faça a instalação padrao do git e depois sua cnofiguração. Objetivo comunicação com github
git config --global user.name <seu nome>
git config --global user.email <seu email>
git init
git add .
git commit -m "Project created"
git remote add origin <seu endereço>
git push -u origin main
  
  ## 1ª COMMIT: Project created
•	Lembrete: ver extensões e arquivos ocultos
•	Salvar o projeto no seu Github




