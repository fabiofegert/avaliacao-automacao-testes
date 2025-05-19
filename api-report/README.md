# Avaliação Técnica - Automação de Testes

Este repositório contém testes automatizados criados para validar operações na API [ServeRest](https://serverest.dev), usando Cypress como ferramenta principal.

---

## 📁 Estrutura de Testes

- `getUsuarios.cy.js`  
  Lista e valida o retorno de todos os usuários

- `createUsuario.cy.js`  
  Cria um novo usuário com dados dinâmicos

- `criarEValidarUsuario.cy.js`  
  Cria e em seguida busca o usuário por e-mail para validar que ele foi persistido

- `editarEDeletarUsuario.cy.js`  
  Realiza fluxo completo: criação, atualização (PUT) e exclusão (DELETE) de usuário

---

## 🛠️ Boas práticas aplicadas

- Comandos customizados em `cypress/support/commands/usuarios.js`
- Dados dinâmicos com `Date.now()` para evitar duplicidade
- Separação por arquivos e lógica clara
- Uso de `failOnStatusCode: false` para capturar erros da API de forma controlada
- Assertivas específicas para cada operação (`expect`, `to.be.oneOf`, `to.exist`, etc.)

---

## 🚀 Tecnologias

- [x] Cypress v14
- [x] Node.js (ambiente local)
- [x] GitHub como repositório remoto
- [x] Mochawesome (relatórios HTML)

---

## ▶️ Como rodar os testes e gerar o relatório HTML

### 1. Instalar dependências

npm install
2. Executar os testes (gera .json)

npm run test
3. Mover os relatórios para a pasta correta (se necessário)

cd cypress/reports/json
mkdir -p raw
mv mochawesome*.json raw/
4. Gerar o merged-report.json

npx mochawesome-merge raw/*.json > merged-report.json
5. Gerar o relatório HTML

npx marge merged-report.json -f index -o ../html
📄 Abrir o relatório

cypress/reports/html/index.html
👤 Autor
Fábio Fegert
QA Sênior | Automação, Estratégia e Entregas com foco em qualidade realista