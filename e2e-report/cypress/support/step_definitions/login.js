import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

// Cenario: Login com credenciais validas
When("o usuario insere credenciais validas", () => {
  LoginPage.preencherUsuario("john");
  LoginPage.preencherSenha("demo");
  LoginPage.clicarLogin();
});

Then("o usuario deve ser redirecionado para a pagina de contas", () => {
  cy.get("#showOverview > .title", { timeout: 10000 })
    .should("be.visible")
    .and("contain", "Accounts Overview");
});

// Cenario: Login com senha incorreta
When("ele preenche o usuario {string} e a senha {string}", (usuario, senha) => {
  LoginPage.preencherUsuario(usuario);
  LoginPage.preencherSenha(senha);
});

When("clica no botao de login", () => {
  LoginPage.clicarLogin();
});

Then("deve visualizar a mensagem de erro {string}", (mensagem) => {
  cy.get("#rightPanel").should("contain.text", mensagem);
});