# 🧪 Avaliação Técnica - Automação de Testes E2E

Este repositório contém testes automatizados com **Cypress** e **Cucumber** para validar fluxos principais do sistema de abertura de conta, login e extrato.

---

## 📁 Estrutura

- `checkout.feature` – Abertura de conta com sucesso
- `extrato.feature` – Acesso ao extrato da conta após login
- `login.feature` – Login com senha válida e inválida
- `step_definitions/` – Lógica dos passos em Gherkin
- `pages/` – Page Objects centralizados

---

## ✅ Requisitos

- Node.js 18+
- Cypress 12.17.4
- @badeball/cypress-cucumber-preprocessor
- Estrutura baseada em Gherkin e Page Object Pattern

---

## 🚀 Como executar os testes

### 1. Clonar o projeto e acessar a pasta

```
cd e2e-report
```

---

### 2. Instalar as dependências

```
npm install
```

---

### 3. Executar os testes em modo headless

```
npx cypress run
```

---

### 4. Executar os testes com interface gráfica (modo interativo)

```
npx cypress open
```

---

## 📼 Evidências

- Todos os testes geram **vídeos automáticos** com o fluxo completo.
- Os vídeos ficam salvos em:

```
cypress/videos/
```

---

## 🔗 Autor

Fábio Fegert – *QA Sênior com foco em automação, performance e qualidade contínua*