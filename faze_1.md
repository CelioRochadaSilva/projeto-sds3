# Fase_01

## Objetivos do projeto
- Criar projetos backend e frontend;
- Salvar os projeto no Github em monorepo;
-	Montar o visual estático do front end;
-	Publicar o front end no Netlify;

## Checklist: sequencia de pastas 
 ![Tela App](https://github.com/CelioRochadaSilva/projeto-sds3/blob/main/fig-1_sequencia.png)

- Após criaçao de pastas do projeto acessa-la pasta projeto-sds3;
- Utilização do Yarn (instalação no prompt ou no branch)
- yarn -v  (verificação se tem instalado)
- npm install --global yarn (instalação)

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
Faça a instalação padrão do git e depois a configuração. Objetivo comunicação com github
- git config --global user.name <seu nome> 
- git config --global user.email <seu email> 
- git init 
- git add .
- git commit -m "Project created"
- git remote add origin <seu endereço>
- git push -u origin main
  
## 1ª COMMIT: Project created
•	Lembrete: ver extensões e arquivos ocultos
•	Salvar o projeto no seu Github

## Passo 2: "limpar" o projeto ReactJS
Limpar projeto ReactJS / tsconfig.json
Arquivo _redirects
/* /index.html 200

## 2ª COMMIT: Project clean
•	Salvar o projeto no seu Github


## Passo 3: adicionar Bootstrap e CSS ao projeto
Bootstrap linha de comando abaixo.
yarn add bootstrap

• Arquivo deve ser modificado 
(index.tsx) import 'bootstrap/dist/css/bootstrap.css';
• Assets e CSS
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
:root {
    --color-primary: #FF8400;
}

html, body {
    height: 100%;
    font-family: "Ubuntu", sans-serif;
}

#root {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex-shrink: 0;
    text-align: center;
}

.bg-primary {
    background-color: var(--color-primary) !important;
}

.text-primary {
    color: var(--color-primary) !important;
}

(index.tsx) import 'assets/css/styles.css';

## 3ª COMMIT: Bootstrap

## Passo 4: adicionar componentes estáticos básicos
•	Navbar

<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
  <div className="container">
    <nav className="my-2 my-md-0 mr-md-3">
      <img src={ImgDsDark} alt="DevSuperior" width="120" />
    </nav>
  </div>
</div>


• Footer
<footer className="footer mt-auto py-3 bg-dark">
  <div className="container">
    <p className="text-light">App desenvolvido por <a https://github.com/CelioRochadaSilva/" target="_blank" rel="noreferrer">Celio Rocha da Sulva</a></p>
    <p className="text-light"><small><strong>Spring React</strong><br/>
     Conhecimento através pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
  </div>
</footer>

• DataTable
<div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
        </tbody>
    </table>
</div>

## 4ª COMMIT: Basic static components

## Passo 5: adicionando gráficos estáticos
• Apex Charts
yarn add apexcharts
yarn add react-apexcharts

• BarChart
const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};

const mockData = {
    labels: {
        categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    },
    series: [
        {
            name: "% Sucesso",
            data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
        }
    ]
};

• DonutChart
const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}

## 5ª COMMIT: Static charts

## Passo 6: implantação no Netlify
Publicação no Netlify
Comando: yarn build
Diretório: build
Deploy! (vai quebrar)
Site settings -> Build & Deploy: (colocar o nome da sua subpasta do projeto frontend)
Site settings -> Domain Management: (colocar o nome que você quiser)
Deploys -> Trigger deploy

PARABÉNS!
