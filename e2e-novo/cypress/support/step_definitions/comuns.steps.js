import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa o site do Parabank", () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  cy.contains("Customer Login").should("be.visible");
});
