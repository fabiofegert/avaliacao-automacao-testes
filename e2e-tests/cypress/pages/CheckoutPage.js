class CheckoutPage {
  static acessarAberturaConta() {
    cy.contains("Open New Account").should("be.visible").click();
    cy.url().should("include", "/openaccount.htm");
    cy.wait(1000); // Provisório
  }

  static selecionarTipoConta(tipo) {
    cy.get("select[id='type']").select(tipo);
  }

static confirmarAbertura() {
  cy.get("form > div > .button").should("be.visible").click();
  cy.get("form").within(() => {
  cy.get("div > .button").should("be.visible").click();
});
}

static validarMensagemSucesso() {
  // Aguarda a existência da div com o resultado da conta
  cy.get("#openAccountResult").should("exist");

  // Aguarda o conteúdo visível com título de sucesso
  cy.get("#openAccountResult").should("not.have.css", "display", "none");
  cy.get("#newAccountId").should("be.visible");
  cy.contains("Account Opened!").should("be.visible");
}

}
export default CheckoutPage;