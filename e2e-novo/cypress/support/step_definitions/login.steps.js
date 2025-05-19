import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

// Cenário: Login com credenciais válidas
When("o usuário insere credenciais válidas", () => {
  LoginPage.preencherUsuario("john");
  LoginPage.preencherSenha("demo");
  LoginPage.clicarLogin();
});

Then("o usuário deve ser redirecionado para a página de contas", () => {
  cy.get("#showOverview > .title", { timeout: 10000 })
    .should("be.visible")
    .and("contain", "Accounts Overview");
});

// Cenário: Login com senha incorreta
When("ele preenche o usuário {string} e a senha {string}", (usuario, senha) => {
  LoginPage.preencherUsuario(usuario);
  LoginPage.preencherSenha(senha);
});

When("clica no botão de login", () => {
  LoginPage.clicarLogin();
});

Then("deve visualizar a mensagem de erro {string}", (mensagem) => {
  cy.get("#rightPanel").should("contain.text", mensagem);
});