describe('Registration Form', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  it('User must be able to register successfully', ()=>{
    cy.getByData('botao-cadastro').click()
    cy.getByData('nome-input').type('Gui Lima')
    cy.getByData('email-input').type('gui@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('message-sucess').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
  })
})