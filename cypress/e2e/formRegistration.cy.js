describe('Registration Form', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    })
  
    it('User must be able to register successfully', ()=>{
      cy.getByData('button-register').click()
      cy.getByData('name-input').type('Kamylla Barreto')
      cy.getByData('email-input').type('kamylla@email.com')
      cy.getByData('password-input').type('456789')
      cy.getByData('button-toSend').click()
      cy.getByData('message-sucess').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })
  })