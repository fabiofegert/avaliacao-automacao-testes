Cypress.Commands.add('getUsuarios', () => {
  cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios',
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.usuarios).to.be.an('array')
  })
})
Cypress.Commands.add('createUsuario', (nome, email) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: {
      nome: nome,
      email: email,
      password: 'teste123',
      administrador: 'true'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.be.oneOf([201, 400])
  })
})
Cypress.Commands.add('buscarUsuarioPorEmail', (email) => {
  cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios',
  }).then((response) => {
    const encontrado = response.body.usuarios.find((u) => u.email === email)
    expect(encontrado).to.exist
    expect(encontrado.email).to.equal(email)
  })
})
Cypress.Commands.add('atualizarUsuario', (id, novoNome) => {
  cy.request({
    method: 'PUT',
    url: `https://serverest.dev/usuarios/${id}`,
    body: {
      nome: novoNome,
      email: `fabio.editado@teste.com`,
      password: 'teste123',
      administrador: 'true'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.be.oneOf([200, 400])
  })
})

