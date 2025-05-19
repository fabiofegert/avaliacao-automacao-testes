/// <reference types="cypress" />

describe('ServeRest - Editar e Deletar Usuário', () => {
  it('Deve criar, editar e deletar um usuário', () => {
    const timestamp = Date.now()
    const nome = `Fábio QA ${timestamp}`
    const email = `fabio.qa.${timestamp}@teste.com`

    // Cria o usuário
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: nome,
        email: email,
        password: 'teste123',
        administrador: 'true'
      }
    }).then((res) => {
      const id = res.body._id
      expect(res.status).to.eq(201)

      // Atualiza o nome
      cy.atualizarUsuario(id, `${nome} Editado`)

      // Deleta o usuário
      cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${id}`,
      }).then((del) => {
        expect(del.status).to.eq(200)
      })
    })
  })
})
