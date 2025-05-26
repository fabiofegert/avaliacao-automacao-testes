
# ✅ Avaliação Técnica - Automação de Testes Completa

Este repositório contém a automação completa de testes para três pilares principais:

- **Testes de API** com Cypress + Mochawesome
- **Testes de Carga** com K6
- **Testes E2E Mobile e Web** com WebdriverIO e Cypress+Cucumber

---

## 📦 Estrutura do Projeto

```
avaliacao-automacao-testes/
│
├── api-report/              # Testes de API com Cypress
│   └── serverest/           # Testes da API ServeRest com relatório Mochawesome
│
├── carga-report/            # Testes de carga com K6
│   └── scripts/             # Scripts de performance K6
│
├── mobile-tests/            # Testes mobile automatizados com Appium + WebdriverIO
│   └── apps/                # APKs e apps testados
│
├── e2e-report/              # Testes E2E Web com Cypress + Cucumber
│   ├── features/            # Cenários em Gherkin
│   ├── support/             # Step definitions e configurações
│   └── pages/               # Page Objects
```

---

## 🧪 Testes de API

**Local: `api-report/serverest/`**

- Realiza testes de criação, edição, exclusão e listagem de usuários na API [ServeRest](https://serverest.dev)
- Geração de relatórios em JSON e HTML com Mochawesome

### Executar testes de API:
```
cd api-report/serverest
npm install
npm test
```

---

## ⚙️ Testes de Carga

**Local: `carga-report/`**

- Executa simulações de carga com múltiplos usuários utilizando o K6
- Exporta relatório `summary.json` e `summary.html`

### Executar teste de carga:
```
cd carga-report
npm install
k6 run scripts/test-carga.js --summary-export=results/summary.json
```

---

## 📱 Testes Mobile

**Local: `mobile-tests/`**

- Executa testes com WebdriverIO e Appium em dispositivos Android
- Utiliza o APK `ApiDemos` para validação de elementos e navegação

### Executar testes mobile:
```
cd mobile-tests
npm install
npm run test:local
```

> É necessário que o emulador Android esteja aberto antes de executar.

---

## 🌐 Testes E2E Web (Cucumber)

**Local: `e2e-report/`**

Testes web com Cypress + Cucumber:

- `checkout.feature` – Criação de conta
- `login.feature` – Login com sucesso e falha
- `extrato.feature` – Visualização de extrato
- Baseado em **Page Object Pattern** com evidências de vídeo e screenshots.

### Executar testes E2E:
```
cd e2e-report
npm install
npm test
```

---

## 📼 Evidências

- **API**: `api-report/serverest/cypress/reports/`
- **Carga**: `carga-report/results/summary.html`
- **Mobile**: `mobile-tests/allure-report/`
- **E2E Web**: `e2e-report/cypress/videos/` e `screenshots/`

---

## 🔗 Autor

**Fábio Fegert**  
*QA Sênior com foco em automação, performance e qualidade contínua*
