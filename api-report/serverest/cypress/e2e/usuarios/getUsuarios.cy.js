/// <reference types="cypress" />

describe('ServeRest - Usuários', () => {
  it('Deve listar os usuários com sucesso', () => {
    cy.getUsuarios()
  })
})
