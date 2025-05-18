# 🧪 Projeto de Automação de Testes E2E

Este projeto tem como objetivo demonstrar habilidades em automação de testes End-to-End (E2E), cobrindo login, extrato e abertura de conta, com geração de relatórios completos em HTML.

---

## 🚀 Tecnologias Utilizadas

- **Cypress** `^14.3.3`
- **Cucumber Preprocessor** (`@badeball/cypress-cucumber-preprocessor`)
- **Gherkin (Cucumber Syntax)** para escrita dos cenários
- **Page Object Pattern**
- **Relatórios** com `multiple-cucumber-html-reporter`

---

## 📁 Estrutura de Pastas

e2e-tests/
├── features/ # Arquivos .feature (Gherkin)
├── cypress/
│ ├── e2e/ # (não utilizado)
│ ├── pages/ # Page Objects
│ ├── reports/ # Relatórios HTML (index.html)
│ ├── screenshots/ # Prints automáticos dos testes
│ ├── support/
│ │ ├── step_definitions/ # Steps do Cucumber organizados por fluxo
│ │ └── generate-report.js # Script do relatório
├── package.json
├── cypress.config.js
└── README.md


---

## ⚙️ Como instalar o projeto

```bash
npm install
npx cypress run --env cucumberJson=true
npm run report:e2e
cypress/reports/index.html

✅ Cenários Automatizados

login.feature

Login com credenciais válidas

Login com senha incorreta

checkout.feature

Abertura de conta com dados válidos após login

extrato.feature

Visualização do extrato de conta existente

👤 Autor
Fábio Fegert
Especialista em QA e Automação de Testes

📌 Observações
As pastas cucumber-json/, screenshots/, videos/ e node_modules/ estão no .gitignore por padrão para manter o repositório limpo.
