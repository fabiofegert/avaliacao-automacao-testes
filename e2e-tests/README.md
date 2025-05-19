# 🧪 Projeto de Automação de Testes E2E

Este projeto tem como objetivo demonstrar habilidades em automação de testes End-to-End (E2E) utilizando Cypress com Cucumber, cobrindo os seguintes cenários:

- Login com sucesso e falha
- Visualização de extrato
- Abertura de conta
- Fluxo de checkout simples com validações
- Geração de relatório HTML para apresentação dos resultados

---

## 🚀 Tecnologias Utilizadas

- **Cypress** `^14.3.3`
- **Cucumber Preprocessor** (`@badeball/cypress-cucumber-preprocessor`)
- **Gherkin (Cucumber Syntax)** para escrita dos cenários
- **Page Object Pattern**
- **Relatórios HTML** com `mochawesome` e `mochawesome-merge`

---

## 📁 Estrutura de Pastas

e2e-tests/
├── features/ # Arquivos .feature (cenários Gherkin)
├── cypress/
│ ├── pages/ # Page Objects
│ ├── reports/ # Relatórios HTML e JSON
│ ├── screenshots/ # Capturas automáticas de falhas
│ ├── support/
│ │ ├── e2e.js # Arquivo de suporte geral
│ │ └── step_definitions/ # Steps do Cucumber organizados
├── cypress.config.js
├── package.json
└── README.md

yaml
Copiar
Editar

---

## ⚙️ Como instalar e executar

### 1. Instalar dependências

```bash
npm install
2. Executar os testes E2E
bash
Copiar
Editar
npm run test:e2e
3. Gerar o relatório final em HTML
bash
Copiar
Editar
npm run merge:e2e
npm run report:e2e
📂 O relatório HTML será salvo em:
cypress/reports/html/index.html

✅ Cenários Automatizados
login.feature
Login com credenciais válidas

Login com senha incorreta

extrato.feature
Visualização do extrato de conta existente

checkout.feature
Abertura de conta com dados válidos após login

👤 Autor
Fábio Fegert
Especialista em QA e Automação de Testes

📌 Observações
As seguintes pastas estão no .gitignore para manter o repositório limpo:

node_modules/

cypress/screenshots/

cypress/videos/

cypress/reports/*.json

cypress/reports/html/