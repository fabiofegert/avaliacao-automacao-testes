import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../pages/CheckoutPage";
import LoginPage from "../../pages/LoginPage";



Given("que o usuário já está logado no Parabank", () => {
  cy.visit("https://parabank.parasoft.com");
  LoginPage.preencherUsuario("john");
  LoginPage.preencherSenha("demo");
  LoginPage.clicarLogin();
});

When("acessa a página de abertura de conta", () => {
  CheckoutPage.acessarAberturaConta();
});

When("seleciona o tipo de conta {string}", (tipo) => {
  CheckoutPage.selecionarTipoConta(tipo);
});

When("confirma a abertura da conta", () => {
  CheckoutPage.confirmarAbertura();
});

Then("deve visualizar uma mensagem de sucesso com o número da nova conta", () => {
  CheckoutPage.validarMensagemSucesso();
});