# 📱 Projeto: Automação de Testes Mobile – WebdriverIO + Appium

Este projeto realiza a automação de testes mobile utilizando **WebdriverIO**, **Appium** e **Mocha**, focando no app de exemplo `ApiDemos-debug.apk`.

---

## 🧱 Estrutura de Pastas

mobile-tests/
├── apps/ # APK de teste
│ └── ApiDemos-debug.apk
├── configs/ # Configuração WDIO
│ └── wdio.android.conf.js
├── test/
│ └── specs/
│ └── basic/
│ ├── login.spec.js
│ └── form.spec.js
├── node_modules/ # Dependências (ignorado no Git)
├── allure-results/ # Resultados brutos (ignorado)
├── allure-report/ # Relatório gerado (ignorado)
├── package.json
├── .gitignore

---

## ⚙️ Tecnologias Utilizadas

- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
- Mocha (framework de testes)
- Allure Reports (para relatório visual)

---

## ▶️ Como Executar os Testes

### 1. Instalar dependências

```bash
npm install

2. Rodar todos os testes
npm run test

📊 Gerar Relatório Allure
1. Instale o Allure CLI (caso ainda não tenha):
Instalação oficial

2. Após rodar os testes:
npm run report

Isso irá:

Gerar o relatório atualizado

Abrir no navegador local automaticamente

🧪 Testes incluídos
login.spec.js
→ Valida navegação e marcação de checkbox.

form.spec.js
→ Realiza scroll até "Edit text preference", preenche o campo, e valida o valor inserido.

📦 Scripts no package.json

json
"scripts": {
  "test": "npx wdio ./configs/wdio.android.conf.js",
  "report": "allure generate allure-results --clean -o allure-report && allure open"
}
🚫 Arquivos ignorados (.gitignore)
node_modules/

allure-results/

allure-report/

mobile-tests/apps/*.apk

✅ Autor
Fábio Fegert
Automação de testes mobile com foco em confiabilidade, estrutura limpa e relatórios profissionais.

