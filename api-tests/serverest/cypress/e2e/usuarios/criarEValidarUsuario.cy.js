/// <reference types="cypress" />

describe('ServeRest - Criar e Validar Usuário', () => {
  it('Deve criar um usuário e confirmar que ele existe na listagem', () => {
    const timestamp = Date.now()
    const nome = `Fábio QA ${timestamp}`
    const email = `fabio.qa.${timestamp}@teste.com`

    cy.createUsuario(nome, email)
    cy.buscarUsuarioPorEmail(email)
  })
})
