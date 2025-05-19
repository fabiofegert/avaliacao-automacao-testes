class ExtratoPage {
  acessarContaDetalhada() {
    cy.contains("Accounts Overview").click();
    cy.get("table a").first().click(); // Clica na primeira conta
  }

  validarHistoricoTransacoes() {
    cy.contains("Account Details").should("be.visible");
    cy.get("table").should("contain", "Transaction Date");
  }
}

export default new ExtratoPage();