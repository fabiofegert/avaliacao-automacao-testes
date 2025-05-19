# 📦 Projeto de Avaliação – Automação de Testes

Este repositório contém a estrutura completa de testes automatizados para múltiplos contextos (API, E2E, Carga e Mobile), utilizando ferramentas modernas, relatórios HTML e integração contínua.

---

## 📁 Estrutura do Projeto

.
├── api-report/ # Testes de API com Cypress + Mochawesome
├── carga-report/ # Testes de carga com K6 e relatório HTML
├── e2e-report/ # Testes E2E com Cypress + Cucumber + Mochawesome
├── mobile-tests/ # Testes Mobile com WebdriverIO + Appium
│ ├── configs/ # Configuração do WebdriverIO
│ ├── test/specs/ # Casos de teste mobile
│ ├── apps/ # APK de testes (ApiDemos)
│ └── README.md # Instruções específicas
├── .github/workflows/ # Pipeline de CI/CD (simulado para mobile)
│ └── ci.yml
├── .gitignore
├── package.json
└── README.md # Você está aqui

---

## 🧪 Execução dos Testes

### ✅ Pré-requisitos

- Node.js 18+
- Java JDK instalado (Appium)
- Android SDK configurado (para testes mobile)
- Appium 2 instalado globalmente
- Cypress e WebdriverIO instalados localmente

---

### ▶️ Rodar Testes Localmente

#### API:

cd api-report
npx cypress run
E2E:

cd e2e-report
npx cypress run
Carga (K6):

cd carga-report
k6 run scripts/test-carga.js --summary-export=results/summary.json
node generate-report.js
Mobile:

cd mobile-tests
npm install
npm test
📊 Relatórios
API, E2E: mochawesome-report/mochawesome.html

Carga: carga-report/results/summary.html

Mobile: allure-report/index.html (via npm run report)

🚀 CI/CD (GitHub Actions)
O pipeline é executado automaticamente a cada push na branch master.

Simula execução de testes Mobile

Valida execução dos demais testes

Gera relatórios locais

⚠️ Testes mobile não são executados no GitHub Actions, pois o ambiente não suporta emuladores Android. O pipeline valida apenas a integração.

👨‍💻 Autor
Fábio Fegert – github.com/fabiofegert

