# Projeto de Avaliação – Automação de Testes

Este repositório contém a estrutura completa de testes automatizados para múltiplos contextos (API, E2E, Carga e Mobile), utilizando ferramentas modernas e práticas de CI/CD.

## 📁 Estrutura do Projeto

```
.
├── api-tests/            # Testes de API
├── carga-tests/          # Testes de carga (performance)
├── e2e-tests/            # Testes end-to-end com Cypress
├── mobile-tests/         # Testes mobile com WebdriverIO + Appium
│   ├── configs/          # Configuração do WebdriverIO
│   ├── test/specs/       # Casos de teste
│   ├── apps/             # APK utilizado (ApiDemos)
│   └── README.md         # Instruções específicas (opcional)
├── .github/workflows/    # Pipeline de CI/CD
│   └── ci.yml
├── .gitignore
├── package.json
└── README.md             # Você está aqui
```

## 🧪 Execução dos Testes

### 📌 Pré-requisitos

- Node.js 18+
- Java instalado (para Appium)
- Android SDK configurado (para testes mobile)
- Appium 2 instalado globalmente

### ✅ Rodar testes Mobile localmente

```bash
cd mobile-tests
npm install
npm test
```

### 📊 Gerar Relatório Allure

```bash
npm run report
```

### 🚀 CI/CD (GitHub Actions)

O pipeline é executado automaticamente a cada push na branch `master`.

- CI roda `npm test` dentro da pasta `mobile-tests/`
- Relatórios são gerados localmente via Allure
- Testes Mobile são simulados no CI por **limitação de ambiente** (GitHub Actions não suporta emuladores Android)

## ⚠️ Observação

Os testes **mobile** não são executados no GitHub Actions por limitações de ambiente. O pipeline CI foi ajustado para simular o processo e validar a integração.

## 👨‍💻 Autor

Fábio Fegert – [github.com/fabiofegert](https://github.com/fabiofegert)