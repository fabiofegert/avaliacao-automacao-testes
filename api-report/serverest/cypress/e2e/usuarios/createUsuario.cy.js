/// <reference types="cypress" />

describe('ServeRest - Criar Usuário', () => {
  it('Deve criar um usuário com sucesso (ou já existente)', () => {
    const timestamp = Date.now()
    const nome = `Fábio QA ${timestamp}`
    const email = `fabio.qa.${timestamp}@teste.com`

    cy.createUsuario(nome, email)
  })
})
