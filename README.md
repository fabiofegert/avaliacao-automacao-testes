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

---

## 👤 Autor

**Fábio Fegert**  
QA Sênior | Automação, Estratégia e Entregas com foco em qualidade realista
