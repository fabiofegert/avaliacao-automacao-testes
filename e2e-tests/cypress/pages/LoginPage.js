class LoginPage {
  preencherUsuario(usuario) {
    cy.get('input[name="username"]').clear().type(usuario);
  }

  preencherSenha(senha) {
    cy.get('input[name="password"]').clear().type(senha);
  }

  clicarLogin() {
    cy.get('input[value="Log In"]').click();
  }
}

export default new LoginPage();
