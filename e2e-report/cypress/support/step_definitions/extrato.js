import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("que o usuario acessa o site para ver o extrato", () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  cy.contains("Customer Login"); // valida que a pagina carregou
});

When("preenche login no extrato com o usuario {string} e senha {string}", (usuario, senha) => {
  LoginPage.preencherUsuario(usuario);
  LoginPage.preencherSenha(senha);
});

When("clica no botao de login do extrato", () => {
  LoginPage.clicarLogin();
});

When("acessa a conta detalhada", () => {
  cy.contains("Accounts Overview").click();
  cy.get("table a").first().click();
});

Then("ele deve visualizar o historico de transacoes", () => {
  cy.contains("Account Details").should("be.visible");
  cy.get("table").then(($table) => {
    expect($table.text()).to.match(/Transaction Date|No transactions|Date/);
  });
});