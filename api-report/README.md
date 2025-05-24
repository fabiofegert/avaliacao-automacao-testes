# 📦 Avaliação Técnica - Automação de Testes de API

Este repositório contém testes automatizados com **Cypress** para validar operações da API [ServeRest](https://serverest.dev).

---

## 📁 Estrutura

- `getUsuarios.cy.js` – Lista e valida usuários
- `createUsuario.cy.js` – Cria novo usuário
- `criarEValidarUsuario.cy.js` – Cria e busca por e-mail
- `editarEDeletarUsuario.cy.js` – Fluxo completo (POST + PUT + DELETE)

---

## ✅ Requisitos

- Node.js 20+
- Cypress 14.3.3
- Mochawesome
- API do ServeRest rodando localmente

---

## 🚀 Como executar os testes e gerar o relatório

### 1. Clonar o projeto e acessar a pasta

```
cd api-report/serverest
```

> ⚠️ **Importante:** Certifique-se de que a API ServeRest esteja disponível e configurada localmente.

---

### 2. Instalar as dependências

```
npm install
```

---

### 3. Executar os testes

```
npm run test
```

Isso irá gerar arquivos `mochawesome*.json` na pasta `cypress/reports/json/`.

---

### 4. Mover os arquivos para a pasta `raw`

```
cd cypress/reports/json
mkdir -p raw
mv mochawesome*.json raw/
```

---

### 5. Gerar o arquivo mesclado

```
npx mochawesome-merge raw/*.json > merged-report.json
```

---

### 6. Gerar o relatório final em HTML

```
npx marge raw/*.json -f index -o ../html
```

O relatório será salvo em:

```
cypress/reports/html/index.html
```

> 📂 **Atenção:** A pasta `assets/` é essencial para o relatório funcionar corretamente. **Não remova.**

---

## 📄 Observações

- Todos os testes usam comandos customizados para clareza e reuso.
- A geração do relatório é feita com **mochawesome + marge**.
- A execução também pode ser feita via script único:

```
npm run report
```

---

## 🔗 Autor

Fábio Fegert – *QA Sênior com foco em automação e performance*