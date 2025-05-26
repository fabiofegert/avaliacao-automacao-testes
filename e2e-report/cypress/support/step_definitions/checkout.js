import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../pages/CheckoutPage";

Given("que o usuario ja esta logado no Parabank", () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  cy.get("input[name='username']").type("john");
  cy.get("input[name='password']").type("demo");
  cy.get("input[type='submit']").click();
  cy.contains("Accounts Overview").should("be.visible");
});

When("acessa a pagina de abertura de conta", () => {
  CheckoutPage.acessarAberturaConta();
});

When("seleciona o tipo de conta {string}", (tipo) => {
  CheckoutPage.selecionarTipoConta(tipo);
});

When("confirma a abertura da conta", () => {
  CheckoutPage.confirmarAbertura();
});

Then("deve visualizar uma mensagem de sucesso com o numero da nova conta", () => {
  CheckoutPage.validarMensagemSucesso();
});