
# 🤖 Testes Mobile com Appium + WebdriverIO – Avaliação Técnica

Este projeto executa testes automatizados em dispositivos Android utilizando **WebdriverIO** com **Appium** e gera relatórios com **Allure**.

---

## 📱 Requisitos

- Node.js 20+
- Android Studio (com emulador configurado)
- Appium (instalado via npm)
- Dispositivo/emulador Android conectado
- Allure CLI instalado (`npm install -g allure-commandline`)

---

## 🚀 Como executar os testes

### 1. Inicie um emulador Android

- Abra o Android Studio
- Vá em `Device Manager`
- Clique em ▶️ no emulador desejado

### 2. No terminal, execute os testes:

```
npm run test:local
```

---

## 📊 Gerar relatório Allure

Após rodar os testes, gere o relatório com:

```
npm run report
```

Isso irá:

- Gerar os dados na pasta `allure-report/`
- Abrir o relatório automaticamente no navegador (`http://127.0.0.1:XXXXX`)

---

## 🧪 Testes disponíveis

- `form.spec.js` – Preenchimento de formulário
- `login.spec.js` – Teste de login

---

## ⚠️ Possíveis erros e soluções

- **"Could not find a connected Android device"**  
  Certifique-se de que um emulador Android está **ligado e pronto** antes de rodar os testes.

- **Appium não fecha corretamente?**  
  Pode ignorar a falha do `taskkill` — isso não afeta o relatório ou os resultados dos testes.

---

## 🔗 Autor

Fábio Fegert – *QA Sênior com foco em automação mobile e performance*
